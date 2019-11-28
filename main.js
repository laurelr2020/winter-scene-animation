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
	if(global.running == false){
		global.running = true;
		global.moveCount = 0;
		requestAnimationFrame(smallMoveOver);
	}
}

function smallMoveOver(){
	global.moveCount ++;
	global.context.save();

	if(global.moveCount < 250){
		if(global.moveCount % 10 == 0){
			snowflakeAnimation();
		}
	}else if(global.moveCount == 250){
		global.snowstorm.reset(global.snowstorm.snowflakes);
		snowflakeAnimation();
	}else if(global.moveCount < 250 && global.moveCount < 500){
		if(global.moveCount % 10 == 0){
			snowflakeAnimation();
		}
	}else{
		global.running = false;
		global.moveCount = 0;
		global.background.drawSnowGround();
	}
}

function snowflakeAnimation(){
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
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}