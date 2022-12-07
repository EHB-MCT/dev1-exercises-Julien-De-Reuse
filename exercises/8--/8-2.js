"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;

Setup();

function setup(){
    for(let i = 0; i< 20; i++){
        let ballsize= Utils.randomNumber (2,50);
        let ball ={
            size: ballsize
            x: Utils.randomNumber (size,width-size),
            y: Utils.randomNumber (size,height-size)
            hSpeed:,
            vSpeed:
        };
    }
}