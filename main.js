/* Regan Laurell  */
"use strict";

let global;
	
function init(){
	global = new Global();
	drawBackground();
	//global.snowstorm.draw();
}

function drawBackground(){
	global.background.drawGrass();
	global.background.drawSky();
	global.background.drawSun();
}	