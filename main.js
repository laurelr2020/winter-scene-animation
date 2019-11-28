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

function moveCloudsIn(){
	global.moveCount ++;
	global.context.save();

	if(global.moveCount < 120){
		global.snowCloudLeft.clear();
		global.snowCloudLeft.move(1.2, 1.2); 
		// global.snowCloudMiddle.move(32, 6);
		// global.snowCloudRight.move(-22, 7);
		global.context.restore();
		requestAnimationFrame(moveCloudsIn);
	}
}

// function smallMoveOver(){
// 	global.moveCount ++;
// 	drawAll();

// 	if(global.moveCount < 20){
// 		requestAnimationFrame(smallMoveOver);
// 	}else{
// 		global.running = false;
// 	}
//}
