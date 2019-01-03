/* Author: Jordan Randleman */

/******************************************************************************/
/* INFO FUNCTION */
/******************************************************************************/

function aboutStars() {
	alert('=> Click the "pencil", "star", or "rotation" button below to either hand-draw, animate, or make a mandala of your star of choice.'+
		'\n\nTo sketch a star by hand in a single stroke:\n   '+String.fromCharCode(0x2022)+
		'   Enter desired # of points and connect them chronologically\n   '+String.fromCharCode(0x2022)+
		'   Click "trashcan" to clear sketch & "arrow" to undo last line\n\n'+
		'For Tessellation:\n=> Mouseover top-right to edit parameters & bottom-center to exit');
}

/******************************************************************************/
/* SWITCH DRAWING FUNCTIONS */
/******************************************************************************/

var kalCounter = 0;

function initStarShow() {shapeSequence();startStars();makeMandala();}
function showMandala() {
	document.getElementById('starAnimDrawn').style = 'position:absolute;top:0;visibility:hidden;';
	document.getElementById('starHandDrawn').style = 'position:absolute;top:0;visibility:hidden;';
	document.getElementById('startMandala').style = '';
	document.getElementById('genMandala').style = 'transform:scale(1.25);';
	makeMandala();
}
function showHandDrawn() {
	clearKal('upIt');
	document.getElementById('starAnimDrawn').style = 'position:absolute;top:0;visibility:hidden;';
	document.getElementById('startMandala').style = 'position:absolute;top:0;visibility:hidden;right:999';
	document.getElementById('starHandDrawn').style = '';
	document.getElementById('genMandala').style = '';
	startStars();
}
function showAnimated() {
	clearKal('upIt');
	document.getElementById('starHandDrawn').style = 'position:absolute;top:0;visibility:hidden;';
	document.getElementById('startMandala').style = 'position:absolute;top:0;visibility:hidden;right:999';
	document.getElementById('starAnimDrawn').style = '';
	document.getElementById('genMandala').style = '';
	shapeSequence();
}
function kaleidoscope() {
	if(kalCounter % 2 == 0) {
		var allGood = confirm('-:-:-:-:-:-:-:-:-:-:-:-:-:-:--:-:-:-:-:-:-:-:-:-:-:-:-:-:--:-:-:-:-:-:-:-:-:-:-\n-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-'+
			' !!! WARNING !!! -:-:-:-:-:-:-:-:-:-:-:-:-:-:-\n-:-:-:-:-:-:-:-:-:-:-:-:-:-:--:-:-:-:-:-:-:-:-:-:-:-:-:-:--:-:-:-:-:-:-:-:-:-:-\n\n'+
			'=>   THE FOLLOWING ANIMATION HAS FAST, FLASHING COLORS!\n=>   THOSE WITH EPILEPSY BE ADVISED!\n\nCONTINUE PLAYING ANIMATION?');
		if(!allGood) return;
		document.getElementById('mandala'). innerHTML = '<svg height="450" width="450" style="transform:scale(1.25)" id="genMandala2"></svg>';
		document.getElementById('starStyle2').innerHTML = '';
		document.getElementById('playPause').innerHTML = "pause_circle_filled";
		document.getElementById('starNumScript').innerHTML = "var timeoutCounter = 1;for(q = 0; q < 999; q++) {for(let z = 1; z < 50; z++) {"+
			"setTimeout(makeMandalaKal,timeoutCounter*100,z);timeoutCounter++;timeoutCounter++;}for(y = 51; y > 1; y--) {"+
			"setTimeout(makeMandalaKal,timeoutCounter*100,y);timeoutCounter++;}}"+
			"function makeMandalaKal(omega) {const x0 = 225, y0 = 10;var pointArr = [], polyString = '';pointArr.push(x0+','+y0+' ');"+
			"for(let pNum = 1; pNum < omega; pNum++) {var xCur = Math.round(x0 - findX(pNum,omega)), yCur = Math.round(y0 + findY(pNum,omega));"+
			"pointArr.push(xCur+','+yCur+' ');}for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j++) polyString += mandaLine(pointArr,i,j,"+
			"'lime');if(omega % 2 == 0) {for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=2) polyString += mandaLine(pointArr,i,j,'red');"+
			"if(omega % 4 != 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=4) polyString += mandaLine(pointArr,i,j,'dodgerblue');}"+
			"if((omega-5) % 3 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=3) polyString += mandaLine(pointArr,i,j,'orange');"+
			"if((omega-2) % 5 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=5) polyString += mandaLine(pointArr,i,j,'#F5F');"+
			"if((omega-2) % 6 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=6) polyString += mandaLine(pointArr,i,j,'hotpink');"+
			"if((omega-2) % 9 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=9) polyString += mandaLine(pointArr,i,j,'#00FFCC');"+
			"document.getElementById('genMandala2').innerHTML = polyString;}";
	} else {
		clearKal();
		makeMandala();
	}
	kalCounter++;
}
function clearKal(flag) {
	if(flag == 'upIt') kalCounter = 2;
	document.getElementById('mandala'). innerHTML = '<svg height="450" width="450" style="transform:scale(1.25)" id="genMandala"></svg>';
	document.getElementById('playPause').innerHTML = "play_circle_filled";
	document.getElementById('starNumScript').innerHTML = "";
}

