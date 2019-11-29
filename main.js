/* Regan Laurell  */
"use strict";

let global;

function init(){
	global = new Global();
	drawBackground();
	global.snowstorm.draw();
	global.drawClouds();
}

function drawBackground(){
	global.background.drawGrass();
	global.background.drawStormSky();
}

function animateScene(){
	global.running = false;
	if(global.running == false){
		global.running = true;
		global.moveCount = 0;
		requestAnimationFrame(smallMoveOver);
	}
}

function smallMoveOver(){
	global.moveCount ++;
	global.context.save();

	if(global.moveCount < 275){
		if(global.moveCount % 10 == 0){
			global.background.drawGrass();
			global.background.drawStormSky();
		
			for(let index = 0; index < global.snowstorm.snowflakes.length; index ++){
				global.context.save();
				global.snowstorm.snowflakes[index].y += getRandomInteger(5, 20);
				global.snowstorm.snowflakes[index].draw();
				global.context.restore();
			}
			global.context.restore();
			global.drawClouds();
			requestAnimationFrame(smallMoveOver);
		}else{
			requestAnimationFrame(smallMoveOver);
		}
	}else if(global.moveCount == 275){
		global.background.drawSnowGround();
		requestAnimationFrame(smallMoveOver);
	}else if(global.moveCount > 275){
		if(global.moveCount == 280){
			global.snowman.drawBottom();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 290){
			global.snowman.drawMiddle();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 300){
			global.snowman.drawTop();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 310){
			global.snowman.drawBottomCoal();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 320){
			global.snowman.drawMiddleCoal();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 330){
			global.snowman.drawTopCoal();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 340){
			global.snowman.drawMouthLeft();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 350){
			global.snowman.drawMouthMiddleLeft();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 360){
			global.snowman.drawMouthMiddle();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 370){
			global.snowman.drawMouthMiddleRight();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 380){
			global.snowman.drawMouthRight();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 390){
			global.snowman.drawLeftEye();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 400){
			global.snowman.drawRightEye();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 410){
			global.snowman.drawNose();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 420){
			global.snowman.drawLeftArm();
			requestAnimationFrame(smallMoveOver);
		}else if(global.moveCount == 430){
			global.snowman.drawRightArm();
			requestAnimationFrame(smallMoveOver);
		}else{
			requestAnimationFrame(smallMoveOver);
		}
	}else{
		global.running = false;
		global.moveCount = 0;
	}
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}