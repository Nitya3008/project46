var blueBox;
var redBox;
var greenBox;
var yellowBox;
var box;
var invisibleGround;


function preload(){
  backgroundImg=loadImage("background.jpg")
  blueBoxImg=loadImage("blue box.jpg");
  redBoxImg=loadImage("red box.jpg");
 greenBoxImg=loadImage("green box.jpg");
  yellowBoxImg=loadImage("yellow box.jpg");
  coinImg=loadImage("coin.jpg");
}
function setup() {
  createCanvas(1295,665);
  invisibleGround=createSprite(650,650,1250,20);
 invisibleGround.visible=false;
 
 blueBoxGroup=new Group();
 redBoxGroup=new Group();
 greenBoxGroup=new Group();
yellowBoxGroup=new Group();
   
}

function draw() {
  background(backgroundImg);
 // box.display();  
 //drawBox();

 if(keyDown(LEFT_ARROW)){
  blueBoxGroup.velocityX=-1;
}

 if(keyDown(RIGHT_ARROW)){
   blueBoxGroup.velocityX=1;
 }
 if(keyDown(LEFT_ARROW)){
  redBoxGroup.velocityX=-1;
}

 if(keyDown(RIGHT_ARROW)){
   redBoxGroup.velocityX=1;
 }
 if(keyDown(LEFT_ARROW)){
  greenBoxGroup.velocityX=-1;
}

 if(keyDown(RIGHT_ARROW)){
   greenBoxGroup.velocityX=1;
 }
 if(keyDown(LEFT_ARROW)){
  yellowBoxGroup.velocityX=-1;
}

 if(keyDown(RIGHT_ARROW)){
   yellowBoxGroup.velocityX=1;
 }
 var rand=Math.round(random(1,4));
 if(frameCount%550===0){
if(rand==1){
  drawBlueBox();
} 
else if(rand==2){
  drawRedBox();
}
else if(rand==3){
  drawYellowBox();
}
else{
  drawGreenBox();
}
}
 blueBoxGroup.collide(invisibleGround);
 redBoxGroup.collide(invisibleGround);
 greenBoxGroup.collide(invisibleGround);
 yellowBoxGroup.collide(invisibleGround);
// yellowBoxGroup.collide(redBoxGroup);
 yellowBoxGroup.collide(blueBoxGroup);
 yellowBoxGroup.collide(greenBoxGroup);
// greenBoxGroup.collide(blueBoxGroup);
 greenBoxGroup.collide(redBoxGroup);
 blueBoxGroup.collide(redBoxGroup);
 

if(blueBoxGroup.isTouching(greenBoxGroup)){
  greenBoxGroup.destroyEach();
  blueBoxGroup.destroyEach();
}
if(redBoxGroup.isTouching(yellowBoxGroup)){
  redBoxGroup.destroyEach();
  yellowBoxGroup.destroyEach();
}
  drawSprites();

}
function drawBlueBox(){
 
 
  blueBox=createSprite(random(300,1000),100,100,50);
  
  blueBox.scale=0.9;
 blueBox.velocityY=1;
  blueBox.addImage("blueBox",blueBoxImg);
 blueBoxGroup.add(blueBox);
 //blueBox.lifetime=450;
    }

    function drawRedBox(){
      redBox=createSprite(random(300,1000),100,100,50);
      redBox.scale=0.9;
      redBox.velocityY=1;
      redBox.addImage("redBox",redBoxImg);
      redBoxGroup.add(redBox);
    }
    
    function drawGreenBox(){
      greenBox=createSprite(random(300,1000),100,100,50);
      greenBox.scale=0.9;
      greenBox.velocityY=1;
      greenBox.addImage("greenBox",greenBoxImg);
      greenBoxGroup.add(greenBox);
    }

    function drawYellowBox(){
      yellowBox=createSprite(random(300,1000),100,100,50);
      yellowBox.scale=0.7;
      yellowBox.velocityY=1;
      yellowBox.addImage("yellowBox",yellowBoxImg);
      yellowBoxGroup.add(yellowBox);
     // yellowBox.lifetime=450;
    }
  
