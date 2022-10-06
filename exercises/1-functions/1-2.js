"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {

    context.lineWidth = 10;
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,50);
    context.lineTo(200,200);
    context.lineTo(50,200);
    context.lineTo(50,50);
    context.stroke();
    
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.moveTo(50,200);
    context.lineTo(200,50);
    context.stroke();

}