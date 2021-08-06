var Car
var Car2


function preload(){
  mainCarImg = loadImage("CAR.jpg")
  Car2Img = loadImage("CAR2.jpg")
}


function setup() {
  createCanvas(800,400);
 car = createSprite(400, 200, 50, 50);
 car.addImage("mainCar",mainCarImg)
 car.scale = 0.5

 car2 = createSprite(400, 350, 50, 50);
 car2.addImage("car2",Car2Img)
 car2.scale = 0.2
}


function draw() {
  background(255,255,255);  
  drawSprites();
}