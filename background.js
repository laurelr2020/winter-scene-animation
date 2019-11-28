'use strict'

function Background(){

    this.drawGrass = function drawGrass(){
        global.context.fillStyle = "#267347";
        global.context.fillRect(0, 300, 800, 200);
    }

    this.drawSnowGround = function drawSnowGround(){
        global.context.fillStyle = "white";
        global.context.fillRect(0, 300, 800, 200);
    }

    this.drawDaySky = function drawDaySky(){
        global.context.fillStyle = "skyblue";
        global.context.fillRect(0, 0, 800, 300);
    }

    this.drawStormSky = function drawStormSky(){
        global.context.fillStyle = "#1f49c7";
        global.context.fillRect(0, 0, 800, 300);
    }
    
    this.drawSun = function drawSun(){
        let image = document.getElementById("sun");
        global.context.drawImage(image, 650, 10);
    }
}