"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {

    //Letter J
    context.lineWidth = 10
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(50,25)
    context.lineTo(200,25)
    context.moveTo(125,25)
    context.lineTo(125,200)
    context.lineTo(50,200)
    context.lineTo(50,160)
    context.stroke();

    // U
    context.lineWidth = 10
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(225,25)
    context.lineTo(225,175)
    context.lineTo(300,200)
    context.lineTo(375,175)
    context.lineTo(375,25)
    context.stroke();

    // L
    context.lineWidth = 10
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(400,25);
    context.lineTo(400,200);
    context.lineTo(500,200);
    context.stroke();

    // I
    context.lineWidth = 10
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(550,25);
    context.lineTo(550,35);
    context.moveTo(550,50);
    context.lineTo(550,200);
    context.stroke();

    // E
    context.lineWidth = 10
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(600,25);
    context.lineTo(600,200);
    context.lineTo(750,200);
    context.moveTo(600,100);
    context.lineTo(700,100);
    context.moveTo(600,25);
    context.lineTo(750,25);
    context.stroke();

    // N
    context.lineWidth = 10
    context.strokeStyle = 'orange';
    context.beginPath();
    context.moveTo(775,200);
    context.lineTo(775,25);
    context.lineTo();
    context.stroke();

}
