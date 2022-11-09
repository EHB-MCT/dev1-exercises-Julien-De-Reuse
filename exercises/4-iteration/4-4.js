"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawConcentricCircles();

//function drawConcentricCircles(){
    //let space=50;
    //context.fillStyle = 'lightblue';
    //for(let i=0;i<10; i++){
    //    for(let j=0;j<10; j++){
    //        Utils.fillCircle(0+(space*i),0+(space*j),25);
    //    }
    //}
//}

//function drawConcentricCircles(){
//for(let i = 0; i<50;i++){
   // let width = context.canvas.width/2;
 //   let height = context.canvas.height;
 //       let x = 20+ Math.random()*(width-400);
 //       let y = 20+ Math.random()*(height-400);
 //       let radius = Math.random()*50+10;
 //       context.fillStyle = 'lightblue';
 //       Utils.fillCircle(x, y, radius);
  //  }
//}

//function drawConcentricCircles(){
    //let space=50;
    //context.fillStyle ='lightblue';
    //for(let i=0;i<10; i++){
       //for(let j=0;j<10; j++){
           //Utils.fillCircle(0+(space*i),0+(space*j),5+(4*j));
         //}
    
    //}
//}

//function drawConcentricCircles(){
    //let space=100;
    //let spaceY=50;
    //for(let i=0;i<5; i++){
        //context.fillStyle= 'lightblue';
        //Utils.fillCircle(50+(space*i),0,25);
            //for(let j=0;j<10; j++){
            //Utils.fillCircle(50+(space*i),0+(spaceY*j),25);
            //}
        //context.fillStyle = 'red';
        //Utils.fillCircle(0+(space*i),0,25);
            //for(let j=0;j<10; j++){
            //Utils.fillCircle(0+(space*i),0+(spaceY*j),25);
            //}
    //}
//}
//function drawConcentricCircles(){
    //let space=50;
    //let spaceY=100;
    //for(let i=0;i<10; i++){
        //context.fillStyle= 'lightblue';
        //Utils.fillCircle(0+(space*i),0,25);
            //for(let j=0;j<5; j++){
            //Utils.fillCircle(0+(space*i),50+(spaceY*j),25);
            //}
        //context.fillStyle = 'red';
        //Utils.fillCircle(0+(space*i),0,25);
            //for(let j=0;j<5; j++){
            //Utils.fillCircle(0+(space*i),0+(spaceY*j),25);
            //}
    //}
//}

function drawConcentricCircles(){
    let space=50;
    let spaceY=50;
    for(let i=0;i<10; i++){
        context.fillStyle= 'lightblue';    
        Utils.fillCircle(0+(space*i), -50+(space*i), 25);
            for(let j=0;j<7; j++){
            Utils.fillCircle(150+(space*j), 0+(space*j), 25);
            }
            for(let j=0;j<5; j++){
            Utils.fillCircle(250+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<3; j++){
            Utils.fillCircle(350+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<1; j++){
            Utils.fillCircle(450+(space*j), 0+(space*j), 25);
            }
            for(let j=0;j<10; j++){
            Utils.fillCircle(-50+(space*j), 0+(space*j), 25);
            } 
            for(let j=0;j<10; j++){
            Utils.fillCircle(-150+(space*j), 0+(space*j), 25);
            }
            for(let j=0;j<10; j++){
            Utils.fillCircle(-250+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<10; j++){
            Utils.fillCircle(-350+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<10; j++){
            Utils.fillCircle(-450+(space*j), 0+(space*j), 25);
            }     
        context.fillStyle = 'red';
        Utils.fillCircle(0+(space*i), 0+(space*i), 25);
            for(let j=0;j<8; j++){
            Utils.fillCircle(100+(space*j), 0+(space*j), 25);
            }
            for(let j=0;j<6; j++){
            Utils.fillCircle(200+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<4; j++){
            Utils.fillCircle(300+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<2; j++){
            Utils.fillCircle(400+(space*j), 0+(space*j), 25);
            }
            for(let j=0;j<10; j++){
            Utils.fillCircle(-100+(space*j), 0+(space*j), 25);
            }
            for(let j=0;j<10; j++){
            Utils.fillCircle(-200+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<10; j++){
            Utils.fillCircle(-300+(space*j), 0+(space*j), 25);
            }            
            for(let j=0;j<10; j++){
            Utils.fillCircle(-400+(space*j), 0+(space*j), 25);
            }   
    }
}