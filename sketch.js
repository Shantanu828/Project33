const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var snow= [];
function preload(){
  bg = loadImage("snow3.jpg");
}
function setup() {
 
  var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world; 
   
  
}


function draw() {
  background(bg);
  Engine.update(engine);  
  

  //display the snow
          if(frameCount%60===0){
          snow.push(new Ice(random(width/2-10,width/2+10),0,30,30)) ;
        }

        if(frameCount%61===0){
          snow.push(new Ice(random(width/4-10,width/2+10),0,30,30)) ;
        }

        if(frameCount%60===0){
          snow.push(new Ice(random(width/8-10,width/2+10),0,40,30)) ;
        }

        if(frameCount%61===0){
          snow.push(new Ice(random(width/16-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%61===0){
          snow.push(new Ice(random(width/12-10,width/2+10),0,40,30)) ;
        }

        if(frameCount%60===0){
          snow.push(new Ice(random(width/10-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%70===0){
          snow.push(new Ice(random(width/6-10,width/2+10),0,30,30)) ;
        }

        if(frameCount%60===0){
          snow.push(new Ice(random(width/14-10,width/2+10),0,40,30)) ;
        }

        if(frameCount%70===0){
          snow.push(new Ice(random(width/18-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%65===0){
          snow.push(new Ice(random(width/20-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%70===0){
          snow.push(new Ice(random(width/22-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%70===0){
          snow.push(new Ice(random(width/24-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%70===0){
          snow.push(new Ice(random(width/26-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%70===0){
          snow.push(new Ice(random(width/28-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%65===0){
          snow.push(new Ice(random(width/32-10,width/2+10),0,30,40)) ;
        }

        if(frameCount%71===0){
          snow.push(new Ice(random(width/30-10,width/2+10),0,30,40)) ;
        }

    if(frameCount%60===0){
      snow.push(new Ice(random(width/34-10,width/2+10),0,30,40)) ;
    }

    if(frameCount%60===0){
      for (var j = 75; j <=width; j=j+50) { 
        snow.push(new Ice(j,0,30,30));
      }
    }

    if(frameCount%70===0){
      for (var j = 75; j <=width; j=j+50) { 
        snow.push(new Ice(j,0,40,30));
      }
    }

    if(frameCount%65===0){
      for (var j = 75; j <=width; j=j+50) { 
        snow.push(new Ice(j,0,30,40));
      }
    }

    if(frameCount%61===0){
      for (var j = 75; j <=width; j=j+50) { 
        snow.push(new Ice(j,0,30,30));
      }
    }

  for (var k = 0; k <snow.length; k++) {
    snow[k].display();
  }

 

}