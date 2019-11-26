"use strict";

function Global () {
    this.running = false;
    this.moveCount = 0;
    
    let canvas = document.getElementById('canvas');
	this.context = canvas.getContext('2d');
}