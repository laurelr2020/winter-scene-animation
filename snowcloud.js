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