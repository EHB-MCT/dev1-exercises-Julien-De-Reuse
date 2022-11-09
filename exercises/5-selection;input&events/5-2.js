"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();
function drawMaze(){
    for( let x = 0; x < width; x = x+10){
        for(let y = 0; y < height ; y = y+10){
        context.lineWidth = 5;
        let r = Math.round(Math.random());
        if (r== 0){
        Utils.drawLine(x, y,x+10,y+10);
        } else{
        Utils.drawLine(x, y+10,x+10,y+0);
        }}
}
}