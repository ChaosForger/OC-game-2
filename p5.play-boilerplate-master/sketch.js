var footmanImg, legionaryImg, championImg;
var knightImg, knightImg2, knightImg3, knightImg4, finalBossImg;
var swordImg, swordImg2, swordImg3;
var shieldImg, shieldImg2, shieldImg3;
var armorImg, armorImg2, armorImg3;
var backgroundImg, backgroundImg2, backgroundImg3, backgroundImg4;

var knight
var footman
var legionary
var champion
var finalBoss
var sword
var shield
var armor


function preload() {
  footmanImg = loadImage("footman.png")
  legionaryImg = loadImage("legionary.png")
  championImg = loadImage("champion.png")

  finalBossImg = loadImage("final boss.png")


  knightImg = loadImage("knight1.png")
  knightImg2 = loadImage("knight2.png")
  knightImg3 = loadImage("knight3.png")
  knightImg4 = loadImage("knight4.png")

  swordImg = loadImage("sword1.png")
  swordImg2 = loadImage("sword2.png")
  swordImg3 = loadImage("sword3.png")
  
  shieldImg  = loadImage("shield1.png")
  shieldImg2 = loadImage("shield2.png")
  shieldImg3 = loadImage("shield3.png")
    
  armorImg  = loadImage("armor.png")
  armorImg2 = loadImage("armor2.png")
  armorImg3 = loadImage("armor3.png")

  backgroundImg  = loadImage("lvl 1.jpg")
  backgroundImg2 = loadImage("lvl 2.png")
  backgroundImg3 = loadImage("lvl 3.jpg")
  backgroundImg4 = loadImage("lvl 4.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  footman = createSprite(500,500, 20, 40)
  footman.addImage(footmanImg)
  footman.scale = 0.5

  knight = createSprite(100,500,10,10)
  knight.addAnimation("boi_runnin", knightImg)
  knight.scale = 0.45

  
}

function draw() {
  background(255,255,255);  
  imageMode(CENTER)
  image(backgroundImg, windowWidth/2, windowHeight/2, 4500, windowHeight)
  image(backgroundImg2, 4050, windowHeight/2, 4500, windowHeight)
  image(backgroundImg3, 6750,  windowHeight/2, 4500, windowHeight)
  image(backgroundImg4, 9450,  windowHeight/2, 4500, windowHeight)
   camera.position.x = knight.x

  if (keyDown(RIGHT_ARROW)){
    knight.x += 30
  }

 console.log(knight.x)

 if(keyDown(LEFT_ARROW)){
   knight.x -= 20
 }
  drawSprites();
}