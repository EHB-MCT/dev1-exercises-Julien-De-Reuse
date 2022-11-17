"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.lineWidth = 5;
context.strokeStyle = "red";

window.onmousemove = drawLine;

function drawLine(eventData){
    let x = eventData.pageX;
    let y = eventData.pageY;
    context.clearRect(0,0, width, height);
    Utils.drawLine(x, -y, x, height);
    Utils.drawLine(-x, y, width, y);

}