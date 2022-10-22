"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 6) {
        Utils.drawLine(50 + 25*i, 200+ 25*i,200 +25*i, 50+25*i);
        Utils.drawLine(50 +25*i, 200 - 25*i, 200 +25*i, 350 - 25*i);
        i++;
    }
}