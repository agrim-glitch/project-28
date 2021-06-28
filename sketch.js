
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var land, paperBall;
var garbageBox,garbageWall1,garbageWall1;
  

function preload(){

	b1 = loadImage("backgroung.jpg")
}


function setup() {
	createCanvas(800, 400);

	// Create Our Engine and Our World
	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	land = new Ground(width/2, height,width,height/10);

	//Create a dustbin
	garbageBox = new Dustbin(width-150, height-20,100,10);

	//Create a paper ball
	paperBall = new Paper(100, 200,20);

	slingshot = new SlingShot(paperBall.body,{x:100, y:200});

	//console.log(paperBall);
	

	//Engine.run(myEngine);

	
  
}

function draw() {

  background(b1);
  Engine.update(engine);

  paperBall.display();
  land.display();
  garbageBox.display();
  slingshot.display();    

 
}

function mouseDragged(){
    Matter.Body.setPosition(paperBall.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}




