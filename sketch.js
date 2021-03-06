const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour, music;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    music = loadSound("yt1s.com - Sunset lover Daycore Anti Nightcore Read pinned comment.mp3");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    if(music){
        music.loop();
        music.setVolume(0.5);
    }

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : " + hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : " + hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

   // Since GitHub Pages didn't allow me to fetch the hour from the api, I shall Improvise UWU

    var response = new Date();
    
    hour = response.getHours();
    
    if(hour >= 0 && hour < 18 ) {
        bg = "sunrise.png";
    }
    else {
        bg = "sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
