// Author: Jordan Randleman

/******************************************************************************/
// INFO FUNCTION
/******************************************************************************/

function aboutDimensions() {
	alert("Calculate the number of smaller spatial dimensional hypercubes (red) inside"+ 
		" another larger spatial dimensional hypercube (green). \n\nFor example: 0D = point,"+
		" 1D = line, 2D = face, 3D = cube, 4D = tesseract, etc. \n\nTherefore,"+
		" 6 would be returned if a 2D inner hypercube and a 3D outer"+
		" hypercube were entered (as there are 6 faces in a 3D cube).");
}

/******************************************************************************/
// INITIALIZATION FUNCTION
/******************************************************************************/

function entrBtn(event) {if((event.keyCode == '13' || event.keyCode == '38') || event.keyCode == '40') startDim();}

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
		document.getElementById("demo21").innerHTML = "Inner hypercubes cannot be larger than the outer ones!";
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
			var part1 = dimin+'D hypercube'+plural;
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
			var part2 = dimout+'D hypercube.';
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

function dynamicDim(cube) {
	/* CREATECUBE FUNCTION */
	var dynamicString = 'var shape;\nfunction createCube(cube,color) {\nviewScale(cube,color);';
	var shapeLog1 = 'shape = gen(color,cube,0,200';
	for(let h1 = cube - 5; h1 > 0; h1--) shapeLog1 += ',0';
	dynamicString += '\n'+shapeLog1+');';
	if(cube >= 5) {
		var shapeLog2 = 'if (cube >= 5) {\nshape += gen(color,cube,200,0';
		for(let h2 = cube - 5; h2 > 0; h2--) shapeLog2 += ',0';
		dynamicString += '\n'+shapeLog2+');\n}';
	}
	/* MAKE mA ARRAY */
	var num = cube - 5, evDim = 550, odDim = 387.5, mA = [0];
	for(let i = 0; i < num; i++) {
		if(i % 2 == 0) {
			mA.push(evDim*Math.pow(2,i/2));
		} else {
			mA.push(odDim*Math.pow(2,(i-1)/2));
		}
	}
	dynamicString += '\nvar mA = ['+mA+'];';
	if(cube >= 6) {
		var shapeLog4 = 'shape += gen(color,cube,0,200,mA[1]', shapeLog5 = 'shape += gen(color,cube,200,0,mA[1]';
		for(let h3 = cube - 6; h3 > 0; h3--) {
			shapeLog4 += ',0';
			shapeLog5 += ',0';
		}
		dynamicString += '\nif(cube >= 6) {\n'+shapeLog4+');\n'+shapeLog5+');\n}';
	}
	if(cube >= 7) {
		for(let j = 7; j <= cube; j++) {
			dynamicString += '\nif(cube >= '+j+') {\nvar combos = binaryCombos('+String(j-6)+');\nvar bA = genCombos(combos);\nvar genArr = [];';
			var genOne = 'shape += gen(color,cube,0,200', genTwo = 'shape += gen(color,cube,200,0';
			for(let k = 0; k < j - 6; k++) {
				genOne += ',mA[bA[k]['+String(k)+']]';
				genTwo += ',mA[bA[k]['+String(k)+']]';
			}
			genOne += ',mA['+String(j-5)+']';
			genTwo += ',mA['+String(j-5)+']';
			for(let l = 0; l < cube-j; l++) {
				genOne += ',0';
				genTwo += ',0';
			}
			dynamicString += '\nfor (let k = 0; k < (combos.length); k++) {\n'+genOne+');\n'+genTwo+');\n'+'}'+'\n'+'}';
		}
	}
	dynamicString += '\nif(color == "red") {\ndocument.getElementById("dimCubeR").innerHTML = shape;\n} else {'+
		'\ndocument.getElementById("dimCubeL").innerHTML = shape;\n}\n}';
	
	/* GEN FUNCTION */
	
	dynamicString += '\n\nfunction gen(color,cube,tessSpace,pentMv';
	var genArgs = [];
	for(let m = 0; m < mA.length - 1; m++) {
		dynamicString += ',dim'+String(m);
		genArgs.push('dim'+String(m));
	}
	dynamicString += ') {\nvar shape = "", lCounter = 0;\nfor(let i = 0; i < 41; i +=40) {\nvar c1p1 = Number(i), c1p2 = Number(i)+100;';
	var x1Var = 'var x1 = c1p1+tessSpace', x2Var = 'var x2 = c1p2+tessSpace';
	for(let n = 0; n < genArgs.length; n++) {
		if(n % 2 == 0) {
			x1Var += '+'+String(genArgs[n]);
			x2Var += '+'+String(genArgs[n]);
		} else {
			x1Var += '+('+String(genArgs[n])+'/10)';
			x2Var += '+('+String(genArgs[n])+'/10)';
		}
	}
	dynamicString += '\n'+x1Var+';\n'+x2Var+';\nvar x3 = x1+200, x4 = x2+200, x5 = x1+40, x6 = x2+40, x7 = x3+40, x8 = x4+40;';
	var y1Var = 'var y1 = c1p1+tessSpace', y2Var = 'var y2 = c1p2+tessSpace';
	for(let o = 0; o < genArgs.length; o++) {
		if(o % 2 != 0) {
			y1Var += '+'+String(genArgs[o]);
			y2Var += '+'+String(genArgs[o]);
		} else {
			y1Var += '+('+String(genArgs[o])+'/10)';
			y2Var += '+('+String(genArgs[o])+'/10)';
		}
	}
	dynamicString += '\n'+y1Var+';\n'+y2Var+';\nvar y3 = y1+20, y4 = y2+20, y5 = y1+40, y6 = y2+40, y7 = y3+40, y8 = y4+40;';
	dynamicString += '\nif(cube <= 0){shape += cube0(color);break;}\nif(cube == 1){shape += cube1(color);break;}\nshape += cube3(x1,x2,y1,y2,color);'+
		'\nif(cube == 2) break;\nif(cube >= 4) shape += cube4(x3,x4,y3,y4,color);';
	dynamicString += '\nif(lCounter < 1 && cube >= 3) {\nshape += cube13(x1,x2,x5,x6,y1,y2,y5,y6,color);\nif(cube >= 4) shape+= cube44(x3,x4,x7,x8,y3,y4,y7,y8,color);\n}';
	dynamicString += '\nif(cube >= 4) {\nfor (let j = 0; j < cube-3; j++) {\nif (j == 0) {\nvar mvX = 200, mvY = 20;\n} else if (j == 1) {\nvar mvX = pentMv, mvY = pentMv;';
	for(let p = 2; p < cube-3; p++) {
		dynamicString += '\n} else if (j == '+p+') {';
		if(p % 2 == 0) {
			dynamicString += '\nvar mvX = -'+genArgs[p-2]+', mvY = (-'+genArgs[p-2]+'/10);';
		} else {
			dynamicString += '\nvar mvX = (-'+genArgs[p-2]+'/10), mvY = -'+genArgs[p-2]+';';
		}
	}
	dynamicString += '\n}\nshape += formCube(x1,x2,y1,y2,mvX,mvY,color);\nif (j > 0) shape += formCube2(x3,x4,y3,y4,mvX,mvY,color);\n}\n}\nlCounter++;\n}\nreturn shape;\n}';
	document.getElementById('dynamicScript').innerHTML = dynamicString;
}

