"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;
console.log ("X-as",width);
console.log ("Y-as",height);

let margin = 50;
console.log ("margin 50",margin);

drawLines(margin);

function drawLines(margin) {
    context.beginPath();
    context.moveTo(margin, margin);
    context.lineTo(width - margin, margin);
    context.lineTo(margin, margin + margin);
    context.lineTo(width - margin, margin * 2);
    context.lineTo(margin, margin + margin * 2);
    context.lineTo(width - margin, margin * 3);
    context.lineTo(margin, margin + margin * 3);
    context.lineTo(width - margin, margin * 4);
    context.lineTo(margin, margin + margin * 4);
    context.lineTo(width - margin, margin * 5);
    context.closePath();
    context.stroke();
}