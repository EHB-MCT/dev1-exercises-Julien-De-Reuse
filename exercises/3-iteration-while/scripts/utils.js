"use strict";

import context from "./context.js";
/**
 * draws a line beteen two points
 * @param {*} x1 X coordinate of the starting point
 * @param {*} y1 Y coordinate of the starting point
 * @param {*} x2 x coodimate of the end point
 * @param {*} y2 y coordinate of the ending point
 */
export function drawLine(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}
export function strokeCircle(x1, y1, radius){
    context.beginPath();
    context.ellipse(x1, y1, radius,radius, Math.PI *2, 0, Math.PI *2);
    context.stroke();
}

export function rgb(r, g, b){
    let rgb = "rgb(" + r + "," + g + "," + b +")";
    return rgb;
}

export function fillAndStrokeCircle(x1, y1, radius){
    context.fill();
    context.beginPath();
    context.ellipse(x1, y1, radius,radius, Math.PI *2, 0, Math.PI *2);
    context.stroke();
}

export function fillCircle(x1, y1, radius){
    context.beginPath();
    context.ellipse(x1, y1, radius,radius, Math.PI *2, 0, Math.PI *2);
    context.fill();
}


export function fillAndStrokeEllipse(x, y, rX, rY){
    fillEllipse(x, y, rX, rY);
    strokeEllipse(x, y, rX, rY);
}

export function fillEllipse(x, y, rX, rY){
    context.beginPath();
    context.ellipse(x,y, rX, rY, 0, 0, Math.PI*2);
    context.fill();
}

export function strokeEllipse(x, y, rX, rY){
    context.beginPath();
    context.ellipse(x,y, rX, rY, 0, 0, Math.PI*2);
    context.stroke();
}