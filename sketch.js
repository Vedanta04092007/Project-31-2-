const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(480,800,800,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  var divisionHeight = 300;
  ground.display();


  drawSprites();

}