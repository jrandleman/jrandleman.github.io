/* Author: Jordan Randleman */

/******************************************************************************/
/* INFO FUNCTION */
/******************************************************************************/

function aboutDimensions() {
	alert("Calculate the number of smaller spatial dimensional hypercubes (red) inside"+ 
		" another larger spatial dimensional hypercube (green). \n\nFor example: 0D = point,"+
		" 1D = line, 2D = face, 3D = cube, 4D = tesseract, etc. \n\nTherefore,"+
		" 6 would be returned if a 2D inner hypercube and a 3D outer"+
		" hypercube were entered (as there are 6 faces in a 3D cube).");
}

/******************************************************************************/
/* INITIALIZATION FUNCTION */
/******************************************************************************/

const MAXIMUMDIM = 11; /* DIMENSION NO. ANIMATION CAP */

function entrBtn(event,elem,color) {if((event.keyCode == '13' || event.keyCode == '38') || event.keyCode == '40') dimValidity(elem,color);}
function initAnimation(flag) {
	if(flag == 1) dynamicDim(MAXIMUMDIM);
	initLoneFunction();
	checkDimVal(document.getElementById('quantity2'),'lime');
	checkDimVal(document.getElementById('quantity1'),'red');
};

function startDim() {	
	var dimin = document.getElementById("quantity1").value; 
	var dimout = document.getElementById("quantity2").value;
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
}


function initLoneFunction() {
	var cube = MAXIMUMDIM;
	var loneString = 'function loneLineShape(flag) {\nif(flag == 0) {\nvar cube = document.getElementById("quantity2").value;\n} else {\nvar cube = flag;\n}\n'+
		'var oneLineArr = [], polygonArray = getPolygonArray(cube), connectionArr = cleanArrayNoNul(getConnectionArray(cube)), iOne = 3, iTwo = 7, ifI = [iOne,iTwo];\n'+
		'for(let z = 0; z < ((Math.pow(2,cube - 2) / 2) - 1); z++) {\n'+
		'iOne += 8;\niTwo += 8;\nifI.push(iOne,iTwo);\n}\n/* CONNECT POINTS AT END */\nfor(let i = 0; i < Math.pow(2,cube); i++) {\noneLineArr.push(polygonArray[i]);'+
		'\nfor(let j = 0; j < cube; j++) {\noneLineArr.push(polygonArray[connectionArr[i][j]]);\noneLineArr.push(polygonArray[i]);\n}\n';
	for(let i = 0; i < Math.pow(2,cube - 2); i += 8) {
		loneString += 'if(i == ifI['+i+']) oneLineArr.push(polygonArray[i - 3]);\n';
		loneString += 'if(i == ifI['+(i+1)+']) {\noneLineArr.push(polygonArray[i - 3]);\noneLineArr.push(polygonArray[i - 7]);\n}\n'+
			'if(i == ifI['+(i+2)+']) oneLineArr.push(polygonArray[i - 3]);\n'+
			'if(i == ifI['+(i+3)+']) {\noneLineArr.push(polygonArray[i - 3]);\noneLineArr.push(polygonArray[i - 11]);\noneLineArr.push(polygonArray[i - 15]);\n}\n'+
			'if(i == ifI['+(i+4)+']) oneLineArr.push(polygonArray[i - 3]);\n'+
			'if(i == ifI['+(i+5)+']) {\noneLineArr.push(polygonArray[i - 3]);\noneLineArr.push(polygonArray[i - 7]);\n}\n'+
			'if(i == ifI['+(i+6)+']) oneLineArr.push(polygonArray[i - 3]);\n'+
			'if(i == ifI['+(i+7)+']){\noneLineArr.push(polygonArray[i-3]);\noneLineArr.push(polygonArray[i-11]);\noneLineArr.push(polygonArray[i - 27]);\n';
		if(((i + 8) / 8) % 2 == 0) {
			loneString += 'oneLineArr.push(polygonArray[i - ifI[15]]);\n'; /* ifI[A1] */
			if(((i + 8) / 4) % Math.pow(2,3) == 0) {
				loneString += 'oneLineArr.push(polygonArray[i - ifI[31]]);\n'; /* ifI[A2] => A2 = ((A1*2) + 1) */
				if(((i + 8) / 4) % Math.pow(2,4) == 0) {
					loneString += 'oneLineArr.push(polygonArray[i - ifI[63]]);\n';
					if(((i + 8) / 4) % Math.pow(2,5) == 0) {
						loneString += 'oneLineArr.push(polygonArray[i - ifI[127]]);\n';
						if(((i + 8) / 4) % Math.pow(2,6) == 0) {
							loneString += 'oneLineArr.push(polygonArray[i - ifI[255]]);\n';
						}
					}
				}
			}
		}
		loneString += '}\n';
	}
	loneString += '}\n\nif(flag != 0) {\nreturn cleanArrayNoNul(oneLineArr);\n} else {\ninsertShape(cleanArrayNoNul(oneLineArr),cube);\n}\n}\n';
	document.getElementById('soloScript').innerHTML = loneString;
	loneLineShape(0);
}


