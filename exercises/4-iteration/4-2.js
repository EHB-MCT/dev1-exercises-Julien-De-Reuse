"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw(){
    context.fillStyle = "#000000";    
    context.fillRect(0, 0, width, height);   
}

let amount =  75;
for(let i = 0; i< amount ;i++){
    drawBubbles();
}

function drawBubbles(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    let color = "rgba(" + r + "," + g + ',' + b + ',' + 0.5 +")";

    let x = 200+ Math.random()*(width-400);
    let y = 200+ Math.random()*(height-400);
    let radius = Math.random()*50+10;
    context.fillStyle = color;
    Utils.fillCircle(x, y, radius);
}