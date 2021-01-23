const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform1, platform2;
var base;
var polygon_img;
var box1, box2, box3, box4, box5, box6;
var polygon;
var sling;


function preload(){
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    base = new Ground(600,375,1200,50);

    platform1 = new Ground(600,295,400,20);

    box1 = new Box(515,235,60,40);
    box2 = new Box(565,235,60,40);
    box3 = new Box(615,235,60,40);
    box4 = new Box(555,250,60,40);
    box5 = new Box(605,250,60,40);
    box6 = new Box(585,275,60,40);

    polygon = new Polygon(200,200,20);

    sling = new SlingShot(polygon.body,{x:200,y:200});





}

function draw(){
    Engine.update(engine);
    background("grey");

    base.display();

    platform1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    
    polygon.display();

    
    text("Drag And Release Your Mouse",600,400)
    sling.display();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}