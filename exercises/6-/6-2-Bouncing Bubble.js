"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;
let dX = 10;
let dY = 10;

drawBubble();

function drawBubble(){
    x= x+dX
    y = y+dY
    
    context.fillStyle = "white";
    context.fillRect(0,0,width,height);
    context.fillStyle = "blue";
    Utils.fillCircle(100,100, 75);
    requestAnimationFrame(drawBubble);
}