function genPtCombos(pt,dim) {
	var pointNum = getTotalPoints(), ptClone = pt;
	while(ptClone % 4 != 0) ptClone--;
	var face = (ptClone / 4); /* FIRST FACE = 0; */
	var ptConnections = [], countArr = [], i = 0;
	/* INIT COUNTER ARRAY */
	for(let counter = 0; counter <= MAXIMUMDIM; counter++) countArr.push(0);
	/* DETERMINE WHICH PT COMBOS TO MAKE PER FACE WITH EACH COUNTER */
	while(i < face) {
		for(let j = 3; j <= dim; j++) countArr[j] += Math.pow(2,(3 - j));
		i++;
	}
	/* DETERMINE THE ALL OF THE POINTS THE CURRENT POINT WILL CONNECT TO */
	for(let k = 3; k <= dim; k++) ptConnections = pushDimPt(ptConnections,pt,countArr[k],Math.pow(2,(k - 1)));
	/* PUSH POINT TO THE LEFT AND RIGHT OF CURRENT POINT */
	var ptIdx = pointNum[face].indexOf(pt);
	if(ptIdx == 0) {
		ptConnections.push(pointNum[face][1]);
		ptConnections.push(pointNum[face][3]);
	} else if(ptIdx == 3) {
		ptConnections.push(pointNum[face][0]);
		ptConnections.push(pointNum[face][2]);
	} else {
		ptConnections.push(pointNum[face][ptIdx-1]);
		ptConnections.push(pointNum[face][ptIdx+1]);
	}
	/* CONVERT ANY SINGLE NUMBER POINT COMBOS INTO A SINGLE-INT ARRAY */
	var editedPtConnections = [];
	for(let j = 0; j < ptConnections.length; j++) {
		if(typeof ptConnections[j] === 'number') {
			editedPtConnections.push([ptConnections[j]]);
		} else if(typeof ptConnections[j] === 'object') {
			editedPtConnections.push(ptConnections[j]);
		}
	}
	return editedPtConnections;
}

/******************************************************************************/
/* DYNAMIC DIMENSION DRAWING */
/******************************************************************************/

