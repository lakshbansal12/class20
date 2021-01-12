var movingball
var fixedsquare

function setup() {
  createCanvas(800,400);
  movingball = createSprite(200 , 100 , 100 , 50);
  fixedsquare = createSprite(600 , 300 , 100 , 50)
  movingball.debug = true ;
  fixedsquare.debug = true ; 


}

function draw() {
  background("black");  
  drawSprites();
  movingball.x = mouseX;
  movingball.y = mouseY;
  console.log(movingball.x - fixedsquare.x);
  if(movingball.x - fixedsquare.x < movingball.width/2 + fixedsquare.width/2 &&
     fixedsquare.x - movingball.x < fixedsquare.width/2 + movingball.width/2 && 
     movingball.y - fixedsquare.y < movingball.height/2 + fixedsquare.height/2 &&
     fixedsquare.y - movingball.y < fixedsquare.height/2 + movingball.height/2){

      movingball.shapeColor = ("green")
      fixedsquare.shapeColor = ("green")
     }
  else {
    movingball.shapeColor = ("yellow")
    fixedsquare.shapeColor = ("yellow")
  }
}
