"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {

    context.lineWidth = 5;
    context.strokeStyle = "RGB(217 153 155)";
    context.beginPath();
    context.rect(50,50,150,150);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = "RGB(217 153 155)";
    context.beginPath();
    context.rect(200,200,150,150);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = "RGB(217 153 155)";
    context.fillStyle = "black";
    context.beginPath();
    context.rect(125,125,150,150);
    context.stroke();
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = "RGB(217 153 155)";
    context.beginPath();
    context.rect(275,75,50,50);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = "RGB(217 153 155)";
    context.beginPath();
    context.rect(75,275,50,50);
    context.stroke();

    context.fillStyle = "black";
    context.beginPath();
    context.rect(50,325,25,25);
    context.fill();

    context.fillStyle = "black";
    context.beginPath();
    context.rect(325,50,25,25);
    context.fill();

}