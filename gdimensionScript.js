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
	if(keyClick == '13') startDim();
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
