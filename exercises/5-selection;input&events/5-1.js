"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;
context.fillRect(0,0, width, height);


//flag red-green

// drawDots();

// function drawDots(){

//     for(let i= 0 ; i < 100000 ; i++){
//         let x = Math.random()*width;
//         let y =  Math.random()*height;
//           if( x < width/2) {
//             context.fillStyle = "red";
//         } else {
//             context.fillStyle = "green";
//         }
//         Utils.fillCircle(x, y, 2);

//         }
// }


//flag Nederland

// drawDots();

// function drawDots(){

//     for(let i= 0 ; i < 100000 ; i++){
//         let x = Math.random()*width;
//         let y =  Math.random()*height;
//           if( y < height/3) {
//             context.fillStyle = "red";
//         } else if (y < height/3*2){
//             context.fillStyle = "white";
//         } else {
//             context.fillStyle = "blue";
//         }
//         Utils.fillCircle(x, y, 2);

//         }
// }


//flag red-white-yelow

// drawDots();

// function drawDots(){

//     for(let i= 0 ; i < 100000 ; i++){
//         let x = Math.random()*width;
//         let y =  Math.random()*height;
//           if( x < width/4) {
//             context.fillStyle = "red";
//         } else if (x < width/4*3){
//             context.fillStyle = "white";
//         } else {
//             context.fillStyle = "yellow";
//         }
//         Utils.fillCircle(x, y, 2);

//         }
// }


//flag green-white

// drawDots();

// function drawDots(){

//     for(let i= 0 ; i < 100000 ; i++){
//         let x = Math.random()*width;
//         let y =  Math.random()*height;
//           if( x > width/3*2) {
//             context.fillStyle = "white";
//         } else if (y > height/3*2){
//             context.fillStyle = "white";
//         } else {
//             context.fillStyle = "green";
//         }
//         Utils.fillCircle(x, y, 2);

//         }
// }


//flag blue-white

// drawDots();

// function drawDots(){

//     for(let i= 0 ; i < 100000 ; i++){
//         let x = Math.random()*width;
//         let y =  Math.random()*height;
//           if( y < height/4 || y > height/4*3) {
//             context.fillStyle = "blue";
//         } else if( x < width/4 || x > width/4*3){
//             context.fillStyle = "blue";
//         } else{
//             context.fillStyle = "white";
//         }
//         Utils.fillCircle(x, y, 2);

//         }
// }


//flag japan

drawDots();

function drawDots(){

    for(let i= 0 ; i < 100000 ; i++){
        let x = Math.random()*width;
        let y =  Math.random()*height;
        let distance = Utils.calculateDistance(width/2, height/2, x, y);
        if(distance < 200) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "white";
        }
        Utils.fillCircle(x, y, 2);

        }
}