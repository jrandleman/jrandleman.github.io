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


function yellowQ() {
	document.getElementById("spinning3DText3").style = "color:yellow;";
}


function borderQ() {
	document.getElementById("spinning3DText3").style = "color:#FE8F10;";
}

/******************************************************************************/
/* HEADER/FOOTER HOVER FUNCTIONS */
/******************************************************************************/

function cogAnim(flag) {
	if(flag == 1) {
		document.getElementById("lnId").classList.add("fa-spin");
	} else {
		document.getElementById("lnId").classList.remove("fa-spin");
	}
}

function on(x) {
	if(x == 1) {
		document.getElementById("con2").innerHTML = "&#x27AA;";	
	} else if(x == 1.5) {
		document.getElementById("con2").innerHTML = "&#x27AB;";
	} else if(x == 2) {
		document.getElementById("con3").innerHTML = "&#x2751;";	
	} else if(x == 2.5) {
		document.getElementById("con3").innerHTML = "&#x2752;";
	} else if(x == 3) {
		document.getElementById("con4").innerHTML = "&#x2738;";	
	} else if(x == 3.5) {
		document.getElementById("con4").innerHTML = "&#x2729;";
	} else if(x == 4) {
		document.getElementById("con5").innerHTML = "&#x2468;";	
	} else if(x == 4.5) {
		document.getElementById("con5").innerHTML = "&#x24C8;";
	}
    
}

/******************************************************************************/
// INITIALIZATION FUNCTION
/******************************************************************************/

function perspectiveLength() {
	var bL = document.getElementById("baseL").value;
	var qL = document.getElementById("distL").value;
	var tHVal = document.getElementById("thetaH").value;
	var tVVal = document.getElementById("thetaV").value;
	var tH = formatTheta(tHVal);
	var tV = formatTheta(tVVal);
	var absTH = Math.pow(Math.abs(Math.sin(tH)),2);
	var absTV = Math.pow(Math.abs(Math.sin(tV)),2);
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
	document.getElementById("line").style = "-webkit-transform:rotate("+lineAng+"deg);height:"+lineLen+"px;";
}


function entrBtn(event) {
	var keyClick = event.keyCode;
	if(keyClick == '13') {
		perspectiveLength();
	}
}

/******************************************************************************/ 
/* DRAWN LINE ANGLE */
/******************************************************************************/

function lineAngle() {
	/*** 1 = VERT - 2 = HORIZ ***/
	var linebL = document.getElementById("baseL").value;
	var lineqL = document.getElementById("distL").value;
	var lineqL2 = 2*lineqL;
	var linebLSquared = Math.pow(linebL,2);	
	var linebLrt3 = linebL*(Math.pow(3,.5));

	var tV1 = formatTheta(document.getElementById("thetaV").value);
	var tH1 = 0;
	var absTH1 = Math.pow(Math.abs(Math.sin(tH1)),2);
	var absTV1 = Math.pow(Math.abs(Math.sin(tV1)),2);
	var rt3Abs1 = Math.pow(3*(absTH1+absTV1),.5);
	var pL1 = ((linebLSquared*rt3Abs1)/(linebLrt3+lineqL2));
	var opposite = pL1/2;

	var tV2 = 0;
	var tH2 = formatTheta(document.getElementById("thetaH").value);
	var absTH2 = Math.pow(Math.abs(Math.sin(tH2)),2);
	var absTV2 = Math.pow(Math.abs(Math.sin(tV2)),2);
	var rt3Abs2 = Math.pow(3*(absTH2+absTV2),.5);
	var pL2 = ((linebLSquared*rt3Abs2)/(linebLrt3+lineqL2));
	var adjacent = pL2/2;

	var innerVal = opposite/adjacent;
	var lineThetaRad = Math.atan(innerVal);
	var lineThetaDeg = ((lineThetaRad*180)/(Math.PI));
	var linV = (document.getElementById("thetaV").value).split('');
	var linH = (document.getElementById("thetaH").value).split('');
	if ((linV[0] == '-' && linH[0] != '-') || (linH[0] == '-' && linV[0] != '-')) {
		var sign = -1;
	} else {
		var sign = 1;
	}
	var lineA = (90 - (sign*lineThetaDeg));
	return lineA;
}

/******************************************************************************/ 
// TYPEWRITER
/******************************************************************************/

var ch = 0;
var speed = 80;
var possibleChars = '-+*/|}{[]~":;?/.><=+-_)(*&^%$#@!)}';
var possible = possibleChars.split('');
var possibleTitleInts = [];
var titleArr = [];

/* var lnText = "Website's Prototypes";
var lnLen = lnText.length;
const lnFilledArr = randTitle().split('').splice(0,lnLen); */

var id1Text = "-:- CLICK TO ENTER -:-";
var id1Len = id1Text.length;
const id1FilledArr = randTitle().split('').splice(0,id1Len);

var titleTxt = "Perspective Length!";
var titleLen = (titleTxt.length);
const titleFilledArr = randTitle().split('').splice(0,titleLen);

