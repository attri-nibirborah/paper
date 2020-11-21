
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,dustbin1;
function preload()
{
	//Create the Bodies Here.
	paper1 = new paper (100,10,20);
	
  ground1 = new ground(20,10)
 
  dustbin1 = new dustbin(600,10)
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
 ground1.display();
 
 drawSpirte()
}
function keypressed(){
	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	
}
}


