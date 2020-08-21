
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 170, 20);

	base = new dustbin(200, 200, 600, 20);

	ground = new Ground(600, 370, 1200, 20);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  ground.display();

  base.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85})
	}
}

