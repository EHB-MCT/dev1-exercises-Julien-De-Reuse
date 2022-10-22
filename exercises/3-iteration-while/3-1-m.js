"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawWormhole();
}

function drawWormhole() {
    let i = 0;
    let space = 10;
    let amount = 300/space;
    while (i<=amount) {
        Utils.drawLine(50 + space*i, 50, 350-space*i ,350);
        Utils.drawLine(50, 50 + space*i, 350 ,350-space*i);
        i++;
    }
}