/* Regan Laurell  */
"use strict";

let global;

function init(){
	global = new Global();
	drawBackground();
	global.snowstorm.draw();
	//global.drawClouds();
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

	if(global.moveCount < 100){
		if(global.moveCount % 10 == 0){
			// global.background.drawGrass();
			// global.background.drawStormSky();

			for(let index = 0; index < global.snowstorm.snowflakes.length; index ++){
				global.snowstorm.snowflakes[index].move(global.snowstorm.snowflakes[index], 0, 30);
			}
			global.context.restore();
		}
		requestAnimationFrame(smallMoveOver);
	}else{
		global.running = false;
	}
}