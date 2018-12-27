/* Author: Jordan Randleman */

/******************************************************************************/
/* INFO FUNCTION */
/******************************************************************************/

function aboutStars() {
	alert('\n\n\nTo sketch a star in a single stroke:\n   '+String.fromCharCode(0x2022)+
		'   Select the desired number of points\n   '+String.fromCharCode(0x2022)+
		'   Enter your selection to orient the points on the sketchpad\n'+'   '+String.fromCharCode(0x2022)+
		'   Click the pencil to draw & then connect points chronologically\nMade a mistake?\n'+
		'  => Click "trashcan" to clear sketch & "arrow" to undo last line');
}

/******************************************************************************/
/* DRAW INITIALIZATION FUNCTION */
/******************************************************************************/

/* CURSOR CROSSHAIR ON DRAW */
function cross() { document.getElementById("canvas1").style = "cursor:crosshair;border-radius:50%;"; }
var canvasWidth = 300, canvasHeight = 300;
var canvas1 = null;
var bounds = null;
var context = null;
var hasLoaded = false;
var startX = 0, startY = 0;
var mouseX = 0, mouseY = 0;
var isDrawing = false;
var existingLines = [];


function draw() {
	context.fillStyle = "#FFDA00";
	context.fillRect(0,0,canvasWidth,canvasHeight);
	context.strokeStyle = "black";
	context.lineWidth = 2;
	context.beginPath();
	for (var i = 0; i < existingLines.length; ++i) {
		var line = existingLines[i];
		context.moveTo(line.startX,line.startY);
		context.lineTo(line.endX,line.endY);
	}
	context.stroke();
	if (isDrawing) {
		context.beginPath();
		context.moveTo(startX,startY);
		context.lineTo(mouseX,mouseY);
		context.stroke();
	}
	var pointNum = document.getElementById("starInput").value;
	if (existingLines.length == pointNum) {
		document.getElementById("niceStar").innerHTML = "Nice Star!";
	} else {
		document.getElementById("niceStar").innerHTML = "";
	}
}


function onmousedown(e) {
	if (hasLoaded && e.button === 0) {
		if (!isDrawing) {
			startX = e.clientX - bounds.left;
			startY = e.clientY - bounds.top;
			isDrawing = true;
		}
		draw();
	}
}


function onmouseup(e) {
	if (hasLoaded && e.button === 0) {
		if (isDrawing) {
			existingLines.push({
				startX: startX,
				startY: startY,
				endX: mouseX,
				endY: mouseY
			});
			isDrawing = false;
		}
		draw();
	}
}


function onmousemove(e) {
	if (hasLoaded) {
		mouseX = e.clientX - bounds.left;
		mouseY = e.clientY - bounds.top;
		if (isDrawing) draw();
	}
}


function init() {
	document.getElementById("scrollable").onscroll = function() {init()};
	initFlag++;
	canvas1 = document.getElementById("canvas1");
	canvas1.width = canvasWidth;
	canvas1.height = canvasHeight;
	canvas1.onmousedown = onmousedown;
	canvas1.onmouseup = onmouseup;
	canvas1.onmousemove = onmousemove;
	bounds = canvas1.getBoundingClientRect();
	context = canvas1.getContext("2d");
	hasLoaded = true;
	draw();
}


function erase() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    existingLines.splice(0,existingLines.length);
    context.fillRect(0,0,canvasWidth,canvasHeight);
    document.getElementById("niceStar").innerHTML = "";
}


function undoLastLine() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    existingLines.splice(existingLines.length-1,1);
    draw();
}

/******************************************************************************/
/* A9 INITIALIZATION FUNCTION */
/******************************************************************************/

var initFlag = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;


function entrBtn(event) {
	var keyClick = event.keyCode;
	if(keyClick == '13') startStars();
}


function startStars() {	
	if (initFlag > 0) erase();
	var starPNum = document.getElementById("starInput").value;
	drawFace(ctx, radius);
	drawNumbers(ctx, radius, starPNum);
}

/******************************************************************************/
/* A9 HELPER FUNCTIONS */
/******************************************************************************/

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2*Math.PI);
	ctx.lineWidth = radius*0.01;
	ctx.fillStyle="#FFFF00";
	ctx.fill();
	ctx.stroke();
}


function drawNumbers(ctx, radius, pNum) {
	var ang;
	ctx.font = radius*0.08 + "px arial black";
	ctx.textBaseline="middle";
	ctx.textAlign="center";
	ctx.fillStyle="#000000";
	var numArr = starPoints(pNum);
	for(i = 0; i < numArr.length; i++){
		ang = (i + 1) * Math.PI / (numArr.length/2);
		ctx.rotate(ang);
		ctx.translate(0, -radius*0.85);
		ctx.rotate(-ang);
		ctx.fillText(numArr[i].toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius*0.85);
		ctx.rotate(-ang);
	}
}

/******************************************************************************/
/* A9 SEQUENCING FUNCTIONS */
/******************************************************************************/

function setSequence(pointNum,orderArr,a,b) {
	for (i = 1; i < pointNum; i++) {
		if (orderArr[i-1] + a <= pointNum) {
			orderArr[i] = orderArr[i-1] + a;
		} else {
			orderArr[i] = orderArr[i-1] - b;
		}
	}
	return orderArr;
}


function starPoints(pNum) {	
	if (pNum < 0) {
		return [1];
	} else {
		const pointNum = pNum;
		var orderArr = [1];
		if (pointNum % 2 != 0) {
			var a = 2;
			var b = pointNum - a;
			setSequence(pointNum,orderArr,a,b);
		} else if (pointNum % 4 == 0) {
			var a = (pointNum - 2) / 2;
			var b = pointNum - a;
			setSequence(pointNum,orderArr,a,b);
		} else {
			var a = (pointNum - 2) / 4;
			if (a % 2 == 0) a++;
			var b = pointNum - a;
			setSequence(pointNum,orderArr,a,b);
		}
		return orderArr;
	}
}