/******************************************************************************/
/* HAND DRAW INITIALIZATION FUNCTIONS */
/******************************************************************************/

/* CURSOR CROSSHAIR ON DRAW */
function cross() { document.getElementById("canvas1").style = "cursor:crosshair;border-radius:50%;"; }
var canvasWidth = 360, canvasHeight = 360;
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


function entrBtn(event) {if(event.keyCode == '13') {shapeSequence();startStars();makeMandala();}}
function startStars() {	
	init(),cross();
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
	ctx.font = radius*0.07 + "px arial black";
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

/******************************************************************************/
/* POLYGON POINTS SVG SCRIPT */
/******************************************************************************/

/* radius 1/2 pf max height -:- x = r*sin(2P*pi/omega) -:- y = 2r*sin^2(P*pi/omega) */
function findX(ptNum,omega) { return 200*Math.sin((2*ptNum*Math.PI)/omega); }
function findY(ptNum,omega) { return 400*Math.pow(Math.sin((ptNum*Math.PI)/omega),2); }

function shapeSequence() {
	document.getElementById('genStar').innerHTML = '';
	var omega = document.getElementById("starInput").value;
	const x0 = 225, y0 = 10;
	var pointArr = [];
	pointArr.push(x0+","+y0+" ");
	for(let ptNum = 1; ptNum < omega; ptNum++) {
		var xCur = Math.round(x0 - findX(ptNum,omega));
		var yCur = Math.round(y0 + findY(ptNum,omega));
		pointArr.push(xCur+","+yCur+" ");
	}
	var starArray = starPoints(omega);
	var svgArray = [];
	for(let j = 1; j <= omega; j++) {
		svgArray.push(pointArr[starArray.indexOf(j)]);
	}
	/* fill-rule:nonzero; */
	/*'<circle cx="225" cy="210" r="200" stroke="#F5F" stroke-width="3" />'+
	'<polygon points="'+pointArr.join('')+'" style="stroke:#F5F;stroke-width:3;"/>'+*/
	document.getElementById('genStar').innerHTML = '<polygon id="drawing" class="poly" points="'+svgArray.join('')+'" style="stroke:#F5F;stroke-width:1.5;"/>';
	document.getElementById('starStyle').innerHTML = '.poly {stroke-dasharray:'+drawing.getTotalLength()+';stroke-dashoffset:'+drawing.getTotalLength()+';'+
		'animation:dash 2.5s linear forwards;}@keyframes dash {to {stroke-dashoffset:0;}}';
	setTimeout(function() {
		document.getElementById('drawing').style = '-moz-transition:fill 1.33s ease-in;-o-transition:fill 1.33s ease-in;'+
			'-webkit-transition:fill 1.33s ease-in;transition:fill 1.33s ease-in;fill:lime;fill-rule:evenodd;stroke:#F5F;stroke-width:1.5;';
	}, 2575);
	return;
}

/******************************************************************************/
/* MANDALA SVG SCRIPT */
/******************************************************************************/

function makeMandala() {
	var omega = document.getElementById("starInput").value;
	const x0 = 225, y0 = 10;
	var pointArr = [];
	pointArr.push(x0+","+y0+" ");
	for(let pNum = 1; pNum < omega; pNum++) {
		var xCur = Math.round(x0 - findX(pNum,omega));
		var yCur = Math.round(y0 + findY(pNum,omega));
		pointArr.push(xCur+","+yCur+" ");
	}
	var polyString = '';
	for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j++) polyString += mandaLine(pointArr,i,j,'lime');
	if(omega % 2 == 0) {
		for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=2) polyString += mandaLine(pointArr,i,j,'red');
		if(omega % 4 != 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=4) polyString += mandaLine(pointArr,i,j,'dodgerblue');
	}
	if((omega-5) % 3 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=3) polyString += mandaLine(pointArr,i,j,'orange');
	if((omega-2) % 5 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=5) polyString += mandaLine(pointArr,i,j,'#F5F');
	if((omega-2) % 6 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=6) polyString += mandaLine(pointArr,i,j,'hotpink');
	if((omega-2) % 9 == 0) for(let i = 0; i < pointArr.length; i++) for(let j = i+1; j < pointArr.length; j+=9) polyString += mandaLine(pointArr,i,j,'#00FFCC');
	document.getElementById('genMandala').innerHTML = polyString;
	document.getElementById('starStyle2').innerHTML = '.manda {stroke-dasharray:'+999+';stroke-dashoffset:'+999+';'+
		'animation:dash 2.5s linear forwards;}@keyframes dash {to {stroke-dashoffset:0;}}';
}

function mandaLine(pointArr,i,j,color) {
	var xOne = pointArr[i].split('').splice(0,pointArr[i].indexOf(',')).join('');
	var yOne = pointArr[i].split('').splice(pointArr[i].indexOf(',')+1,pointArr[i].length).join('');
	var xTwo = pointArr[j].split('').splice(0,pointArr[j].indexOf(',')).join('');
	var yTwo = pointArr[j].split('').splice(pointArr[j].indexOf(',')+1,pointArr[j].length).join('');
	return "<line class='manda' x1='"+xOne+"' y1='"+yOne+"' x2='"+xTwo+"' y2='"+yTwo+"' style='stroke:"+color+";stroke-width:.75' />";
}