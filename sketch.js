 const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn =0;
var yellowLine;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  yellowLine = createSprite(400, 460, 800, 5);
  yellowLine.shapeColor = "yellow";
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
  background("black");
  fill('white');
  textSize(20)
 text("Score : "+score,20,30);

  fill('white');
  textSize(30);
  text("500", 15, 500);

  fill('white');
  textSize(30);
  text("500", 95, 500);

  fill('white');
  textSize(30);
  text("500", 175, 500);

  fill('white');
  textSize(30);
  text("500", 255, 500);

  fill('white');
  textSize(30);
  text("100", 335, 500);

  fill('white');
  textSize(30);
  text("100", 415, 500);

  fill('white');
  textSize(30);
  text("100", 495, 500);

  fill('white');
  textSize(30);
  text("200", 575, 500);

  fill('white');
  textSize(30);
  text("200", 655, 500);

  fill('white');
  textSize(30);
  text("200", 735, 500);

  //fill('yellow');
  //line(0, 800, 480, 480);
  if(particle != null){
    particle.display();
    if(particle.body.position.y > 510){
      if(particle.body.position.x <= 255){
        score = score+500;
        particle = null;
        if(turn >= 5){
          gameState = "end";
        }
      }
    }
  }

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   drawSprites();
}