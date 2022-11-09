"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = 600;
let height = 300;

draw();

function draw(){
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#ffa51b";    
    context.fillRect(0, 0, width, height);   
}

drawLines();

function drawLines(){
    let step = 10;
    let amount = width/step;
    for(let i = 0; i< amount ;i++){
        Utils.drawLine(step *i, 0, width - (step*i), height);
    }
    for (let i = 0; i-1<amount/2 ;i++){
        Utils.drawLine(0, step *i, width, height - (step*i));
    }
    
}