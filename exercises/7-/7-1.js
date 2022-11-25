"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;
let numbers = [];


setup();

calculateAverage();

function setup(){
    for(let i = 0; i <1000 ; i++){
        numbers[i] = Utils.randomNumber(0,100);
    }
    console.log(calculateAverage(numbers));
}



function calculateAverage(ListNumbers){
    let sum = 0;
    for(let i=0;i < ListNumbers.length;i++){
        sum += ListNumbers[i];
    }
    return sum/ListNumbers.length;
}