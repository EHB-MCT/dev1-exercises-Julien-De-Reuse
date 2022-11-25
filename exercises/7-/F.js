"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";
let width = context.canvas.width;
let height = context.canvas.height;

love(100);
function love(size){
    let xMiddle = width/2;
    let yMiddle = height/2;
    context.beginPath();
    context.moveTo(xMiddle,yMiddle);
    context.lineTo(xMiddle+size,yMiddle-size);
    context.lineTo(xMiddle+size*2,yMiddle);
    context.moveTo(xMiddle,yMiddle);
    context.lineTo(xMiddle-size,yMiddle+size);
    context.lineTo(xMiddle-size*2,yMiddle);
    context.moveTo(xMiddle,yMiddle);
    context.lineTo(xMiddle-size,yMiddle-size);
    context.lineTo(xMiddle,yMiddle-size*2);
    context.moveTo(xMiddle,yMiddle);
    context.lineTo(xMiddle+size,yMiddle+size);
    context.lineTo(xMiddle,yMiddle+size*2);
    context.lineWidth = 50;
    context.strokeStyle = Utils.hsl(Utils.randomNumber(0,360),70,70);
    context.stroke();
}