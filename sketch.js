var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(700,100,80,50);
  fixedRect=createSprite(400,100,50,80);

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if((movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2)&&
  (fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)&&
  (fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)&&
  (movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)){
    movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  }

  else{
    movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }

  drawSprites();
}