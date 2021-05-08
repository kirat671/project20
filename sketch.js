var backgroundPng;
var tom,jerry;
var tom1, tom2 , tom3, jerry1, jerry2,jerry3;

function preload() {
    //load the images here
backgroundPng = loadImage("garden.png");
tom1 = loadAnimation("cat1.png");
tom2 = loadAnimation("cat2.png","cat3.png")
tom3 = loadAnimation("cat4.png")
    
jerry1 = loadAnimation("mouse1.png");
jerry2 = loadAnimation("mouse2.png","mouse3.png");
jerry3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(800, 600);
tom.addAnimation("catsiting",tom1);
tom.scale = 0.2;

jerry = createSprite(200, 600);
jerry.addAnimation("jerrysiting",jerry1)
jerry.scale = 0.1;

}

function draw() {

    background(backgroundPng);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomstoped",tom3);
        tom.changeAnimation("tomstoped");

        jerry.addAnimation("jerrystop",jerry3);
        jerry.changeAnimation("jerrystop");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.addAnimation("tommoving",tom2);
    tom.changeAnimation("tommoving");
    tom.velocityX = -3;

    jerry.addAnimation("jerry",jerry2);
    jerry.changeAnimation("jerry");
}


}
