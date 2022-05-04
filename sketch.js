var starImg,bgImg;
var star, starBody;
var FadaMaristela;
var FullImage;
var TURNTHETVOFNOW;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    FullImage = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    TURNTHETVOFNOW = loadSound("sound/JoyMusic.mp3");

}

function setup() {
    createCanvas(800, 750);

    TURNTHETVOFNOW.play();

    FadaMaristela = createSprite(111,500);
    FadaMaristela.addAnimation("Ļ̷̣̘̗̦͚̯̠̅͛̇̓̄̕͠ͅĘ̴̨͓̻̯̥̳̮̹̖̎T̶̢͔̱̝̖̲̭̱͙̅̆̎̃̐̋̊͘͜ ̵̰̣͚̞̮͙͛̋́͌̀̚̚M̷̛̛̹̒́͛̀̊͛̋Ê̷̡̫̆͌ͅ ̴̢̰̗̝͖̲̳̻̈̔̀̽O̶̢̩̹̞̙̙̙͆̾͂̃̂́͑̈́̄͜͝ͅŲ̵̨̠͈͍̈͛͒͆T̸̲̝̘̮́",FullImage)

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    FadaMaristela.scale = 0.3

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){
    background(bgImg);
    star.x = starBody.position.x;
    star.y = starBody.position.y;
    drawSprites();
    if(star.y > 470 && starBody.position.y > 470 ){
        Matter.Body.setStatic(starBody,true)
    }
    

}
function keyPressed(){
    if(keyCode===LEFT_ARROW){
        FadaMaristela.x = FadaMaristela.x -17
    
    }
    if(keyCode===RIGHT_ARROW){
        FadaMaristela.x = FadaMaristela.x +17

    }
    if(keyCode===DOWN_ARROW){
        Matter.Body.setStatic(starBody,false)

    }
    

}