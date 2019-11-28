"use strict";

function Global () {
    this.running = false;
    this.moveCount = 0;
    
    let canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    
    this.background = new Background();

    this.snowCloudLeft = new SnowCloud(40, 70);
    this.snowCloudMiddle = new SnowCloud(310, 60);
    this.snowCloudRight = new SnowCloud(560, 60);

    let clouds = [this.snowCloudLeft, this.snowCloudMiddle, this.snowCloudRight];
    this.drawClouds = function drawClouds(){
        let index = 0;
        for(index = 0; index < clouds.length; index ++){
            clouds[index].draw();
        }
    }

    this.snowstorm = new SnowFall();
}