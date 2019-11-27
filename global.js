"use strict";

function Global () {
    this.running = false;
    this.moveCount = 0;
    
    let canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    
    let snowCloudLeft = new SnowCloud(50, 70);
    let snowCloudMiddle = new SnowCloud(320, 60);
    let snowCloudRight = new SnowCloud(575, 70);

    let clouds = [snowCloudLeft, snowCloudMiddle, snowCloudRight];
    this.drawClouds = function drawClouds(){
        let index = 0;
        for(index = 0; index < clouds.length; index ++){
            clouds[index].draw();
        }
    }


    this.snowstorm = new SnowFall();
}