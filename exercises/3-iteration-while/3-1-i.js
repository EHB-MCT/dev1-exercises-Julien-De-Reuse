"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawMultipleConcentricCircles();
}

function drawMultipleConcentricCircles() {
    context.lineWidth = 2;
    let i = 0;
    let size = 15*i;
    while (i <= 10) {
        let size = i * 15;
        Utils.strokeCircle(200, 200, size);
        Utils.strokeCircle(50, 50, size);
        Utils.strokeCircle(350, 350, size);
        Utils.strokeCircle(350, 50, size);
        Utils.strokeCircle(50, 350, size);
        i++;
    }
}