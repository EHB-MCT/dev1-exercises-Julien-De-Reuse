"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = updateWind;

let snowflakes = [];
let wind = 2;


setup();
draw();
text();


function setup(){
    for(let i = 0;i < 250; i++){
        createSnowflake();
    }
}

function createSnowflake(){
    let snowflake = {
        x: Utils.randomNumber(-width/2,width+500),
        y: 0,
        size: Utils.randomNumber(10,50),
        alpha: Utils.randomNumber(20,60),
        speed: 1 + Math.random()*3
    };

    snowflakes.push(snowflake);
}

function draw(){
    context.fillStyle = "DarkSlateGray";
    context.fillRect(0,0,width,height);

    context.strokeStyle = "white";

    for(let i = 0;i < snowflakes.length; i++){
        let snowflake = snowflakes[i];
        context.strokeStyle = Utils.rgba(255,255,255, snowflake.alpha);

        drawSnowflake(snowflake.x, snowflake.y, snowflake.size);

        snowflake.y += snowflake.speed;
        // snowflake.x += (snowflake.speed)/10;
        snowflake.x += wind;
    }
    // extra snowflakes
    for (let i = 0; i < 5; i++){
        createSnowflake();
    }
    // requestAnimationFrame(draw);
}

function updateWind(e){
    let scaler = 400;
    wind = (width/2 -  e.pageX)/scaler;
    console.log(updateWind);
}

function drawSnowflake(x, y, size) {
    let half = size / 2;
    let third = size / 3;
    context.lineWidth = size / 5;
    context.beginPath();
    context.moveTo(x, y - half);
    context.lineTo(x, y + half);
    context.moveTo(x - half, y);
    context.lineTo(x + half, y);
    context.moveTo(x - third, y - third);
    context.lineTo(x + third, y + third);
    context.moveTo(x - third, y + third);
    context.lineTo(x + third, y - third);
    context.stroke();
}

function text(){
    context.font = "150px VerdanaCalibri";
    context.textAlign = "center";
    context.textBaseline = "middle"; 
    context.fillStyle = "red";
    context.fillText("Merry Christmas!", width/2, height/2);
        // requestAnimationFrame(text);
}