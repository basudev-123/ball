const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1;
var log1,log2,log3;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new Box (280,200,50,50);
    box4 = new Box ( 320,250,50,50);
    box5 = new Box (360,300,50,50);
    ground = new Ground(200,height,2000,20)
     
    pig1=new pig(200,200);
    log1=new log(100,300,100,PI/2);
    log2=new log(500,100,100,PI/4); 
    log3=new log(240,300,100,PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();


}