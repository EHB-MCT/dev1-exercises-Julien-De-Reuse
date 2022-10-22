"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradient();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);

}

function drawGradient() {
    let i = 1;
    while (i <= 255) {
        context.strokeStyle = Utils.rgb(i, i, i);
        Utils.drawLine(50+1*i, 50, 50+1*i, 350);
        i++;
    }
}