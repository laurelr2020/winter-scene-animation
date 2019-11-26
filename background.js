'use strict'

function Background(){

    this.drawGrass = function drawGrass(){
        global.context.fillStyle = "darkgreen";
        global.context.fillRect(0, 300, 800, 200);
    }

    this.drawSky = function drawSky(){
        global.context.fillStyle = "skyblue";
        global.context.fillRect(0, 0, 800, 300);
    }
    
    this.drawSun = function drawSun(){
        let image = document.getElementById("sun.jpg");
        global.context.drawImage(image, 600, 10);
    }

}