/******************************************************************************/
/* HELPER FUNCTIONS */
/******************************************************************************/

function clearSvg() {
	document.getElementById('dimCubeR').innerHTML = "";
	document.getElementById('dimCubeL').innerHTML = "";
	document.getElementById('dimCubeR').style.height = "1";
	document.getElementById('dimCubeL').style.height = "1";
	document.getElementById('dimCubeR').style.width = "1";
	document.getElementById('dimCubeL').style.width = "1";
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
		if((cube == 0 || cube == 1) || (cube == 2 || cube == 3)){
			document.getElementById(svgId).style.transform = "scale(4)";
			document.getElementById(svgId).style.left = String(lft - 50)+"px";
			if(cube == 0 || cube == 1) {
				document.getElementById(svgId).style.height = "5";
				document.getElementById(svgId).style.width = "100";
				for(let i = 0; i < 1; i++) brStr += "<br>";
				document.getElementById('insertBR').innerHTML = brStr;
			} else if(cube == 2 || cube == 3) {
				document.getElementById(svgId).style.width = "150";
				if(cube == 2) {
					document.getElementById(svgId).style.height = "100";
					for(let i = 0; i < 25; i++) brStr += "<br>";
					document.getElementById('insertBR').innerHTML = brStr;
				} else {
					document.getElementById(svgId).style.height = "150";
					for(let i = 0; i < 35; i++) brStr += "<br>";
					document.getElementById('insertBR').innerHTML = brStr;
				}
			}
		} else {
			/* SCALE */
			var size = cube;
			if(size % 2 != 0) size--;
			size = Math.pow(2,(6-size)/2);
			/* HEIGHT / WIDTH */
			var height = 175, width = 450;
			for(let j = cube - 1; j > 3; j--) {
				if(j % 2 == 0) {
					height += 100*Math.pow(2,(j-2)/2);
					width += evWidth(j);
				} else {
					height += 100*Math.pow(2,(j-7)/2);
					width += 1100*Math.pow(2,(j-7)/2);
				}
			}
			if(cube % 2 == 0) {
				for(let i = 0; i < 20+(cube-4); i++) brStr += "<br>";
			} else {
				for(let i = 0; i < 43+(cube-5); i++) brStr += "<br>";
			}			
			document.getElementById('insertBR').innerHTML = brStr;
			if(cube == 4) {
				document.getElementById(svgId).style.left = String(lft - 120)+"px";
			} else {
				document.getElementById(svgId).style.left = String(lft - 350)+"px";
			}
			document.getElementById(svgId).style.transform = "scale("+String(size)+")";
			document.getElementById(svgId).style.height = String(height);
			document.getElementById(svgId).style.width = String(width);
		}
	}
}


