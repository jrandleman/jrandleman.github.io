// Author: Jordan Randleman

/******************************************************************************/
// INFO FUNCTION
/******************************************************************************/

function aboutDimensions() {
	alert("Calculate the number of smaller spatial dimensional cubes (red) inside"+ 
		" another larger spatial dimensional cube (green). \n\nFor example: 0D = point,"+
		" 1D = line, 2D = face, 3D = cube, 4D = tesseract, etc. \n\nTherefore,"+
		" 6 would be returned if a 2D inner spatial cube and a 3D outer"+
		" spatial cube were entered (as there are 6 faces in a 3D cube).");
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
		clearSvg();
		return;
	}
	if (Number(dimin) > Number(dimout)) {
		document.getElementById("demo21").innerHTML = "Inner spatial dimensional cubes cannot be larger than the outer ones!";
		clearSvg();
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
		if(Number(dimin) < 16 && Number(dimout) < 16) {
			createCube(Number(dimin),'red');
			createCube(Number(dimout),'lime');
		} else { 
			clearSvg();
		}
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

/******************************************************************************/
/* DIMENSION DRAWING */
/******************************************************************************/

var shape;
function createCube(cube,color) {
	viewScale(cube,color);
	const tessSpace = 200, pentMv = 200, hexMv = 500, sepMv = 375, octMv = 1100, nonMv = 775, decMv = 2200;
	const hendMv = 1550, dodMv = 4400, triMv = 3100, tdcMv = 8800, pdcMv = 6200;
	const mA = [0,hexMv,sepMv,octMv,nonMv,decMv,hendMv,dodMv,triMv,tdcMv,pdcMv];
	shape = gen(color,cube,0,pentMv,0,0,0,0,0,0,0,0,0,0);
	if (cube >= 5) {
		shape += gen(color,cube,tessSpace,0,0,0,0,0,0,0,0,0,0,0);
	}
	if(cube >= 6) { /* LD5 + RD5 */
			shape += gen(color,cube,0,pentMv,hexMv,0,0,0,0,0,0,0,0,0) + gen(color,cube,tessSpace,0,hexMv,0,0,0,0,0,0,0,0,0);
	}
	if(cube >= 7) { /* BLD5 + BRD5 + TLD5 + TRD5 */
		shape += gen(color,cube,0,pentMv,0,sepMv,0,0,0,0,0,0,0,0)+gen(color,cube,tessSpace,0,0,sepMv,0,0,0,0,0,0,0,0)+
			gen(color,cube,0,pentMv,hexMv,sepMv,0,0,0,0,0,0,0,0)+gen(color,cube,tessSpace,0,hexMv,sepMv,0,0,0,0,0,0,0,0);	
	}
	if(cube >= 8) { /* LEFT COLUMN 0*TessSpace W/ PentMv - RIGHT COL TS W/ 0*PM - ALWAYS MOST RECENT MV ON RIGHT, MIX ALL IN BTWN MV COMBOS & 0 TILL FULL */
		var combos = binaryCombos(2);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape += gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],octMv,0,0,0,0,0,0,0);
			shape += gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],octMv,0,0,0,0,0,0,0);
		}
	}
	if(cube >= 9) {
		var combos = binaryCombos(3);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape += gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],nonMv,0,0,0,0,0,0);
			shape += gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],nonMv,0,0,0,0,0,0);
		}
	}
	if(cube >= 10) {
		var combos = binaryCombos(4);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape += gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],decMv,0,0,0,0,0);
			shape += gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],decMv,0,0,0,0,0);
		}
	}
	if(cube >= 11) {
		var combos = binaryCombos(5);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape += gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],hendMv,0,0,0,0);
			shape += gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],hendMv,0,0,0,0);
		}
	}
	if(cube >= 12) {
		var combos = binaryCombos(6);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape += gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],dodMv,0,0,0);
			shape += gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],dodMv,0,0,0);
		}
	}
	if(cube >= 13) {
		var combos = binaryCombos(7);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape+=gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],mA[bA[j][6]],triMv,0,0);
			shape+=gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],mA[bA[j][6]],triMv,0,0);
		}
	}
	if(cube >= 14) {
		var combos = binaryCombos(8);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape+=gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],mA[bA[j][6]],mA[bA[j][7]],tdcMv,0);
			shape+=gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],mA[bA[j][6]],mA[bA[j][7]],tdcMv,0);
		}
	}
	if(cube >= 15) {
		var combos = binaryCombos(9);
		var bA = genCombos(combos);
		var genArr = [];
		for (let j = 0; j < (combos.length); j++) {
			shape+=gen(color,cube,0,200,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],mA[bA[j][6]],mA[bA[j][7]],mA[bA[j][8]],pdcMv);
			shape+=gen(color,cube,200,0,mA[bA[j][0]],mA[bA[j][1]],mA[bA[j][2]],mA[bA[j][3]],mA[bA[j][4]],mA[bA[j][5]],mA[bA[j][6]],mA[bA[j][7]],mA[bA[j][8]],pdcMv);
		}
	}
	if(color == 'red') {
		document.getElementById('dimCubeR').innerHTML = shape;
	} else {
		document.getElementById('dimCubeL').innerHTML = shape;
	}
}

