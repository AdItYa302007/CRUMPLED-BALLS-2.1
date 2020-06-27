const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var paper;
var bin;

function preload(){
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;


	ground = new Ground(400,height,1600,20);
	 
	paper = new Paper(100,350,30);

	bin = new Bin(900,570);

	Engine.run(engine);
  
}


function draw()	 {
  rectMode(CENTER);
  background("beige");

  ground.display();
  paper.display();
  bin.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-200});

	}
}