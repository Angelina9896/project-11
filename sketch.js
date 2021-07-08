var path,pathImg1,edges 
var runner,runnerImg
var boundary1
var boundary2

function preload(){
  //pre-load images
  pathImg1=loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png")  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprite(200,200)
  runner.addAnimation("running",runnerImg)
  path.velocityY=5
  boundary1=createSprite(22,325,10,20)
  boundary1.visible=false
  boundary2=createSprite(345,325,10,20)
  boundary2.visible=false
  edges=createEdgeSprites();

  
function draw (){
  
}

