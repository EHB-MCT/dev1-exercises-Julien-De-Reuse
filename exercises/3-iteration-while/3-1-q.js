"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 0;
    let space= 25;
    while (i<=6) {
        let gray = (i *space *2);
        context.fillStyle = Utils.rgb(gray, gray, gray);
        let radius = space *i;
        Utils.fillAndStrokeCircle(200, 200, 150-(space*i));
        i++;
    }
}