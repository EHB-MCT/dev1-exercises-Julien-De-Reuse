"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i<=6) {
        let x = 75 + 50*i;
        let y = x;
        Utils.drawLine(75, y, 325, y);
        Utils.drawLine(x, 75, x, 325);
        i++;
    }
}