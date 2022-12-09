"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utilsLKR.js";

let width = context.canvas.width;
let height = context.canvas.height;

let triangles = [];

setup();
draw();

function setup(){
    for(let i = 0; i < 100;i++){
        let scale = 100;
        let x1 = Utils.randomNumber(0,width);
        let y1 = Utils.randomNumber(0,height);
        let x2 = x1 - Utils.randomNumber(-scale, scale);
        let y2 = y1 - Utils.randomNumber(-scale, scale);
        let x3 = x1 - Utils.randomNumber(-scale, scale);
        let y3 = y1 - Utils.randomNumber(-scale, scale);

        let triangle ={
            x1:x1,
            y1:y1,
            x2:x2,
            y2:y2,            
            x3:x3,
            y3:y3,
            hue : Utils.randomNumber(100,160)
        };

        // let square = {
        //     x: Utils.randomNumber(0, width),
        //     y: Utils.randomNumber(0, height),
        //     size: Utils.randomNumber(10,50),
        //     hue : Utils.randomNumber(0,360)
        // };
        triangles.push(triangle);
        console.log(triangles);
    }
    console.log(triangles);
}

function draw (){
    context.fillStyle = '#fff';
    context.fillRect (0,0,width, height);
    for(let i = 0;i < triangles.length; i++ ){
        let triangle = triangles[i];

        context.fillStyle = Utils.hsla(triangle.hue, 50, 50, 50);
        context.beginPath();
        context.moveTo(triangle.x1, triangle.y1);
        context.lineTo(triangle.x2, triangle.y2);
        context.lineTo(triangle.x3, triangle.y3);
        context.fill(); 

        triangle.x1 += Utils.randomNumber(-1,1);
        triangle.y1 += Utils.randomNumber(-1,1);        
        triangle.x2 += Utils.randomNumber(-1,1);
        triangle.y2 += Utils.randomNumber(-1,1);
        triangle.x3 += Utils.randomNumber(-1,1);
        triangle.y3 += Utils.randomNumber(-1,1);
    }
    // requestAnimationFrame(draw);
}