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
		"\n   "+String.fromCharCode(0x2022)+"  V"+String.fromCharCode(920)+": Rads angled in vertical plane "+
		"(H"+String.fromCharCode(920)+",V"+String.fromCharCode(920)+"=0: p"+String.fromCharCode(0x2113)+"=point(0))\n"+
		String.fromCharCode(920)+"Format: Max Input= #*/#*/#*/#, i.e. 2*pi/3 "+
		"(pi="+String.fromCharCode(960)+", one '/' per "+String.fromCharCode(920)+")."); 
}

/******************************************************************************/
// INITIALIZATION FUNCTION
/******************************************************************************/

function reduce(numerator,denominator){
	var gcd = function gcd(a,b){ return b ? gcd(b, a%b) : a; };
	gcd = gcd(numerator,denominator);
	return [numerator/gcd, denominator/gcd];
}

function pLen() {
	var bL = document.getElementById("baseL").value, qL = document.getElementById("distL").value;
	var tH = document.getElementById("thetaH").value, tV = document.getElementById("thetaV").value;
	/* ANGLE IN UNITS OF PI FOR PHRASE */
	var simpleH = reduce(Math.round(tH/0.26179938779),12);
	var simpleV = reduce(Math.round(tV/0.26179938779),12);
	if(simpleH[0] == 1 && simpleH[1] == 1) {
		var tHPhrase = "pi";
	} else if(simpleH[0] == 1) {
		var tHPhrase = "pi/"+String(simpleH[1]);
	} else if(simpleH[1] == 1) {
		var tHPhrase = String(simpleH[0])+"pi";
	} else {
		var tHPhrase = String(simpleH[0])+"pi/"+String(simpleH[1]);
	}
	if(simpleV[0] == 1 && simpleV[1] == 1) {
		var tVPhrase = "pi";
	} else if(simpleV[0] == 1) {
		var tVPhrase = "pi/"+String(simpleV[1]);
	} else if(simpleV[1] == 1) {
		var tVPhrase = String(simpleV[0])+"pi";
	} else {
		var tVPhrase = String(simpleV[0])+"pi/"+String(simpleV[1]);
	}
	/* ANGLE NEXT TO INPUT */
	if(simpleH[0] == 0) {
		document.getElementById('showH').innerHTML = '(0)';
	} else {
		document.getElementById('showH').innerHTML = '('+tHPhrase+')';
	}
	if(simpleV[0] == 0) {
		document.getElementById('showV').innerHTML = '(0)';
	} else {
		document.getElementById('showV').innerHTML = '('+tVPhrase+')';
	}

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

	var plR = String(pL).split(''), plPI = plR.indexOf('.');
	if(((plR[plPI+1] == '9' && plR[plPI+2] == '9') && (plR[plPI+3] == '9' && plR[plPI+4] == '9')) && plR[plPI+5] == '9') pL = Math.round(pL);
	if(((plR[plPI+1] == '0' && plR[plPI+2] == '0') && (plR[plPI+3] == '0' && plR[plPI+4] == '0')) && plR[plPI+5] == '0') pL = Math.round(pL);

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
			tHPhrase+" & "+tVPhrase+" radians horizontally & vertically respectively "+
			"appears to be "+pL+" in. from your perspective.";
	} else if (qL > 0 && tH != 0) {
		var phrase = "A line with base length "+bL+" in. moved away "+qL+" in. and angled "+
			tHPhrase+thetaHPlural+" horizontally appears to be "+pL+" in. from your perspective.";
	} else if (qL > 0 && tV != 0) {
		var phrase = "A line with base length "+bL+" in. moved away "+qL+" in. and angled "+
			tVPhrase+thetaVPlural+" vertically appears to be "+pL+" in. from your perspective.";
	} else if (tH != 0 && tV != 0) {
		var phrase = "A line with base length "+bL+" in., angled "+tHPhrase+" & "+tVPhrase+
			" radians horizontally & vertically respectively, appears to be "+pL+" in."+
			" from your perspective.";
	} else if (qL > 0) {
		var phrase = "A line with base length "+bL+" in. moved away "+qL+" in. "+
			"appears to be "+pL+" in. from your perspective.";
	} else if (tH != 0) {
		var phrase = "A line with base length "+bL+" in. angled "+tHPhrase+thetaHPlural+
			" horizontally appears to be "+pL+" in. from your perspective.";
	} else if (tV != 0) {
		var phrase = "A line with base length "+bL+" in. angled "+tVPhrase+thetaVPlural+
			" vertically appears to be "+pL+" in. from your perspective.";
	} else {
		var phrase = "A line with base length "+bL+" in., moved away "+qL+" in., and angled "+
			tHPhrase+" & "+tVPhrase+" radians horizontally & vertically respectively "+
			"appears to be "+pL+" in. from your perspective.";
	}

	document.getElementById("demo22").innerHTML = phrase;
	if (pL == 0) {
		var lineLen = 3;
	} else {
		var lineLen = 150*pL;
	}
	var lineAng = lineAngle();
	document.getElementById("line").style = "-webkit-transform:rotate("+String(lineAng)+"rad);height:"+String(lineLen)+"px;";
	document.getElementById("boxStyle").innerHTML = "#lineBox2{border:8px double #F5F;padding-bottom:20px;height:"+String(150*bL+20)+"px;}";
}

/******************************************************************************/ 
/* DRAWN LINE ANGLE */
/******************************************************************************/

function lineAngle() {
	var tanV = Math.tan(document.getElementById("thetaV").value);
	var sinH = Math.sin(document.getElementById("thetaH").value);
	var lineThetaRad = Math.atan(tanV/sinH);
	return (1.57079632679-lineThetaRad);
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