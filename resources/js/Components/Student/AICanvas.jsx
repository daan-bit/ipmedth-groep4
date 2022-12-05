import React, { useLayoutEffect } from "react";
import { fabric } from 'fabric';
import * as tf from '@tensorflow/tfjs';

const styles = {
    canvas: {
        border: "3px black solid",
    }
}

//variables
let model;
let canvas;
let classNames = [];
let coords = [];
let mousePressed = false;

//record the current drawing coordinates
function recordCoor(event) {
    var pointer = canvas.getPointer(event.e);
    var posX = pointer.x;
    var posY = pointer.y;

    if (posX >= 0 && posY >= 0 && mousePressed) {
        coords.push(pointer);
    }
}

//get the best bounding box by trimming around the drawing
function getMinBox() {
    //get coordinates 
    let [coorX, coorY] = coords.map(function (p) {
        return [p.x, p.y];
    });

    //find top left and bottom right corners 
    const min_coords = {
        x: Math.min.apply(null, coorX),
        y: Math.min.apply(null, coorY)
    }
    const max_coords = {
        x: Math.max.apply(null, coorX),
        y: Math.max.apply(null, coorY)
    }

    //return as strucut 
    return {
        min: min_coords,
        max: max_coords
    }
}

//get the current image data 
function getImageData() {
    //get the minimum bounding box around the drawing 
    const mbb = getMinBox()

    //get image data according to dpi 
    const dpi = window.devicePixelRatio
    const imgData = canvas.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
        (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.min.y) * dpi);

    return imgData
}


//get the prediction 
function getFrame() {
    //make sure we have at least two recorded coordinates 
    if (coords.length >= 2) {

        //get the image data from the canvas 
        const imgData = getImageData()

        //get the prediction 
        const pred = model.predict(preprocess(imgData)).dataSync()

        //find the top 5 predictions 
        const indices = findIndicesOfMax(pred, 5)
        const probs = findTopValues(pred, 5)
        const names = getClassNames(indices)

        getTop5(names, probs)
    }
}

//Get the top 5 results
function getTop5(top5, probs) {
    //loop over the predictions 
    for (let i = 0; i < top5.length; i++) {
        console.log(top5[i] + " : " + Math.round(probs[i] * 100));
    }
    console.log("\n");
}

//get the the class names 
function getClassNames(indices) {
    var outp = []
    for (var i = 0; i < indices.length; i++)
        outp[i] = classNames[indices[i]]
    return outp
}

//load the class names 
async function loadDict() {
    const loc = '/model/class_names.txt';
    await fetch(loc)
        .then(async (response) => {
            const text = await response.text();
            success(text);
        })
        .catch(error => console.log(error));
}

//load the class names
function success(data) {
    const lst = data.split(/\n/)
    for (var i = 0; i < lst.length - 1; i++) {
        let symbol = lst[i]
        classNames[i] = symbol
    }
}

//get indices of the top probs
function findIndicesOfMax(inp, count) {
    var outp = [];
    for (var i = 0; i < inp.length; i++) {
        outp.push(i); // add index to output array
        if (outp.length > count) {
            outp.sort(function (a, b) {
                return inp[b] - inp[a];
            }); // descending sort the output array
            outp.pop(); // remove the last index (index of smallest element in output array)
        }
    }
    return outp;
}

//find the top 5 predictions
function findTopValues(inp, count) {
    var outp = [];
    let indices = findIndicesOfMax(inp, count)
    // show 5 greatest scores
    for (var i = 0; i < indices.length; i++)
        outp[i] = inp[indices[i]]
    return outp
}

//preprocess the data
function preprocess(imgData) {
    return tf.tidy(() => {
        //convert to a tensor 
        let tensor = tf.browser.fromPixels(imgData, 1)

        //resize 
        const resized = tf.image.resizeBilinear(tensor, [28, 28]).toFloat()

        //normalize 
        const offset = tf.scalar(255.0);
        const normalized = tf.scalar(1.0).sub(resized.div(offset));

        //We add a dimension to get a batch shape 
        const batched = normalized.expandDims(0)
        return batched
    })
}

//load the model
async function start() {
    //load the model 
    model = await tf.loadLayersModel('/model/model.json')

    //warm up 
    model.predict(tf.zeros([1, 28, 28, 1]))

    //allow drawing on the canvas 
    allowDrawing()

    //load the class names
    await loadDict()
}


//allow drawing on canvas
function allowDrawing() {
    canvas.isDrawingMode = true;
}

export default function AICanvas({ }) {
    useLayoutEffect(() => {
        //INIT the canvas
        canvas = new fabric.Canvas('canvas', {
            height: 600,
            width: 600,
            fireRightClick: true,
            fireMiddleClick: true,
            stopContextMenu: true,
            backgroundColor: "#fff",
            backgroundImage: undefined,
            isDrawingMode: false,
        });

        //INIT the brush
        let pencilBrush = new fabric.PencilBrush(canvas);
        pencilBrush.color = '#000';
        pencilBrush.width = 7;
        canvas.freeDrawingBrush = pencilBrush;
        canvas.requestRenderAll();

        //The mouse movements on the canvas
        canvas.on('mouse:up', function (e) {
            getFrame();
            mousePressed = false
        });
        canvas.on('mouse:down', function (e) {
            mousePressed = true
        });
        canvas.on('mouse:move', function (e) {
            recordCoor(e);
        });
        // INIT the AI
        start();

    }, []);
    return (
        <canvas style={styles.canvas} id="canvas" />
    )
}