function dynamicDim(cube) {
	/* CREATEFACES FUNCTION */
	var dynamicString = 'function createFaces(cube) {\nvar shape = [];';
	var shapeLog1 = 'shape = gen(shape,cube,0,200';
	for(let h1 = cube - 5; h1 > 0; h1--) shapeLog1 += ',0';
	dynamicString += '\n'+shapeLog1+');';
	if(cube >= 5) {
		var shapeLog2 = 'if (cube >= 5) {\nshape = gen(shape,cube,200,0';
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
		var shapeLog4 = 'shape = gen(shape,cube,0,200,mA[1]', shapeLog5 = 'shape = gen(shape,cube,200,0,mA[1]';
		for(let h3 = cube - 6; h3 > 0; h3--) {
			shapeLog4 += ',0';
			shapeLog5 += ',0';
		}
		dynamicString += '\nif(cube >= 6) {\n'+shapeLog4+');\n'+shapeLog5+');\n}';
	}
	if(cube >= 7) {
		for(let j = 7; j <= cube; j++) {
			dynamicString += '\nif(cube >= '+j+') {\nvar combos = binaryCombos('+String(j-6)+');\nvar bA = genCombos(combos);';
			var genOne = 'shape = gen(shape,cube,0,200', genTwo = 'shape = gen(shape,cube,200,0';
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
	dynamicString += '\nreturn shape;\n}';
	
	/* GEN FUNCTION */
	
	dynamicString += '\n\nfunction gen(shape,cube,tessSpace,pentMv';
	var genArgs = [];
	for(let m = 0; m < mA.length - 1; m++) {
		dynamicString += ',dim'+String(m);
		genArgs.push('dim'+String(m));
	}
	dynamicString += ') {\nfor(let i = 0; i < 41; i +=40) {\nvar c1p1 = Number(i), c1p2 = Number(i)+100;';
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
	
	dynamicString += '\nshape.push((String(x1)+","+String(y1)),(String(x1)+","+String(y2)),(String(x2)+","+String(y2)),(String(x2)+","+String(y1)));\n'+
		'if(cube >= 4) shape.push((String(x3)+","+String(y3)),(String(x3)+","+String(y4)),(String(x4)+","+String(y4)),(String(x4)+","+String(y3)));';
	dynamicString += '\n}\nreturn shape;\n}';
	document.getElementById('dynamicScript').innerHTML = dynamicString;
}

/******************************************************************************/
/* HELPER FUNCTIONS */
/******************************************************************************/

var highCount = 0;

function checkDimVal(elem,color) {
	startDim();
	viewScale(elem.value,color);
	highCount = 0;
	if(color == 'lime') {
		document.getElementById("anim-to-"+elem.value+"SL").beginElement();
	} else {
		document.getElementById("anim-to-"+elem.value+"SR").beginElement();
	}
}


function dimValidity(elem,color) {
	var dimin = document.getElementById("quantity1").value; 
	var dimout = document.getElementById("quantity2").value;
	if (dimin.split('')[0] == '-' || dimout.split('')[0] == '-') {
		document.getElementById("demo21").innerHTML = "As 'negative space' does not exist,"+
			" neither do 'negative spatial dimensions'. Try positive numbers instead!";
		clearSvg();
		highCount = 1;
		return;
	} else if (Number(dimin) > Number(dimout)) {
		document.getElementById("demo21").innerHTML = "Inner hypercubes cannot be larger than the outer ones!";
		clearSvg();
		highCount = 1;
		return;
	} else if(Number(dimin) > MAXIMUMDIM || Number(dimout) > MAXIMUMDIM) {
		clearSvg();
		startDim();
		highCount = 1;
		return;
	} else {
		if(highCount == 1) {
			initAnimation(0);
			highCount = 0;
		} else {
			checkDimVal(elem,color);
			return;
		}

	}
}


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


function insertShape(shapeArrayArg,cube) {
	var maxPtNum = loneLineShape(MAXIMUMDIM).length, animStrL = '', animStrR = '';
	var animArrL = ['2,1.5','1.33,1.83','1,2.5','1.33,3.16','2,3.5','2.66,3.16','3,2.5','2.66,1.83','2,1.5'];
	var animArrR = ['2,1.5','1.33,1.83','1,2.5','1.33,3.16','2,3.5','2.66,3.16','3,2.5','2.66,1.83','2,1.5'];
	while(animArrL.length < maxPtNum) {
		animArrL.push('2,1.5');
		animArrR.push('2,1.5');
	}
	animStrL += '<animate begin="indefinite" fill="freeze" id="anim-to-0SL" attributeName="points" dur="1s" to="'+animArrL.join(' ')+'" />\n';
	animStrR += '<animate begin="indefinite" fill="freeze" id="anim-to-0SR" attributeName="points" dur="1s" to="'+animArrR.join(' ')+'" />\n';

	var shapeArray = [], lastElem1 = shapeArrayArg[shapeArrayArg.length - 1];
	for(let i = 0; i < shapeArrayArg.length; i++) shapeArray.push(shapeArrayArg[i]);
	while(shapeArray.length < maxPtNum) shapeArray.push(lastElem1)
	for(let j = 1; j <= MAXIMUMDIM; j++) {
		var cleanShapeArr2 = loneLineShape(j), shapeArr2 = [], lastElem2 = cleanShapeArr2[cleanShapeArr2.length - 1];
		for(let k = 0; k < cleanShapeArr2.length; k++) shapeArr2.push(cleanShapeArr2[k]);
		while(shapeArr2.length < maxPtNum) shapeArr2.push(lastElem2)
		animStrL += '<animate begin="indefinite" fill="freeze" id="anim-to-'+j+'SL" attributeName="points" dur="1s" to="'+shapeArr2.toString()+'" />\n';
		animStrR += '<animate begin="indefinite" fill="freeze" id="anim-to-'+j+'SR" attributeName="points" dur="1s" to="'+shapeArr2.toString()+'" />\n';
	}
	document.getElementById('dimCubeL').innerHTML = '<polygon points="'+shapeArray.toString()+
		'" style="fill:black;fill-opacity:0;stroke:lime;stroke-width:2;">'+animStrL+'</polygon>';
	document.getElementById('dimCubeR').innerHTML = '<polygon points="'+shapeArray.toString()+
		'" style="fill:black;fill-opacity:0;stroke:red;stroke-width:2;">'+animStrR+'</polygon>';
}


function cleanArrayNoNul(oldArr) {
	var clearedArray = [];
	for(let i = 0, oldArrLen = oldArr.length; i < oldArrLen; i++) if(!isEmpty(oldArr[i])) clearedArray.push(oldArr[i]);
	return clearedArray;
}
function isEmpty(object) { for(var prop in object) { return false; } return true; }


function binaryCombos(n){
    var result = [];
    for(let i = 0; i < Math.pow(2, n); i++) {
        var combo = [];
        for(let j = 0; j < n; j++) ((i >> j) & 1) ? combo.push(1) : combo.push(0);
        result.push(combo);
    }
    return result;
}


function genCombos(combos) {
	for(let i = 0; i < combos.length; i++) {
	    for(let j = 0; j < combos[i].length; j++) if(combos[i][j] != 0) combos[i][j] = j + 1;
	}
	return combos;
}


function pushDimPt(pArr,point,count,shift) {
	if(Math.floor(count) % 2 == 0) {
		pArr.push(point + shift);
	} else {
		if(point - shift > 0) {
			pArr.push(point - shift);
		} else {
			return pArr;
		}
	}
	return pArr;
}


function getTotalPoints() {
	var pNums = [], dim = (MAXIMUMDIM + 1); /* "dim + 1" DETERMINES HOW MANY POINTS WILL BE GENERATED */
	for(let q = 0; q <= Math.pow(2,dim) - 4; q += 4) {
		var tempArr = [];
		for(let r = q; r < q + 4; r++) tempArr.push(r);
		pNums.push([tempArr]);
	}
	return pNums;
}


function getConnectionArray(cube) {
	var combos = [];
	for(let q = 0; q <= Math.pow(2,cube); q++) combos.push(genPtCombos(q,cube));
	return combos;
}


function getPolygonArray(cube) { /* parses back & front faces */
	if(cube <= 3) {
		return createFaces(cube);
	} else {
		var faceArray = createFaces(cube);
		for(let i = 0; i < Math.pow(2,cube - 2); i += 4) {
			var temp = faceArray[i + 1];
			faceArray[i + 1] = faceArray[i + 3];
			faceArray[i + 3] = temp;
		}
		return createFaces(cube);
	}
}

/******************************************************************************/
/* SIZE FUNCTIONS */
/******************************************************************************/

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
		var brStr = "", redSize, redHi, redWi;
		var curHi = Number(document.getElementById('dimCubeL').style.height.split('').splice(0,document.getElementById('dimCubeL').style.height.split('').length-2).join(''));
		var curWi = Number(document.getElementById('dimCubeL').style.width.split('').splice(0,document.getElementById('dimCubeL').style.width.split('').length-2).join(''));
		var shapeSizeArr = document.getElementById('dimCubeL').style.transform.split('');
		var curSize = Number(shapeSizeArr.splice(shapeSizeArr.indexOf('(') + 1,shapeSizeArr.length - shapeSizeArr.indexOf('(') -2).join(''));
		document.getElementById(svgId).style.transition = "all .1s ease-in-out";

		if((cube == 0 || cube == 1) || (cube == 2 || cube == 3)){
			redSize = 4;
			if(4 > curSize) {
				setTimeout(function() { document.getElementById('dimCubeL').style.transform = "scale(4)" }, 1000);
			} else {
				document.getElementById('dimCubeL').style.transform = "scale(4)";
			}
			document.getElementById(svgId).style.left = String(lft - 50)+"px";
			if(cube == 0) {
				redHi = 10;
				redWi = 100;
				if(10 > curHi || 100 > curWi) {
					document.getElementById(svgId).style.height = String("10");
					document.getElementById(svgId).style.width = String("100");
				} else {
					setTimeout(function() { document.getElementById(svgId).style.height = String("10") }, 1000);
					setTimeout(function() { document.getElementById(svgId).style.width = String("100") }, 1000);
				}
				for(let i = 0; i < 1; i++) brStr += "<br>";
				document.getElementById('insertBR').innerHTML = brStr;
			} else if((cube == 2 || cube == 1) || cube == 3) {
				redWi = 150;
				if(150 > curWi) {
					document.getElementById(svgId).style.width = String("150");
				} else {
					setTimeout(function() { document.getElementById(svgId).style.width = String("150") }, 1000);
				}
				if(cube == 2) {
					redHi = 100;
					if(100 > curHi) {
						document.getElementById(svgId).style.height = String("100");
					} else {
						setTimeout(function() { document.getElementById(svgId).style.height = String("100") }, 1000);
					}
					for(let i = 0; i < 25; i++) brStr += "<br>";
					document.getElementById('insertBR').innerHTML = brStr;
				} else {
					redHi = 150;
					if(150 > curHi) {
						document.getElementById(svgId).style.height = String("150");
					} else {
						setTimeout(function() { document.getElementById(svgId).style.height = String("150") }, 1000);
					}
					for(let i = 0; i < 35; i++) brStr += "<br>";
					document.getElementById('insertBR').innerHTML = brStr;
				}
			}
		} else {
			var size = cube, height = 175, width = 450;
			if(size % 2 != 0) size--;
			size = Math.pow(2,(6-size)/2);
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
			redSize = size;
			redHi = height;
			redWi = width;
			if(size > curSize) {
				setTimeout(function() { document.getElementById('dimCubeL').style.transform = "scale("+String(size)+")" }, 1000);
			} else {
				document.getElementById('dimCubeL').style.transform = "scale("+String(size)+")";
			}
			if(cube == 4) {
				document.getElementById(svgId).style.left = String(lft - 120)+"px";
			} else {
				document.getElementById(svgId).style.left = String(lft - 350)+"px";
			}
			if(height > curHi || width > curWi) {
				document.getElementById(svgId).style.height = String(height);
				document.getElementById(svgId).style.width = String(width);
			} else {
				setTimeout(function() { document.getElementById(svgId).style.height = String(height) }, 1000);
				setTimeout(function() { document.getElementById(svgId).style.width = String(width) }, 1000);
			}
		}
	}
	document.getElementById('dimCubeR').style.transform = "scale("+redSize+")";
	document.getElementById('dimCubeR').style.height = redHi;
	document.getElementById('dimCubeR').style.width = redWi;
}


function evWidth(num) {
	var shift = (num+2)/2;
	if(shift % 2 != 0) shift--;
	return 100*factor((shift-2)/2);
}

/******************************************************************************/
/* DIMENSIONS CALCULATIONS FUNCTIONS */
/******************************************************************************/

function dimensions(dimout,dimin) {
	var dOFact = factor(dimout);
	var twoOutIn = Math.pow(2,dimout-dimin);
	var dIFact = factor(dimin);
	var dDiffFact = factor(dimout-dimin);
	return Math.round((dOFact*twoOutIn)/(dIFact*dDiffFact));
}


function factor(num) {
	var factored = 1;
	if (num < 0) {
		return "Clever, but regretfully negative dimensions evade us as of yet.";
	} else if (num > 1) {
		for (i = 0; i < num; i++) factored *= num - i;
	}
	return factored;
}