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
	}else{
		global.running = false;
		global.moveCount = 0;
		global.background.drawSnowGround();
	}
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}