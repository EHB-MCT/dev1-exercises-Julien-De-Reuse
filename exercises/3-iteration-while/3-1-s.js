"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawShrinkingBars();
}

function drawShrinkingBars() {
    let i = 0;
    let step = 20; 
    while (i <= 14) {
        let gray = 255 - (i *step);
        context.fillStyle = Utils.rgb(gray, gray, gray);
        context.fillRect(50 + step*i, 50+ (step*i/2), 10, 300 - (step*i));
        i++;
    }
}