import React, { useLayoutEffect } from "react";
import { fabric } from 'fabric';
import * as tf from '@tensorflow/tfjs';
import { PredictionModel } from "./PredictionModel";

import "../../../../css/components/Student/AICanvas.css";

//variables
let model;
let canvas;
let ai;

//load the model
async function start(mode, prompt) {
    //load the model 
    model = await tf.loadLayersModel('/model/model.json');

    ai = new PredictionModel(model, canvas, mode, prompt);

    //warm up 
    ai.model.predict(tf.zeros([1, 28, 28, 1]));

    //allow drawing on the canvas 
    allowDrawing();

    //load the class names
    await ai.loadDict()
}


//allow drawing on canvas
function allowDrawing() {
    canvas.isDrawingMode = true;
}

//Undo the last move of the user
export function undoLastMove(){
    //TODO make it only remove the last stroke
    canvas.clear();
    canvas.backgroundColor = "#fff";
}

/**
 * It returns the SVG code for the current canvas
 * @returns The canvas is being returned as an SVG.
 */
export function save(){
    return canvas.toSVG({
        suppressPreamble: true,
    });
}

export default function AICanvas({mode, prompt = null}) {
    if (mode != "level" && mode != "sandbox") {
        console.error(`mode is ${mode}, it should be level or sandbox`);
        document.write(`<h1 style='color: red;'>mode is ${mode}, it should be level or sandbox</h1>`);
        return;
    }

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
            ai.getFrame();
            ai.mousePressed = false
        });
        canvas.on('mouse:down', function (e) {
            ai.mousePressed = true
        });
        canvas.on('mouse:move', function (e) {
            ai.recordCoor(e);
        });
        // INIT the AI
        start(mode, prompt);

    }, []);
    return (
        <canvas className="canvas" id="canvas" />
    )
}