
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
	paper = new Paper(100, 10, 20);

	base = new Dustbin(950, 350, 200, 20);
	left = new Dustbin(840, 284, 20, 150);
	right = new Dustbin(1040, 284, 20, 150);


	ground = new Ground(600, 370, 1200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

  ground.display();

  base.display();
  left.display();
  right.display();

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-85})
	}
}

