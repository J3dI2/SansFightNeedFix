class Game{
    constructor(){

    }
    mode = "Red";
    Movement1(){
        if(keyIsDown(UP_ARROW) && mode === "Red" && gameState === "dodge"){
            frisk1.frisk.velocityY = -10;
        }
        if(keyIsDown(DOWN_ARROW) && mode === "Red" && gameState === "dodge"){
            frisk1.frisk.velocityY = 10;
        }
        if(keyIsDown(RIGHT_ARROW) && mode === "Red" && gameState === "dodge"){
            frisk1.frisk.velocityX = 10;
        }
        if(keyIsDown(LEFT_ARROW) && mode === "Red" && gameState === "dodge"){
            frisk1.frisk.velocityX = -10;
        }
    }
    Movement2(){
        if(keyIsDown(UP_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityY = -10;
        }
        if(keyIsDown(RIGHT_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityX = 10;
        }
        if(keyIsDown(LEFT_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityX = -10;
        }
    }
    Movement3(){
        if(keyIsDown(UP_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityY = -10;
        }
        if(keyIsDown(DOWN_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityY = 10;
        }
        if(keyIsDown(LEFT_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityX = -10;
        }
    }
    Movement4(){
        if(keyIsDown(DOWN_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityY = 10;
        }
        if(keyIsDown(RIGHT_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityX = 10;
        }
        if(keyIsDown(LEFT_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityX = -10;
        }
    }
    Movement5(){
        if(keyIsDown(DOWN_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityY = 10;
        }
        if(keyIsDown(RIGHT_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityX = 10;
        }
        if(keyIsDown(UP_ARROW) && mode === "Blue" && gameState === "dodge"){
            frisk1.frisk.velocityY = -10;
        }
    }
    play(){
        form.hide();
        
    }
}