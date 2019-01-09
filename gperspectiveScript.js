// Author: Jordan Randleman

/******************************************************************************/
// INFO FUNCTION
/******************************************************************************/

function aboutPL() {
	alert("If you hold a line flat-out "+String.fromCharCode(0x22A5)+" to your field"+
		" of vision, moving it away or spinning it will change its "+String.fromCharCode(0x2113)+
		" from your perpesctive (p"+String.fromCharCode(0x2113)+") relative to its original"+
		" "+String.fromCharCode(0x2113)+" (base"+String.fromCharCode(0x2113)+") prior to dipslacement ("+
		String.fromCharCode(0x2113)+"=length, "+String.fromCharCode(0x2202)+"=distance)."+
		"\n   "+String.fromCharCode(0x2022)+"  Base"+String.fromCharCode(0x2113)+": line's "+String.fromCharCode(0x2113)+
		" when "+String.fromCharCode(0x2202)+" from eye to line's center is ("+String.fromCharCode(0x0221A)+
		"3)/2 line's "+String.fromCharCode(0x2113)+"\n      (forming an "+"equilateral triangle from your eye to the line)"+
		"\n   "+String.fromCharCode(0x2022)+"  "+String.fromCharCode(0x2202)+" Moved: "+String.fromCharCode(0x2202)+
		" line's moved horizontally from its Base"+String.fromCharCode(0x2113)+" position"+
		"\n   "+String.fromCharCode(0x2022)+"  H"+String.fromCharCode(920)+": Radians line's angled along horizontal plane"+
		"\n   "+String.fromCharCode(0x2022)+"  V"+String.fromCharCode(920)+": Radians angled along vertical plane "+
		"(H"+String.fromCharCode(920)+",V"+String.fromCharCode(920)+"=0: p"+String.fromCharCode(0x2113)+"=point(0))\n"+
		String.fromCharCode(920)+" Format: Max Input= # */ # */ # */ #, i.e. 2*pi/3 "+
		"(pi="+String.fromCharCode(960)+", one '/' per "+String.fromCharCode(920)+")."); 
}

/******************************************************************************/
// INITIALIZATION FUNCTION
/******************************************************************************/

function entrBtn(event) { if(event.keyCode == '13') perspectiveLength(); }

function perspectiveLength() {
	var bL = document.getElementById("baseL").value;
	var qL = document.getElementById("distL").value;
	var tHVal = document.getElementById("thetaH").value;
	var tVVal = document.getElementById("thetaV").value;
	var tH = formatTheta(tHVal);
	var tV = formatTheta(tVVal);
	var absTH = Math.pow(Math.abs(Math.sin(tV)),2); /* LONG-LEG OF PERSPECTIVE TRIANGLE */
	var absTV = Math.pow((Math.abs(Math.cos(tV)*Math.sin(tH))),2); /* SHORT-LEG OF PER T */
	var bLSquared = Math.pow(bL,2);	
	var rt3Abs = Math.pow(3*(absTH+absTV),.5);
	var bLrt3 = bL*(Math.pow(3,.5));
	var qL2 = 2*qL;
	if (bL == 0) {
		var pL = 0;
	} else {
		var pL = ((bLSquared*rt3Abs)/(bLrt3+qL2));
	}

	if (tH == 1) {
		var thetaHPlural = " radian";
	} else {
		var thetaHPlural = " radians";
	}
	if (tV == 1) {
		var thetaVPlural = " radian";
	} else {
		var thetaVPlural = " radians";
	}

	if ((qL == 0 && tH == 0) && tV == 0) {
		var phrase = "A line with base length "+bL+" in., without having been"+
			" moved away or angled, appears to be "+pL+" in. (a point) from your perspective.";
	} else if (tH == 0 && tV == 0) {
		var phrase = "A line with base length "+bL+" in. moved away "+qL+" in., without"+
			" being angled, appears to be "+pL+" in. from your perspective.";
	} else if ((qL > 0 && tH != 0) && tV != 0) {
		var phrase = "A line with base length "+bL+" in., moved away "+qL+" in., and angled "+
			tHVal+" & "+tVVal+" radians horizontally & vertically respectively "+
			"appears to be "+pL+" in. from your perspective.";
	} else if (qL > 0 && tH != 0) {
		var phrase = "A line with base length "+bL+" in. moved away "+qL+" in. and angled "+
			tHVal+thetaHPlural+" horizontally appears to be "+pL+" in. from your perspective.";
	} else if (qL > 0 && tV != 0) {
		var phrase = "A line with base length "+bL+" in. moved away "+qL+" in. and angled "+
			tVVal+thetaVPlural+" vertically appears to be "+pL+" in. from your perspective.";
	} else if (tH != 0 && tV != 0) {
		var phrase = "A line with base length "+bL+" in., angled "+tHVal+" & "+tVVal+
			" radians horizontally & vertically respectively, appears to be "+pL+" in."+
			" from your perspective.";
	} else if (qL > 0) {
		var phrase = "A line with base length "+bL+" in. moved away "+qL+" in. "+
			"appears to be "+pL+" in. from your perspective.";
	} else if (tH != 0) {
		var phrase = "A line with base length "+bL+" in. angled "+tHVal+thetaHPlural+
			" horizontally appears to be "+pL+" in. from your perspective.";
	} else if (tV != 0) {
		var phrase = "A line with base length "+bL+" in. angled "+tVVal+thetaVPlural+
			" vertically appears to be "+pL+" in. from your perspective.";
	} else {
		var phrase = "A line with base length "+bL+" in., moved away "+qL+" in., and angled "+
			tHVal+" & "+tVVal+" radians horizontally & vertically respectively "+
			"appears to be "+pL+" in. from your perspective.";
	}

	document.getElementById("demo22").innerHTML = phrase;
	if (pL == 0) {
		var lineLen = 3;
	} else {
		var lineLen = 200*pL;
	}
	var lineAng = lineAngle();
	document.getElementById("line").style = "-webkit-transform:rotate("+String(lineAng)+"deg);height:"+String(lineLen)+"px;";
}

