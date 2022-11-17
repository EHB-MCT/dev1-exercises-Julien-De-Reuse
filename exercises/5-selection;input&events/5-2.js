"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;
let spacing = 10;

// drawMaze();
// function drawMaze(){
//     for( let x = 0; x < width; x = x+10){
//         for(let y = 0; y < height ; y = y+10){
//         context.lineWidth = 5;
//         context.lineCap = "round";
//         let r = Math.round(Math.random());
//         if (r== 0){
//         Utils.drawLine(x, y,x+spacing,y+spacing);
//         } else{
//         Utils.drawLine(x, y+spacing,x+spacing,y);
//         }}
// }
// }

context.fillRect(0,0,width,height);
drawMaze();
function drawMaze(){
    for( let x = 0; x < width; x = x+10){
        for(let y = 0; y < height ; y = y+10){
        context.lineWidth = 5;
        context.lineCap = "round";
        let r = Math.random()*255;
        let g = Math.random()*255;
        let b = Math.random()*255;
        context.strokeStyle = Utils.rgb(r,g, b); 
        let random = Math.round(Math.random());
        if ( random== 0){
        Utils.drawLine(x, y,x+spacing,y+spacing);
        } else{
        Utils.drawLine(x, y+spacing,x+spacing,y+0);
        }}
}
}