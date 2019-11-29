
function Snowman(){
    
    this.drawBottom = function drawBottom(){
        global.context.beginPath();
        global.context.arc(400, 400, 50, 0, 2 * Math.PI);

        global.context.lineWidth = 2;
        global.context.fillStyle = '#ffffff';
        global.context.fill();
        global.context.strokeStyle = '#eeeeee';
        global.context.stroke();
    }

    this.drawMiddle = function drawMiddle(){
        global.context.beginPath();
        global.context.arc(400, 335, 35, 0, 2 * Math.PI);

        global.context.lineWidth = 2;
        global.context.fillStyle = '#ffffff';
        global.context.fill();
        global.context.strokeStyle = '#eeeeee';
        global.context.stroke();        
    }

    this.drawTop = function drawTop(){
        global.context.beginPath();
        global.context.arc(400, 280, 25, 0, 2 * Math.PI);

        global.context.lineWidth = 2;
        global.context.fillStyle = '#ffffff';
        global.context.fill();
        global.context.strokeStyle = '#eeeeee';
        global.context.stroke();        
    }

    this.drawBottomCoal = function drawBottomCoal(){
        let numberOfSides = 6;
        let size = 5;
        let Xcenter = 400;
        let Ycenter = 380;

        drawOctogon(numberOfSides, size, Xcenter, Ycenter);   
    }

    this.drawMiddleCoal = function drawMiddleCoal(){
        let numberOfSides = 6;
        let size = 5;
        let Xcenter = 400;
        let Ycenter = 355;

        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawTopCoal = function drawTopCoal(){
        let numberOfSides = 6;
        let size = 5;
        let Xcenter = 400;
        let Ycenter = 335;

        drawOctogon(numberOfSides, size, Xcenter, Ycenter);    
    }

    this.drawLeftEye = function drawLeftEye(){
        let numberOfSides = 6;
        let size = 3;
        let Xcenter = 390;
        let Ycenter = 275;

        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawRightEye = function drawRightEye(){
        let numberOfSides = 6;
        let size = 3;
        let Xcenter = 410;
        let Ycenter = 275;
        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawMouthLeft = function drawMouthLeft(){
        let numberOfSides = 6;
        let size = 3;
        let Xcenter = 387;
        let Ycenter = 288;
        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawMouthMiddleLeft = function drawMouthMiddleLeft(){
        let numberOfSides = 6;
        let size = 3;
        let Xcenter = 392;
        let Ycenter = 293;
        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawMouthMiddle = function drawMouthMiddle(){
        let numberOfSides = 6;
        let size = 3;
        let Xcenter = 400;
        let Ycenter = 295;
        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawMouthMiddleRight = function drawMouthMiddleRight(){
        let numberOfSides = 6;
        let size = 3;
        let Xcenter = 408;
        let Ycenter = 293;
        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawMouthRight = function drawMouthRight(){
        let numberOfSides = 6;
        let size = 3;
        let Xcenter = 413;
        let Ycenter = 288;
        drawOctogon(numberOfSides, size, Xcenter, Ycenter);
    }

    this.drawNose = function drawNose(){
        global.context.fillStyle = "#ffa500";
        global.context.beginPath();
        global.context.moveTo(400, 280);
        global.context.lineTo(400, 285);
        global.context.lineTo(420, 283);
        global.context.closePath();
        global.context.fill();
    }

    this.drawRightArm = function drawRightArm(){
        global.context.translate(95, 50);
        global.context.rotate(60 * Math.PI / 180);
        drawRect();
    }

    this.drawLeftArm = function drawLeftArm(){
        global.context.translate(345, 290);
        global.context.rotate(-30 * Math.PI / 180);
        drawRect();
    }
}

function drawOctogon(numberOfSides, size, Xcenter, Ycenter){
    global.context.beginPath();
    global.context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          

    for (var i = 1; i <= numberOfSides; i += 1) 
    {
        global.context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    global.context.fillStyle = '#000000';
    global.context.strokeStyle = "#111111";
    global.context.lineWidth = 1;
    global.context.fill()
    global.context.stroke();
}

function drawRect(){
    global.context.fillStyle = '#654321';

    global.context.rect(0,0, 5, 50);
    global.context.fill();
}