var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "white";
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "brown";
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(82,83);
  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.velocityX = 0;
    var damage = 0.5 * speed * speed * weight/thickness * thickness * thickness;
    if(damage>10){
      bullet.shapeColor = "red";
    }
     if(damage < 10){
        bullet.shapeColor = "green";
      }
  }

  drawSprites();
}