/* var nmText = " Jordan Randleman";
var nmLen = nmText.length;
const nmFilledArr = randTitle().split('').splice(0,nmLen); */

var numText = "SHOW ME THE NUMBERS";
var numLen = numText.length;
const numFilledArr = randTitle().split('').splice(0,numLen);

var subt1Text = " Permute ";
var subt1Len = subt1Text.length;
const subt1FilledArr = randTitle().split('').splice(0,subt1Len);

var subt2Text = " Perspective ";
var subt2Len = subt2Text.length;
const subt2FilledArr = randTitle().split('').splice(0,subt2Len);

var ssub1Text = "Base Length: ";
var ssub1Len = ssub1Text.length;
const ssub1FilledArr = randTitle().split('').splice(0,ssub1Len);

var ssub2Text = "Distance Moved: ";
var ssub2Len = ssub2Text.length;
const ssub2FilledArr = randTitle().split('').splice(0,ssub2Len);

var ssub3Text = "Horizontal ";
var ssub3Len = ssub3Text.length;
const ssub3FilledArr = randTitle().split('').splice(0,ssub3Len);

var ssub4Text = "Vertical ";
var ssub4Len = ssub4Text.length;
const ssub4FilledArr = randTitle().split('').splice(0,ssub4Len);


function randTitle() {
    while (possibleTitleInts.length < id1Len) {
        var ranNum =  Math.floor(Math.random() * (id1Len));
        if (possibleTitleInts.indexOf(ranNum) == -1) {
            possibleTitleInts.push(ranNum);
        }
    }
    for (let i = 0; i < possibleTitleInts.length; i++) {
        var num = possibleTitleInts[i];
        titleArr.push(possible[num]);
    }
    return titleArr.join('');
}


function typeWriter() {
    if (ch < id1Text.length) {
        var letter = titleTxt.charAt(ch);
        /*var lnletter = lnText.charAt(ch);
		var nmletter = nmText.charAt(ch); */
		var numletter = numText.charAt(ch);
		var subt1letter = subt1Text.charAt(ch);
		var subt2letter = subt2Text.charAt(ch);
		var ssub1letter = ssub1Text.charAt(ch);
		var ssub2letter = ssub2Text.charAt(ch);
		var ssub3letter = ssub3Text.charAt(ch);
		var ssub4letter = ssub4Text.charAt(ch);
		var id1letter = id1Text.charAt(ch);

        titleFilledArr.splice(ch,1,letter);
        /*lnFilledArr.splice(ch,1,lnletter);
        nmFilledArr.splice(ch,1,nmletter); */
        numFilledArr.splice(ch,1,numletter);
        subt1FilledArr.splice(ch,1,subt1letter);
        subt2FilledArr.splice(ch,1,subt2letter);
        ssub1FilledArr.splice(ch,1,ssub1letter);
        ssub2FilledArr.splice(ch,1,ssub2letter);
        ssub3FilledArr.splice(ch,1,ssub3letter);
        ssub4FilledArr.splice(ch,1,ssub4letter);
        id1FilledArr.splice(ch,1,id1letter);

        document.getElementById("webTitleID").innerHTML = titleFilledArr.join('');
        /*document.getElementById("lnId").innerHTML = lnFilledArr.join('');
        document.getElementById("nmId").innerHTML = "&#x00A9;"+nmFilledArr.join(''); */
        document.getElementById("numId").innerHTML = numFilledArr.join('');
        document.getElementById("subt1Id").innerHTML = subt1FilledArr.join('');
        document.getElementById("subt2Id").innerHTML = subt2FilledArr.join('');
        document.getElementById("ssub1").innerHTML = ssub1FilledArr.join('');
        document.getElementById("ssub2").innerHTML = ssub2FilledArr.join('');
        document.getElementById("ssub3").innerHTML = ssub3FilledArr.join('');
        document.getElementById("ssub4").innerHTML = ssub4FilledArr.join('');
        document.getElementById("id1").innerHTML = id1FilledArr.join('');
        ch++;
        setTimeout(typeWriter, speed);
    }
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
		if (i < tStr.length) {
			opp1.push(tStr[i]);
		}
	}
	i++;
	while ((tStr[i] != '*' && tStr[i] != '/') && (i < tStr.length)) {
		part2.push(tStr[i]);
		i++;
	}
	if (part2.length != 0 && i-1 < tStr.length) {
		part2 = Number(part2.join(''));
		if (i < tStr.length) {
			opp2.push(tStr[i]);
		}
	}
	i++;
	while ((tStr[i] != '*' && tStr[i] != '/') && (i < tStr.length)) {
		part3.push(tStr[i]);
		i++;
	} 
	if (part3.length != 0 && i-1 < tStr.length) {
		part3 = Number(part3.join(''));
		if (i < tStr.length) {
			opp3.push(tStr[i]);
		}
	}
	i++;
	while (i < tStr.length) {
		part4.push(tStr[i]);
		i++;
	}
	if (part4.length != 0) {
		part4 = Number(part4.join(''));
	}
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