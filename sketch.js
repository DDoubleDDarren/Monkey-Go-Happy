var bananaImage,obstacleImage;
var obstacleGroup,bananaGroup;
var background;
var score;
var monkey;

function preload()
{
  backImage = loadImage("jungle.jpg");
  
  player_running =
loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() 
{
  createCanvas(400, 400);
  
  background.addImage("jungle.png");
  background.velocityX = 4;
  
  ground.visible = false;
  
monkey.addAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");
  
}

function draw() 
{
  background(220);
  fill("#00ff00");
  text("Survival Time: "+ score, 300, 20);
  food();
  obstacles();
  if(keyDown("space")&& monkey.y >= 160){
    monkey.velocityY = -15;
  }
  ground.velocityX = -3
  
  ground.x = ground.width /2;
  
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    score = score+2
  }
  if (obstacleGroup.collide(monkey)) {
    score = 0;
  }
  monkey.scale = 0.15;
  
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground);
  drawSprites();
}
function food(){
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(0,180);
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    banana.velocityX = -6;
    
    banana.lifetime = 134;
  
    bananaGroup.add(banana);
  }
}
function obstacles() {
  if(World.frameCount % 80 === 0) {
    var obstacle = createSprite(400,210,40,10);
    
    obstacle.setAnimation("Stone");
    obstacle.velocityX = -9;
    
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
    obstacleGroup.add(obstacle);
  }
}
