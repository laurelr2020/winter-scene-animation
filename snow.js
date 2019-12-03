'use strict'

function SnowFall(){
    let snowflakeNum = 50;

    this.snowflakes = [];
    loadSnowflakes(this.snowflakes);

    function loadSnowflakes(snowflakes){
        for(let index = 0; index < snowflakeNum; index++){
            snowflakes.push(newSnowflake(index));
        }
    }

    function newSnowflake(snowflakeNum){
        let maxX, minX, maxY, minY, x, y;
        maxY = 60; minY = 55;
        switch (snowflakeNum % 3){
            case 0:
                maxX = 200; minX = 50;
                x = getRandomInteger(minX, maxX);
                y = getRandomInteger(minY, maxY);
                break;
            case 1:
                maxX = 460; minX = 310;
                x = getRandomInteger(minX, maxX);
                y = getRandomInteger(minY, maxY);
                break;
            case 2:
                maxX = 700; minX = 570;
                x = getRandomInteger(minX, maxX);
                y = getRandomInteger(minY, maxY);
                break;    
        }
        let snowflake = new SnowFlake(x, y);
        return snowflake;
    }

    this.reset = function reset(snowflakes){
        snowflakes = [];
        loadSnowflakes();
    }

    this.draw = function draw(){
        for(let index = 0; index < this.snowflakes.length; index++){
            global.context.save();
            this.snowflakes[index].draw();
            global.context.restore();
        }
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function SnowFlake(startX, startY){
    //reference: https://www.robertlysik.com/?p=536
    this.x = startX;
    this.y = startY;

    this.draw = function draw() {
        global.context.lineWidth = 1;
        global.context.lineCap = 'round';
        global.context.fillStyle = "#FFFFFF"
        global.context.strokeStyle = "#FFFFFF";
        global.context.translate(this.x, this.y);
        for(var count = 0; count < 6; count++) {
            global.context.save();     
            drawSegment(global.context, 5, 2.5);
            drawSegment(global.context, 5, 5);
            drawSegment(global.context, 5, 0);
            global.context.restore();          
            global.context.rotate(Math.PI/3);
        }
    }

    function drawSegment(context, segmentLength, branchLength) {
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(segmentLength,0);
        context.stroke();
        context.translate(segmentLength,0);
        if (branchLength > 0) {
            drawBranch(context, branchLength, 1);
            drawBranch(context, branchLength, -1);
        }
    }

    function drawBranch(context, branchLength, direction) {
        context.save();
        context.rotate(direction*Math.PI/3);
        context.moveTo(0,0);
        context.lineTo(branchLength,0);
        context.stroke();
        context.restore();
    }
}