"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawEllipse();

function drawEllipse(){
for (let i = 0; i <25; i++){
    let ellipse ={
        x: 20+50*i,
        y: height-100,
        rX:20,
        rY: 40,
        hue: Utils.randomNumber (20,40)
    };

    Utils.drawLine(ellipse.x,ellipse.y+(ellipse.rY/2),ellipse.x, ellipse.y+(ellipse.rY*2));
    Utils.fillEllipse(ellipse.x,ellipse.y,ellipse.rX, ellipse.rY);context.fillStyle= Utils.hsl(ellipse.hue, 100, 50);
    console.log(ellipse);
}
}