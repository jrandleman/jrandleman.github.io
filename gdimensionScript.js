// Author: Jordan Randleman

/******************************************************************************/
// INFO FUNCTION
/******************************************************************************/

function aboutDimensions() {
	alert("Calculate the number of smaller spatial dimensional cubes inside"+ 
		" another larger spatial dimensional cube. \n\nFor example: 0D = point,"+
		" 1D = line, 2D = face, 3D = cube, 4D = tesseract, etc. \n\nTherefore,"+
		" 4 would be returned if a 1D inner spatial cube and a 2D outer"+
		" spatial cube were entered (as there are 4 lines in a face).");
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

function startDim() {	
	var dimin = document.getElementById("quantity1").value; 
	var dimout = document.getElementById("quantity2").value; 
	if (dimin.split('')[0] == '-' || dimout.split('')[0] == '-') {
		document.getElementById("demo21").innerHTML = "As 'negative space' does not exist, neither do 'negative spatial"+
			" dimensions'. Try positive numbers instead!";
		return;
	}
	if (Number(dimin) > Number(dimout)) {
		document.getElementById("demo21").innerHTML = "Inner spatial dimensional cubes cannot be larger than the outer ones!";
	} else {
		var dimnum = dimensions(dimout,dimin);
		if (dimnum == 1) {
			var verb = 'is ';
			var plural = ' ';
		} else {
			var verb = 'are ';
			var plural = 's ';
		}
		if (dimin == 0) {
			var part1 = 'point'+plural;
		} else if (dimin == 1) {
			var part1 = 'line'+plural;
		} else if (dimin == 2) {
			var part1 = 'face'+plural;
		} else if (dimin == 4) {
			var part1 = 'tesseract'+plural;
		} else {
			var part1 = dimin+'D cube'+plural;
		}
		if (dimout == 0) {
			var part2 = 'point.';
		} else if (dimout == 1) {
			var part2 = 'line.';
		} else if (dimout == 2) {
			var part2 = 'face.';
		} else if (dimout == 4) {
			var part2 = 'tesseract.';
		} else {
			var part2 = dimout+'D cube.';
		}
		var phrase = 'There '+verb+dimnum+' '+part1+'within a single '+part2;
		document.getElementById("demo21").innerHTML = phrase;
	}
}


function entrBtn(event) {
	var keyClick = event.keyCode;
	if(keyClick == '13') {
		startDim();
	}
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

var id1Text = "-:- CLICK TO ENTER -:-";
var id1Len = id1Text.length;
const id1FilledArr = randTitle().split('').splice(0,id1Len);

var titleTxt = "Spatial Dimensions!";
var titleLen = (titleTxt.length);
const titleFilledArr = randTitle().split('').splice(0,titleLen);

var numText = "SHOW ME THE NUMBERS";
var numLen = numText.length;
const numFilledArr = randTitle().split('').splice(0,numLen);

var subt1Text = " DETERMINE ";
var subt1Len = subt1Text.length;
const subt1FilledArr = randTitle().split('').splice(0,subt1Len);

var subt2Text = " DIMENSIONS ";
var subt2Len = subt2Text.length;
const subt2FilledArr = randTitle().split('').splice(0,subt2Len);

var ssub1Text = "Inner Cube:";
var ssub1Len = ssub1Text.length;
const ssub1FilledArr = randTitle().split('').splice(0,ssub1Len);

var ssub2Text = "Outer Cube:";
var ssub2Len = ssub2Text.length;
const ssub2FilledArr = randTitle().split('').splice(0,ssub2Len);


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
		var numletter = numText.charAt(ch);
		var subt1letter = subt1Text.charAt(ch);
		var subt2letter = subt2Text.charAt(ch);
		var ssub1letter = ssub1Text.charAt(ch);
		var ssub2letter = ssub2Text.charAt(ch);
		var id1letter = id1Text.charAt(ch);

        titleFilledArr.splice(ch,1,letter);
        numFilledArr.splice(ch,1,numletter);
        subt1FilledArr.splice(ch,1,subt1letter);
        subt2FilledArr.splice(ch,1,subt2letter);
        ssub1FilledArr.splice(ch,1,ssub1letter);
        ssub2FilledArr.splice(ch,1,ssub2letter);
        id1FilledArr.splice(ch,1,id1letter);

        document.getElementById("webTitleID").innerHTML = titleFilledArr.join('');
        document.getElementById("numId").innerHTML = numFilledArr.join('');
        document.getElementById("subt1Id").innerHTML = subt1FilledArr.join('');
        document.getElementById("subt2Id").innerHTML = subt2FilledArr.join('');
        document.getElementById("ssub1").innerHTML = ssub1FilledArr.join('');
        document.getElementById("ssub2").innerHTML = ssub2FilledArr.join('');
        document.getElementById("id1").innerHTML = id1FilledArr.join('');
        ch++;
        setTimeout(typeWriter, speed);
    }
}

/******************************************************************************/
// FACTORIAL FUNCTION
/******************************************************************************/

function factor(num) {
	var factored = 1;
	if (num < 0) {
		return "Clever, but regretfully negative dimensions evade us as of yet.";
	} else if ((num == 0) || (num == 1)) {
		return 1;
	} else {
		for (i = 0; i < num; i++) {
			factored *= num - i;
		}
	}
	return factored;
}

/******************************************************************************/
// DIMENSIONAL FUNCTION
/******************************************************************************/

function dimensions(dimout,dimin) {
	var dOFact = factor(dimout);
	var twoOutIn = Math.pow(2,dimout-dimin);
	var dIFact = factor(dimin);
	var dDiffFact = factor(dimout-dimin);
	return Math.round((dOFact*twoOutIn)/(dIFact*dDiffFact));
}
