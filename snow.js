'use strict'

function SnowCloud(over, down){
    //https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
    this.over = over;
    this.down = down;

    this.draw = function draw(){
        global.context.beginPath();
            global.context.moveTo(this.over, this.down);
            global.context.bezierCurveTo(this.over - 50, this.down + 20, this.over - 50, this.down + 70, this.over + 60, this.down + 70);
            global.context.bezierCurveTo(this.over + 60, this.down + 100, this.over + 150, this.down + 100, this.over + 170, this.down + 70);
            global.context.bezierCurveTo(this.over + 250, this.down + 70, this.over + 250, this.down + 40, this.over + 220, this.down + 20);
            global.context.bezierCurveTo(this.over + 260, this.down - 40, this.over + 200, this.down - 50, this.over + 170, this.down - 30);
            global.context.bezierCurveTo(this.over + 150, this.down - 75, this.over + 80, this.down - 60, this.over + 80, this.down - 30);
            global.context.bezierCurveTo(this.over + 30, this.down - 75, this.over - 20, this.down - 60, this.over, this.down);
        global.context.closePath();

        global.context.lineWidth = 5;
        global.context.fillStyle = '#dddddd';
        global.context.fill();
        global.context.strokeStyle = '#cccccc';
        global.context.stroke();
    }

    this.move = function move(moveOver, moveDown){
        this.over += moveOver;
        this.down += moveDown;

        this.draw();
    }

    this.clear = function clear(){
        global.context.clearRect(this.over - 50, this.down - 30, this.over + 260, this.down + 100)
    }
}

function SnowFall(){
    let snowflakeNum = 1;

    this.snowflakes = [];
    for(let index = 0; index < snowflakeNum; index++){
        this.snowflakes.push(newSnowflake(index));
    }

    this.draw = function draw(){
        for(let index = 0; index < this.snowflakes.length; index++){
            global.context.save();
            this.snowflakes[index].draw();
            global.context.restore();
        }
    }

    function newSnowflake(snowflakeNum){
        let maxX, minX, maxY, minY, x, y;
        maxY = 60; minY = 55;
        switch (snowflakeNum % 3){
            case 0:
                maxX = 200; minX = 50;
                x = Math.floor(Math.random() * maxX) + minX;
                y = Math.floor(Math.random() * maxY) + minY;
                break;
            case 1:
                maxX = 460; minX = 310;
                x = Math.floor(Math.random() * maxX) + minX;
                y = Math.floor(Math.random() * maxY) + minY;
                break;
            case 2:
                maxX = 700; minX = 570;
                x = Math.floor(Math.random() * maxX) + minX;
                y = Math.floor(Math.random() * maxY) + minY;
                break;    
        }
        let snowflake = new SnowFlake(x, y);
        return snowflake;
    }
}

function SnowFlake(startX, startY){
    //reference: https://www.robertlysik.com/?p=536
    this.x = startX;
    this.y = startY;

    this.draw = function draw() {
        global.context.lineWidth = 1;
        global.context.lineCap = 'round';
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

    this.move = function move(x, y){
        global.context.lineWidth = 1;
        global.context.lineCap = 'round';
        global.context.strokeStyle = "#FFFFFF";
        global.context.translate(this.x + x, this.y + y);
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