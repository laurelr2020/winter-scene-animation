/* Regan Laurell  */
"use strict";

let global;
	
function init(){
	global = new Global();
	drawBackground();
	global.drawClouds();
}

function drawBackground(){
	let background = new Background();

	background.drawGrass();
	background.drawSky();
	background.drawSun();
}	

function moveOver(){
	if(global.running == false){
		global.running = true;
		global.moveCount = 0;
		requestAnimationFrame(smallMoveOver);
	}
}

function smallMoveOver(){
	global.moveCount ++;
	drawAll();

	if(global.moveCount < 20){
		requestAnimationFrame(smallMoveOver);
	}else{
		global.running = false;
	}
}