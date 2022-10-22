"use strict";
import context from "../3-iteration-while/scripts/context.js";
import * as Utils from "../3-iteration-while/scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawConcentricCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawConcentricCircles() {
    context.fillStyle = "#AAAAAA";
    let i = 0;
    let space= 25;
    while (i<=6) {
        let radius = 150-(space*i);
        //This fillAndStrokeCircle function does not exist yet!
        //Add it to the utils script:
        //The function draws the stroke of a circle AND fills it
        //and has the following parameters: x,y,radius
        Utils.fillAndStrokeCircle(200, 200, radius);
        i++;
    }
}

