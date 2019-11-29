
function Snowman(){
    
    this.drawBottom = function drawBottom(){
        global.context.beginPath();
        global.context.arc(400, 400, 50, 0, 2 * Math.PI);

        global.context.lineWidth = 5;
        global.context.fillStyle = '#ffffff';
        global.context.fill();
        global.context.strokeStyle = '#eeeeee';
        global.context.stroke();
    }

    this.drawMiddle = function drawMiddle(){
        global.context.beginPath();
        global.context.arc(400, 335, 35, 0, 2 * Math.PI);

        global.context.lineWidth = 5;
        global.context.fillStyle = '#ffffff';
        global.context.fill();
        global.context.strokeStyle = '#eeeeee';
        global.context.stroke();        
    }

    this.drawTop = function drawTop(){
        global.context.beginPath();
        global.context.arc(400, 280, 25, 0, 2 * Math.PI);

        global.context.lineWidth = 5;
        global.context.fillStyle = '#ffffff';
        global.context.fill();
        global.context.strokeStyle = '#eeeeee';
        global.context.stroke();        
    }




}