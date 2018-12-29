/* Author: Jordan Randleman */

/******************************************************************************/
/* INFO FUNCTION */
/******************************************************************************/

function aboutStars() {
	alert('\nTo animate a star drawn in a single stroke:\n   '+String.fromCharCode(0x2022)+
		'   Select the desired number of points\n   '+String.fromCharCode(0x2022)+
		'   Enter your selection\n'+'   '+String.fromCharCode(0x2022)+
		'   Voila!\n');
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

function entrBtn(event) {
	var keyClick = event.keyCode;
	if(keyClick == '13') shapeSequence();
}

/* radius 1/2 pf max height */
function findX(ptNum,omega) { return 200*Math.sin((2*ptNum*Math.PI)/omega); }
function findY(ptNum,omega) { return 400*Math.pow(Math.sin((ptNum*Math.PI)/omega),2); }

function shapeSequence(omega) {
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
	document.getElementById('genStar').innerHTML = '<polygon id="drawing" class="poly" points="'+svgArray.join('')+'" style="stroke:#F5F;stroke-width:1.5;"/>';
	document.getElementById('starStyle').innerHTML = '.poly {stroke-dasharray:'+drawing.getTotalLength()+';stroke-dashoffset:'+drawing.getTotalLength()+';'+
		'animation:dash 2.5s linear forwards;}@keyframes dash {to {stroke-dashoffset:0;}}';
	setTimeout(function() {
		document.getElementById('drawing').style = 'fill:lime;fill-rule:evenodd;stroke:#F5F;stroke-width:1.5;';
	}, 2575);
	return;
}