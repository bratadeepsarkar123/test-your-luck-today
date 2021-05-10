var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var g=1;


var divisionHeight=300;
var score =0;
var s=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(color(0));
  textSize(20)
 text("BALLS USED :- "+score,20,30);
 
  Engine.update(engine);
    ground.display();
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 if(g===1){
    if(frameCount%60===0){
      particles.push(new Particle(random(20, width-20), 10,10));
     // score++;
    }
  
    for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    if(g===1 && s>=3000){
      g=0
    }
    
  }else if(g===0){
    push();
    textSize(100)
    fill(color(random(0,255),random(0,255),random(0,255)))
    text("GAME OVER",width/10,360)
    textSize(20)
    text("press space for another chance",width/3+20,height/2+20)
    text(("You Used " +score +" balls to score " +s+ " points "),width/4+20,225)
    if((s/score)>=500){
      text("YOU HAVE AN OUTSTANDING LUCK !",width/3+20,225+20)
      
    }else if((s/score)>=400 && (s/score)<500){
      text("YOU HAVE AN EXCELLENT LUCK!",width/3+20,225+20)
      
    }else if((s/score)>=300 && (s/score)<400){
      text("YOU HAVE A VERY GOOD LUCK!",width/3+20,225+20)
      
    }else if((s/score)>=200 && (s/score)<300){
      text("YOU HAVE A GOOD LUCK!",width/3+20,225+20)
      
    }else if((s/score)>=100 && (s/score)<200){
      text("BETTER LUCK NEXT TIME !",width/3+20,225+20)
      
    }else if((s/score)>=0 && (s/score)<100){
      text("TODAY'S A BAD LUCK DAY FOR YOU !",width/3+20,225+20)
      
    }
    pop();
  }
  for(var i=25; i<width;i=i+720){
    text("100",i,height-divisionHeight/2)
  }
  for(var i=105; i<670;i=i+560){
    text("200",i,height-divisionHeight/2)
  }
  for(var i=185; i<590;i=i+400){
    text("300",i,height-divisionHeight/2)
  }
  for(var i=265; i<600;i=i+240){
    text("400",i,height-divisionHeight/2)
  }
  for(var i=345; i<427;i=i+80){
    text("500",i,height-divisionHeight/2)
  }
 // text("what a luck you have !",width/3+20,225+20)
  text("SCORE :- "+s,width-150,30)
}

function keyPressed(){
  if (keyCode===32 && g===0){
    g=1
    s=0
    score=0
    particles=[];
  }
}

function vo(){
  var u=Math.round(s/score)
    console.log(u)
    
    
}