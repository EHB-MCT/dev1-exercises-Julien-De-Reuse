"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawBlockyGradient();
    context.strokeRect(50, 50, 300, 300);

}

function drawBlockyGradient() {
    let i = 0;
    while (i < 6) {
        context.fillStyle = Utils.rgb(i * 50, i*50, i*50);
        context.fillRect(50+(i*50), 50, 50, 300);
        i++;
    }
}