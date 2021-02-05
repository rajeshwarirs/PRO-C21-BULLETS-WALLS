var bullet,wall;
var speed,weight;
var bulletRightEdge, wallLeftEdge;
var thickness;



function setup() {
  createCanvas(1600,400);
  bullet= createSprite(50,200,50,50);
  bullet.shapeColor= color("black");
  speed=random(30,52);
  weight=random(223,321);
  bullet.velocityX= speed;

  thickness= random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80);


}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color("red");
    }
    if(damage<10){
      wall.shapeColor=color("green");
    }
  }


  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}