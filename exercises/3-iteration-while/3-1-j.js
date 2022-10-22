"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawConcentricPattern();
}

function drawConcentricPattern() {
    context.lineWidth = 2;
    let i = 1;
    while (i<=10) {
        let size = 15 *i;
        Utils.strokeCircle(200, 200, size);
        Utils.strokeCircle(100, 200, size);
        Utils.strokeCircle(300, 200, size);
        i++;
    }
}