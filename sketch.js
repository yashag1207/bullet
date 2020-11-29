var  wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)
  speed=random(55,90);
  weight=random(400,1500)

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapecolor=color(80,80,80);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapecolor=color(255);
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
 if(damage>10){
     bullet.shapecolor=color(255,0,0,);
 }
 if(damage<10){
     bullet.shapecolor=color(0,255,0);
}
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}
else{
  return false
}


}