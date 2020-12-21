class Frisk{
    constructor(){
        this.redSoul = loadImage("images/DETERMINATION.jpg");
        this.frisk = createSprite(displayWidth/2,displayHeight/2,50,50);
    }
    display(){
        this.frisk.addImage(this.redSoul);
    }
}