/******************************************************************************/ 
/* DRAWN LINE ANGLE */
/******************************************************************************/

function lineAngle() {
	var tanV = Math.tan(formatTheta(document.getElementById("thetaV").value));
	var sinH = Math.sin(formatTheta(document.getElementById("thetaH").value));
	var lineThetaRad = Math.atan(tanV/sinH);
	var lineThetaDeg = ((lineThetaRad*180)/(Math.PI));
	return (90 - (lineThetaDeg));
}

/******************************************************************************/
// ANGLE EDITING FUNCTION
/******************************************************************************/

function formatTheta(tStr) {
	tStr = tStr.replace(/pi/g, Math.PI).split('');
	var opp1 = [];
	var opp2 = [];
	var opp3 = [];
	var part1 = [];
	var part2 = [];
	var part3 = [];
	var part4 = [];
	var tNum = 0;

	if (tStr[0] == '-') {
		var sign = -1;
		tStr.splice(0,1);
	} else {
		var sign = 1;
	}

	var i = 0;
	while ((tStr[i] != '*' && tStr[i] != '/') && (i < tStr.length)) {
		part1.push(tStr[i]);
		i++;
	}
	if (part1.length != 0 && i-1 < tStr.length) {
		part1 = Number(part1.join(''));
		if (i < tStr.length) opp1.push(tStr[i]);
	}
	i++;
	while ((tStr[i] != '*' && tStr[i] != '/') && (i < tStr.length)) {
		part2.push(tStr[i]);
		i++;
	}
	if (part2.length != 0 && i-1 < tStr.length) {
		part2 = Number(part2.join(''));
		if (i < tStr.length) opp2.push(tStr[i]);
	}
	i++;
	while ((tStr[i] != '*' && tStr[i] != '/') && (i < tStr.length)) {
		part3.push(tStr[i]);
		i++;
	} 
	if (part3.length != 0 && i-1 < tStr.length) {
		part3 = Number(part3.join(''));
		if (i < tStr.length) opp3.push(tStr[i]);
	}
	i++;
	while (i < tStr.length) {
		part4.push(tStr[i]);
		i++;
	}
	if (part4.length != 0) part4 = Number(part4.join(''));
	if (opp1[0] == '/') {
		if (opp2[0] == '*') {
			if (opp3[0] == '*') {
				tNum += part1/(part2*part3*part4);
			} else {
				tNum += part1/(part2*part3);
			}
		} else {
			tNum += part1/part2;
		}
	} else if (opp2[0] == '/') {
		if (opp3[0] == '*') {
			tNum += (part1*part2)/(part3*part4);
		} else {
			tNum += (part1*part2)/part3;
		}
	} else if (opp3[0] == '/') {
		tNum += (part1*part2*part3)/part4;
	} else if (opp1[0] == '*') {
		tNum += part1*part2;
	} else {
		tNum += part1;
	}
	return (sign*tNum);
}