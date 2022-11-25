"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;
let dX = 10;
let dY = 10;

// drawBubble();

// function drawBubble(){
//     x= x+dX
//     y = y+dY
    
//     context.fillStyle = "white";
//     context.fillRect(0,0,width,height);
//     context.fillStyle = "blue";
//     Utils.fillCircle(100,100, 75);
//     requestAnimationFrame(drawBubble);
// }

let x;
let y;
let xspeed = 20;
let yspeed = 20;
let size = 100;
let isPlay = true;

window.onclick = click;

setup();
update();
function setup(){
    x = width/2;
    y = height/2;
}

function update(){

    if (isPlay){
        //background
        context.fillStyle = "#fff";
        context.fillRect(0,0,width,height);
    
        //update x cordinaat
        x += xspeed;
        y += yspeed;
    
        //check x border
        if (x >= width-size || x <= size){
            xspeed *=-1;
        }
        if (y >= height-size || y <= size){
            yspeed *=-1;
        }
    
        
    
        //draw circle
        context.fillStyle= "blue";
        // if (x >= width-size || x <= size){
        //     context.fillStyle = "white";
        // }   
        Utils.fillCircle(x,y, size);
        requestAnimationFrame(update);
    }
}

function click(eventData){
    console.log("Clicked!");
    let mouseX = eventData.x;
    let mouseY = eventData.y;
    if(Utils.calculateDistance(x,y,mouseX, mouseY) < size){
        isPlay = false;
        context.fillStyle= "red";
        Utils.fillCircle(mouseX, mouseY, size/2);
    }
}