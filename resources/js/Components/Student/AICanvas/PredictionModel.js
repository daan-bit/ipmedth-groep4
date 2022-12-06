import * as tf from '@tensorflow/tfjs';

export class PredictionModel {
    constructor(model, canvas) {
        this.model = model;
        this.canvas = canvas;
        this.classNames = [];
        this.coords = [];
        this.mousePressed = false;
    }
    //record the current drawing coordinates
    recordCoor(event) {
        var pointer = this.canvas.getPointer(event.e);
        var posX = pointer.x;
        var posY = pointer.y;

        if (posX >= 0 && posY >= 0 && this.mousePressed) {
            this.coords.push(pointer);
        }
    }

    //get the best bounding box by trimming around the drawing
    getMinBox() {
        //get coordinates 
        let [coorX, coorY] = this.coords.map(function (p) {
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
    getImageData() {
        //get the minimum bounding box around the drawing 
        const mbb = this.getMinBox()

        //get image data according to dpi 
        const dpi = window.devicePixelRatio
        const imgData = this.canvas.contextContainer.getImageData(mbb.min.x * dpi, mbb.min.y * dpi,
            (mbb.max.x - mbb.min.x) * dpi, (mbb.max.y - mbb.min.y) * dpi);

        return imgData
    }


    //get the prediction 
    getFrame() {
        //make sure we have at least two recorded coordinates 
        if (this.coords.length >= 2) {

            //get the image data from the canvas 
            const imgData = this.getImageData()

            //get the prediction 
            const pred = this.model.predict(this.preprocess(imgData)).dataSync()

            //find the top 5 predictions 
            const indices = this.findIndicesOfMax(pred, 5)
            const probs = this.findTopValues(pred, 5)
            const names = this.getClassNames(indices)

            this.getTop5(names, probs)
        }
    }

    //Get the top 5 results
    getTop5(top5, probs) {
        //loop over the predictions 
        for (let i = 0; i < top5.length; i++) {
            console.log(top5[i] + " : " + Math.round(probs[i] * 100));
        }
        console.log("\n");
    }

    //get the the class names 
    getClassNames(indices) {
        var outp = []
        for (var i = 0; i < indices.length; i++)
            outp[i] = this.classNames[indices[i]]
        return outp
    }

    //load the class names 
    async loadDict() {
        const loc = '/model/class_names.txt';
        await fetch(loc)
            .then(async (response) => {
                const text = await response.text();
                this.success(text);
            })
            .catch(error => console.log(error));
    }

    //load the class names
    success(data) {
        const lst = data.split(/\n/)
        for (var i = 0; i < lst.length - 1; i++) {
            let symbol = lst[i]
            this.classNames[i] = symbol
        }
    }

    //get indices of the top probs
    findIndicesOfMax(inp, count) {
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
    findTopValues(inp, count) {
        var outp = [];
        let indices = this.findIndicesOfMax(inp, count)
        // show 5 greatest scores
        for (var i = 0; i < indices.length; i++)
            outp[i] = inp[indices[i]]
        return outp
    }

    //preprocess the data
    preprocess(imgData) {
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
}