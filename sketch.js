const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var gameState = "Menu";
var frisk1;
/*
var BoneAttack = [];
var BoneAttackB = [];
var BoneAttackO, = [];
var GasterBlaster = [];
var BigGasterBlaster = [];
var SkinnyGasterBlaster = [];
var THICKGasterBlaster = [];
var GasterBlasterB = [];
var BigGasterBlasterB = [];
var SkinnyGasterBlasterB = [];
var THICKGasterBlasterB = [];
var GasterBlasterO = [];
var BigGasterBlasterO = [];
var SkinnyGasterBlasterO = [];
var THICKGasterBlasterO = [];
*/
function preload(){

}

function setup(){
    var Canvas = createCanvas(displayWidth,displayHeight);

    engine = Engine.create();
    world = engine.world;
    frisk1 = new Frisk();

    form = new Form();
}

function draw(){
    //background("green");
    Engine.update(engine);
    
    form.display();

    frisk1.display();

}