function cube0(color){return "<circle cx='2' cy='2' r='1' stroke='"+color+"' stroke-width='2' fill='"+color+"' />";}
function cube1(color){return "<line x1='0' y1='0' x2='100' y2='0' style='stroke:"+color+";stroke-width:2' />";}
function cube3(x1,x2,y1,y2,color){
	return "<polygon points='"+String(x1)+","+String(y1)+" "+String(x1)+","+String(y2)+" "+String(x2)+","+String(y2)+" "+String(x2)+","+String(y1)+
		"' style='fill:black;fill-opacity:0;stroke:"+color+";stroke-width:2;'/>";
}
function cube4(x3,x4,y3,y4,color){
	return "<polygon points='"+String(x3)+","+String(y3)+" "+String(x3)+","+String(y4)+" "+String(x4)+","+String(y4)+" "+String(x4)+","+String(y3)+
		"' style='fill:black;fill-opacity:0;stroke:"+color+";stroke-width:2;'/>";
}
function cube13(x1,x2,x5,x6,y1,y2,y5,y6,color) {
	return "<line x1='"+String(x1)+"' y1='"+String(y1)+"' x2='"+String(x5)+"' y2='"+String(y5)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x1)+"' y1='"+String(y2)+"' x2='"+String(x5)+"' y2='"+String(y6)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x2)+"' y1='"+String(y2)+"' x2='"+String(x6)+"' y2='"+String(y6)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x2)+"' y1='"+String(y1)+"' x2='"+String(x6)+"' y2='"+String(y5)+"' style='stroke:"+color+";stroke-width:2' />";
}
function cube44(x3,x4,x7,x8,y3,y4,y7,y8,color) {
	return "<line x1='"+String(x3)+"' y1='"+String(y3)+"' x2='"+String(x7)+"' y2='"+String(y7)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x3)+"' y1='"+String(y4)+"' x2='"+String(x7)+"' y2='"+String(y8)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x4)+"' y1='"+String(y4)+"' x2='"+String(x8)+"' y2='"+String(y8)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x4)+"' y1='"+String(y3)+"' x2='"+String(x8)+"' y2='"+String(y7)+"' style='stroke:"+color+";stroke-width:2' />";
}
function formCube(x1,x2,y1,y2,mvX,mvY,color){
	return "<line x1='"+String(x1)+"' y1='"+String(y1)+"' x2='"+String(x1+mvX)+"' y2='"+String(y1+mvY)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x1)+"' y1='"+String(y2)+"' x2='"+String(x1+mvX)+"' y2='"+String(y2+mvY)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x2)+"' y1='"+String(y2)+"' x2='"+String(x2+mvX)+"' y2='"+String(y2+mvY)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x2)+"' y1='"+String(y1)+"' x2='"+String(x2+mvX)+"' y2='"+String(y1+mvY)+"' style='stroke:"+color+";stroke-width:2' />";
}
function formCube2(x3,x4,y3,y4,mvX,mvY,color){
	return "<line x1='"+String(x3)+"' y1='"+String(y3)+"' x2='"+String(x3+mvX)+"' y2='"+String(y3+mvY)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x3)+"' y1='"+String(y4)+"' x2='"+String(x3+mvX)+"' y2='"+String(y4+mvY)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x4)+"' y1='"+String(y4)+"' x2='"+String(x4+mvX)+"' y2='"+String(y4+mvY)+"' style='stroke:"+color+";stroke-width:2' />"+
		"<line x1='"+String(x4)+"' y1='"+String(y3)+"' x2='"+String(x4+mvX)+"' y2='"+String(y3+mvY)+"' style='stroke:"+color+";stroke-width:2' />";
}


function evWidth(num) {
	var shift = (num+2)/2;
	if(shift % 2 != 0) shift--;
	return 100*factor((shift-2)/2);
}