/******************************************************************************/
/* HELPER FUNCTIONS */
/******************************************************************************/

function clearSvg() {
	document.getElementById('dimCubeR').innerHTML = "";
	document.getElementById('dimCubeL').innerHTML = "";
	document.getElementById('dimCubeR').style.height = "";
	document.getElementById('dimCubeL').style.height = "";
	document.getElementById('dimCubeR').style.width = "";
	document.getElementById('dimCubeL').style.width = "";
	document.getElementById('dimCubeR').style.transform = "scale(1)";
	document.getElementById('dimCubeL').style.transform = "scale(1)";
	document.getElementById('insertBR').innerHTML = "";
}


function binaryCombos(n){
    var result = [];
    for(let i = 0; i < Math.pow(2, n); i++) {
        var combo = [];
        for( let j = 0; j < n; j++) {
            if((i >> j) & 1) {
            	combo.push(1);
            } else {
                combo.push(0);
            }
        }
        result.push(combo);
    }
    return result;
}
function genCombos(combos) {
	for(let i = 0; i < combos.length; i++) {
	    for (let j = 0; j < combos[i].length; j++) {
	    	if (combos[i][j] != 0) combos[i][j] = j + 1;
	    }
	}
	return combos;
}


function viewScale(cube,color) {
	if(color == 'red') return;
	for (let i = 0; i < 2; i++) {
		if(i == 0) {
			var svgId = 'dimCubeR';
			var lft = 500;
		} else {
			var svgId = 'dimCubeL';
			var lft = 510;
		}
		var brStr = "";
		if((cube == 0 || cube == 1) || cube == 2) {
			document.getElementById(svgId).style.transform = "scale(3)";
			document.getElementById(svgId).style.height = "5";
			document.getElementById(svgId).style.width = "150";
			document.getElementById(svgId).style.left = String(lft + 50)+"px";
			if (cube == 0) document.getElementById(svgId).style.left = String(lft + 205)+"px";
			if (cube == 2) {
				document.getElementById(svgId).style.height = "100";
				for(let i = 0; i < 18; i++) brStr += "<br>";
				document.getElementById('insertBR').innerHTML = brStr;
			} else {
				for(let i = 0; i < 1; i++) brStr += "<br>";
				document.getElementById('insertBR').innerHTML = brStr;
			}
		} else if(cube == 3) {
			document.getElementById(svgId).style.transform = "scale(3)";
			document.getElementById(svgId).style.height = "150";
			document.getElementById(svgId).style.width = "150";
			document.getElementById(svgId).style.left = String(lft)+"px";
			for(let i = 0; i < 25; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 4) {
				document.getElementById(svgId).style.transform = "scale(2.75)";
				document.getElementById(svgId).style.height = "175";
				document.getElementById(svgId).style.width = "425";
				document.getElementById(svgId).style.left = String(lft - 250)+"px";
				for(let i = 0; i < 26; i++) brStr += "<br>";
				document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 5) {
			document.getElementById(svgId).style.transform = "scale(1.3)";
			document.getElementById(svgId).style.height = "375";
			document.getElementById(svgId).style.width = "550";
			document.getElementById(svgId).style.left = String(lft - 150)+"px";
			for(let i = 0; i < 27; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 6) {
			document.getElementById(svgId).style.transform = "scale(1.15)";
			document.getElementById(svgId).style.height = "450";
			document.getElementById(svgId).style.width = "1100";
			document.getElementById(svgId).style.left = String(lft - 400)+"px";
			for(let i = 0; i < 28; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 7) {
			document.getElementById(svgId).style.transform = "scale(.75)";
			document.getElementById(svgId).style.height = "800";
			document.getElementById(svgId).style.width = "1100";
			document.getElementById(svgId).style.left = String(lft - 200)+"px";
			for(let i = 0; i < 33; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 8 || cube == 9) {
			document.getElementById(svgId).style.transform = "scale(.5)";
			document.getElementById(svgId).style.height = "900";
			document.getElementById(svgId).style.width = "2450";
			document.getElementById(svgId).style.left = String(lft - 300)+"px";
			for(let i = 0; i < 26; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
			if (cube == 9) {
				document.getElementById(svgId).style.height = "1675";
				document.getElementById(svgId).style.width = "2550";
				document.getElementById(svgId).style.left = String(lft - 350)+"px";
				brStr = "";
				for(let i = 0; i < 47; i++) brStr += "<br>";
				document.getElementById('insertBR').innerHTML = brStr;
			}
		} else if(cube == 10) {
			document.getElementById(svgId).style.transform = "scale(.29)";
			document.getElementById(svgId).style.height = "1900";
			document.getElementById(svgId).style.width = "4500";
			document.getElementById(svgId).style.left = String(lft - 450)+"px";
			for(let i = 0; i < 30; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 11) {
			document.getElementById(svgId).style.transform = "scale(.275)";
			document.getElementById(svgId).style.height = "3450";
			document.getElementById(svgId).style.width = "4650";
			document.getElementById(svgId).style.left = String(lft - 440)+"px";
			for(let i = 0; i < 52; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 12) {
			document.getElementById(svgId).style.transform = "scale(.145)";
			document.getElementById(svgId).style.height = "3900";
			document.getElementById(svgId).style.width = "9050";
			document.getElementById(svgId).style.left = String(lft - 450)+"px";
			for(let i = 0; i < 30; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 13) {
			document.getElementById(svgId).style.transform = "scale(.140)";
			document.getElementById(svgId).style.height = "7000";
			document.getElementById(svgId).style.width = "9350";
			document.getElementById(svgId).style.left = String(lft - 450)+"px";
			for(let i = 0; i < 55; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 14) {
			document.getElementById(svgId).style.transform = "scale(.07)";
			document.getElementById(svgId).style.height = "8000";
			document.getElementById(svgId).style.width = "18150";
			document.getElementById(svgId).style.left = String(lft - 450)+"px";
			for(let i = 0; i < 30; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		} else if(cube == 15) {
			document.getElementById(svgId).style.transform = "scale(.07)";
			document.getElementById(svgId).style.height = "14250";
			document.getElementById(svgId).style.width = "19000";
			document.getElementById(svgId).style.left = String(lft - 450)+"px";
			for(let i = 0; i < 55; i++) brStr += "<br>";
			document.getElementById('insertBR').innerHTML = brStr;
		}
	}
}


function gen(color,cube,tessSpace,pentMv,hexMv,sepMv,octMv,nonMv,decMv,hendMv,dodMv,triMv,tdcMv,pdcMv) {
	var shape = "";
	var lCounter = 0;
	for(let i = 0; i < 41; i +=40) {
		var c1p1 = Number(i);
		var c1p2 = Number(i)+100;
		var x1 = c1p1+tessSpace+hexMv+(sepMv/10)+octMv+(nonMv/10)+decMv+(hendMv/10)+dodMv+(triMv/10)+tdcMv+(pdcMv/10);
		var x2 = c1p2+tessSpace+hexMv+(sepMv/10)+octMv+(nonMv/10)+decMv+(hendMv/10)+dodMv+(triMv/10)+tdcMv+(pdcMv/10);
		var x3 = x1+200, x4 = x2+200;
		var x5 = x1+40, x6 = x2+40;
		var x7 = x3+40, x8 = x4+40;
		var y1 = c1p1+tessSpace+(hexMv/10)+sepMv+(octMv/10)+nonMv+(decMv/10)+hendMv+(dodMv/10)+triMv+(tdcMv/10)+pdcMv;
		var y2 = c1p2+tessSpace+(hexMv/10)+sepMv+(octMv/10)+nonMv+(decMv/10)+hendMv+(dodMv/10)+triMv+(tdcMv/10)+pdcMv;
		var y3 = y1+20, y4 = y2+20;
		var y5 = y1+40, y6 = y2+40;
		var y7 = y3+40, y8 = y4+40;

		if(cube <= 0) { shape += "<circle cx='2' cy='2' r='1' stroke='"+color+"' stroke-width='2' fill='"+color+"' />";break; } /* 0D CUBE */
		if(cube == 1) { shape += "<line x1='0' y1='0' x2='100' y2='0' style='stroke:"+color+";stroke-width:2' />";break; } /* 1D CUBE */
		/* 3D CUBE */
		shape += "<polygon points='"+String(x1)+","+String(y1)+" "+String(x1)+","+String(y2)+" "+
			String(x2)+","+String(y2)+" "+String(x2)+","+String(y1)+"' style='fill:black;fill-opacity:0;stroke:"+color+";stroke-width:2;'/>";
		/* 2D CUBE */
		if(cube == 2) break;
		/* 4D CUBE */
		if(cube >= 4) {
			shape += "<polygon points='"+String(x3)+","+String(y3)+" "+String(x3)+","+String(y4)+" "+
				String(x4)+","+String(y4)+" "+String(x4)+","+String(y3)+"' style='fill:black;fill-opacity:0;stroke:"+color+";stroke-width:2;'/>";
		}
		/* 3D CUBE + */
		if(lCounter < 1 && cube >= 3) { /* CUBE 1 */
			shape+= "<line x1='"+String(x1)+"' y1='"+String(y1)+"' x2='"+String(x5)+"' y2='"+String(y5)+"' style='stroke:"+color+";stroke-width:2' />"; /*TL*/
			shape+= "<line x1='"+String(x1)+"' y1='"+String(y2)+"' x2='"+String(x5)+"' y2='"+String(y6)+"' style='stroke:"+color+";stroke-width:2' />"; /*BL*/
			shape+= "<line x1='"+String(x2)+"' y1='"+String(y2)+"' x2='"+String(x6)+"' y2='"+String(y6)+"' style='stroke:"+color+";stroke-width:2' />"; /*BR*/
			shape+= "<line x1='"+String(x2)+"' y1='"+String(y1)+"' x2='"+String(x6)+"' y2='"+String(y5)+"' style='stroke:"+color+";stroke-width:2' />"; /*TR*/
			/* 4D CUBE */
			if(cube >= 4) { /* CUBE 2 */
				shape+= "<line x1='"+String(x3)+"' y1='"+String(y3)+"' x2='"+String(x7)+"' y2='"+String(y7)+"' style='stroke:"+color+";stroke-width:2' />"; /*TL*/
				shape+= "<line x1='"+String(x3)+"' y1='"+String(y4)+"' x2='"+String(x7)+"' y2='"+String(y8)+"' style='stroke:"+color+";stroke-width:2' />"; /*BL*/
				shape+= "<line x1='"+String(x4)+"' y1='"+String(y4)+"' x2='"+String(x8)+"' y2='"+String(y8)+"' style='stroke:"+color+";stroke-width:2' />"; /*BR*/
				shape+= "<line x1='"+String(x4)+"' y1='"+String(y3)+"' x2='"+String(x8)+"' y2='"+String(y7)+"' style='stroke:"+color+";stroke-width:2' />"; /*TR*/
			}
		}
		if(cube >= 4) { /* DRAWS LINES CONNECTING HIGHER DIMENSIONS – ADD A ''-Mv IN THE VAIN OF SEP/HEX AND COPY HOW THEY WERE EXECUTED */
			for (let j = 0; j < cube-3; j++) {
				if (j == 0) { /* 4D CUBE */
					var mvX = 200, mvY = 20;
				} else if (j == 1) { /* 5D CUBE */
					var mvX = pentMv, mvY = pentMv;
				} else if (j == 2) { /* 6D CUBE */
					var mvX = -hexMv, mvY = (-hexMv/10);
				} else if (j == 3) { /* 7D CUBE */
					var mvX = (-sepMv/10), mvY = -sepMv;
				} else if (j == 4) { /* 8D CUBE */
					var mvX = -octMv, mvY = (-octMv/10);
				} else if (j == 5) { /* 9D CUBE */
					var mvX = (-nonMv/10), mvY = -nonMv;
				} else if (j == 6) { /* 10D CUBE */
					var mvX = -decMv, mvY = (-decMv/10);
				} else if (j == 7) { /* 11D CUBE */
					var mvX = (-hendMv/10), mvY = -hendMv;
				} else if (j == 8) { /* 12D CUBE */
					var mvX = -dodMv, mvY = (-dodMv/10);
				} else if (j == 9) { /* 13D CUBE */
					var mvX = (-triMv/10), mvY = -triMv;
				} else if (j == 10) { /* 14D CUBE */
					var mvX = -tdcMv, mvY = (-tdcMv/10);
				} else if (j == 11) { /* 15D CUBE */
					var mvX = (-pdcMv/10), mvY = -pdcMv;
				}
				shape+="<line x1='"+String(x1)+"' y1='"+String(y1)+"' x2='"+String(x1+mvX)+"' y2='"+String(y1+mvY)+"' style='stroke:"+color+";stroke-width:2' />"; /*TL*/
				shape+="<line x1='"+String(x1)+"' y1='"+String(y2)+"' x2='"+String(x1+mvX)+"' y2='"+String(y2+mvY)+"' style='stroke:"+color+";stroke-width:2' />"; /*BL*/
				shape+="<line x1='"+String(x2)+"' y1='"+String(y2)+"' x2='"+String(x2+mvX)+"' y2='"+String(y2+mvY)+"' style='stroke:"+color+";stroke-width:2' />"; /*BR*/
				shape+="<line x1='"+String(x2)+"' y1='"+String(y1)+"' x2='"+String(x2+mvX)+"' y2='"+String(y1+mvY)+"' style='stroke:"+color+";stroke-width:2' />"; /*TR*/
				if (j > 0) {
					shape+="<line x1='"+String(x3)+"' y1='"+String(y3)+"' x2='"+String(x3+mvX)+"' y2='"+String(y3+mvY)+"' style='stroke:"+color+";stroke-width:2' />";/*TL*/
					shape+="<line x1='"+String(x3)+"' y1='"+String(y4)+"' x2='"+String(x3+mvX)+"' y2='"+String(y4+mvY)+"' style='stroke:"+color+";stroke-width:2' />";/*BL*/
					shape+="<line x1='"+String(x4)+"' y1='"+String(y4)+"' x2='"+String(x4+mvX)+"' y2='"+String(y4+mvY)+"' style='stroke:"+color+";stroke-width:2' />";/*BR*/
					shape+="<line x1='"+String(x4)+"' y1='"+String(y3)+"' x2='"+String(x4+mvX)+"' y2='"+String(y3+mvY)+"' style='stroke:"+color+";stroke-width:2' />";/*TR*/
				}
			}
		}
		lCounter++;
	}
	return shape;
}
