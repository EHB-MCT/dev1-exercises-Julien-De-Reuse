"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

console.log("Working?");

let width = context.canvas.width;
let height = context.canvas.height;
console.log ("X-as",width);
console.log ("Y-as",height);

drawBars();

function drawBars() {
    context.fillStyle = "rgb(234,158,36)";
    context.fillRect(0,0,width, height/4);
    context.fillStyle = "rgb(252,112,27)";
    context.fillRect(0,height/4, width, height/4);
    context.fillStyle = "rgb(165,31,6)";
    context.fillRect(0,height/2, width, height/4);
    // sun behind bleu sea//
    drawSun();
    context.fillStyle = "rgb(1,25,140)";
    context.fillRect(0,3*(height/4), width, height/4);
}


function drawSun() {
    context.fillStyle = "yellow";
    context.ellipse(width/2, 3 * height/4, width/4, width/4, 0, 0, Math.PI*2);
    context.fill();
}

