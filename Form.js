class Form{
    constructor(){
        this.button1 = createButton('Play');
        this.button2 = createButton('Exit');
        this.title = createElement('h1');
    }
    hide(){
        this.button1.hide();
        this.title.hide();
        this.button2.hide();
    }

    display(){
        this.title.html("Sans fight");
        this.title.position(displayWidth/2-50, 0);

       this.button1.position(displayWidth/2+25, displayHeight/2);
       this.button2.position(displayWidth/2-25,displayHeight/2)
    
        this.button1.mousePressed(()=>{
            clear();
            this.button1.hide();
            this.button2.hide();
            this.title.hide();
            gameState = "dodge";
        });
        this.button2.mousePressed(()=>{
            this.button2.hide();
            this.button1.hide();
            this.title.hide();

            background(0);
            textSize(30);
            textFont("Courier");
            fill("white");
            text("Game Over",displayWidth/2-20,displayHeight/2);
        });
    }
}