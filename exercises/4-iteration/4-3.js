"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

fillRect();



function fillRect(){
    
    context.fillStyle = "#8b0604";
    let amount= 6 ;
    for (let j = 0; j< amount; j++){
        for(let i = 0; i< amount ;i++){
            let space = 5;
            if (j%2 == 1){
            context.fillRect(100+ 100*i +(space*i), 50 +55*j, 100, 50);}
            else {
                context.fillRect(50+ 100*i +(space*i), 50 +55*j, 100, 50);
            }
        }
    }
}