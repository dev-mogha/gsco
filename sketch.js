var car, wall;
var speed , weight;







function setup() {
  createCanvas(1600, 400);

  //car 
 car =  createSprite(50, 200, 50, 50);




wall = createSprite(1000, 200, 60, height/2 )
wall.shapeColor = "orange"
}

function draw() {
  background("blue");



speed = random(5, 9)
weight = random(400, 1500)

car.velocityX = speed;
  
if(car.x - wall.x <  car.width/2 + wall.width/2 ){
car.velocityX = 0
var deform = 0.5*weight*speed*speed/22500

if(deform > 100){
  car.shapeColor = "'green"
}
if(deform < 100 || deform > 180){
  car.shapeColor =  "yellow"
}
if(  deform > 180){
  car.shapeColor =  "red"
}
}
drawSprites();

}


