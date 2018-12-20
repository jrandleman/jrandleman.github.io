/* Author: Jordan Randleman */

/******************************************************************************/
/* INFO FUNCTIONS */
/******************************************************************************/

function aboutNgma() {
	alert("\nI created the NGMA shorthand with phonetic & pictographic"+
		" roots. \n\nOrignially developed to speed up class note-taking,"+
		" NGMA is designed to decrease the character-to-concept ratio"+
		" of written word relative to that of English, along with an"+
		" additional layer of personal privacy.");
}

/******************************************************************************/
/* DOWNLOAD BUTTON */
/******************************************************************************/

function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}


function dnldButton() {
	var usrDAns = prompt('Download your:\n => (1) NGMA\n => (2) English\n => (3) Both', '-:- Enter Option Here -:-').toLowerCase();
	if((usrDAns == '1' || usrDAns == '(1)') || usrDAns == "ngma") {
		var nDText = document.getElementById("eTIn").value.replace(/&amp;/g, '&');
		var text = 'https://jrandleman.github.io/gngmaConversion.html\n\nConverted NGMA:\n'+nDText;
		var filename = "convertedNgma.txt";
	} else if((usrDAns == '2' || usrDAns == '(2)') || usrDAns == "english") {
		var text = 'https://jrandleman.github.io/gngmaConversion.html\n\nReverted English:\n'+document.getElementById("nTIn").value;
		var filename = "revertedEnglish.txt";
	} else if((usrDAns == '3' || usrDAns == '(3)') || usrDAns == "both") {
		var nDText = document.getElementById("eTIn").value.replace(/&amp;/g, '&');
		var text = 'https://jrandleman.github.io/gngmaConversion.html\n\n'+
			'Converted NGMA:\n'+nDText+'\n\nReverted English:\n'+document.getElementById("nTIn").value;
		var filename = "bothNgmaEnglish.txt";
	} else if (usrDAns == null) {
		return;
	} else {
		alert('\nNot a Valid Option!\n\n => Enter: "1" for NGMA or "2" for English');
		dnldButton();
	}
	download(filename, text);
}

/******************************************************************************/
/* PRINT FUNCTIONS */
/******************************************************************************/

var myWindow;

function printOpt() {
	document.getElementById('printButton').style.marginTop = '-45px';
	document.getElementById("printButton").innerHTML = "<button id='dwn-btn1' class='getContentBtn material-icons' onclick='printIt()'>"+
		"<b>&#xe8ad;</b></button><span class='blackout'>-----------------------------------</span>"+
		"<button id='dwn-btn2' class='getContentBtn material-icons' onclick='dnldButton()'>file_download</button>";
	document.getElementById('cB1').style.visibility = 'visible';
	document.getElementById('cB2').style.visibility = 'visible';
	document.getElementById('dB1').style.visibility = 'visible';
	document.getElementById('dB2').style.visibility = 'visible';
}


function printIt() {
	var printTxt = prompt('Print your:\n => (1) NGMA\n => (2) English\n => (3) Both', '-:- Enter Option Here -:-').toLowerCase();
	if ((((printTxt == '1' || printTxt == '(1)') || printTxt == "ngma") || ((printTxt == '2' || printTxt == '(2)') || printTxt == "english")) || ((printTxt == '3' || printTxt == '(3)') || printTxt == 'both')) {
		if ((printTxt == '1' || printTxt == '(1)') || printTxt == "ngma") {
			var ntext = document.getElementById("eTIn").value;
			myWindow = window.open("", "myWindow", "width=1500,height=1000");
			myWindow.document.write("<p style='font-size:10px'><b><i><span style='float:left;'>NGMA &#x00A9; Jordan Randleman</span><span style='float:right;'>https://jrandleman.github.io/hq.html</span></i></b></p><br>");
			myWindow.document.write("<center style='font-family:arial'><h1><u><i>NGMA Conversion:</i></u></h1><p style='font-size:22px'><b>"+ntext+"</b></p></center>");
			myWindow.print();
			myWindow.close();
		} else if ((printTxt == '2' || printTxt == '(2)') || printTxt == "english") {
			var etext = document.getElementById("nTIn").value;
			myWindow = window.open("", "myWindow", "width=1500,height=1000");
			myWindow.document.write("<p style='font-size:10px'><b><i><span style='float:left;'>NGMA &#x00A9; Jordan Randleman</span><span style='float:right;'>https://jrandleman.github.io/hq.html</span></i></b></p><br>");
			myWindow.document.write("<center><h1><u><i style='font-family:arial'>English Reversion:</i></u></h1><p style='font-size:22px'><b>"+etext+"</b></p></center>");
			myWindow.print();
			myWindow.close();
		} else {
			var ntext = document.getElementById("eTIn").value;
			var etext = document.getElementById("nTIn").value;
			myWindow = window.open("", "myWindow", "width=1500,height=1000");
			myWindow.document.write("<p style='font-size:10px'><b><i><span style='float:left;'>NGMA &#x00A9; Jordan Randleman</span><span style='float:right;'>https://jrandleman.github.io/hq.html</span></i></b></p><br>");
			myWindow.document.write("<center style='font-family:arial'><h1><u><i>Translated Text:</i></u></h1><p style='font-size:22px'><b>"+ntext+"</b></p></center>");
			myWindow.document.write("<center><p style='font-size:22px'><b>"+etext+"</b></p></center>");
			myWindow.print();
			myWindow.close();
		}
	} else if (printTxt == null) {
		return;
	} else {
		alert('\nNot a Valid Option!\n\n => Enter: "1" for NGMA, "2" for English, or "3" for Both');
		printIt();
	}
}

/******************************************************************************/
/* TEXT AREA FUNCTIONS */
/******************************************************************************/

setTimeout(putPlaceHolders, 1000);
function clkText(elem) { elem.style.cursor = 'auto'; }
function clearInput(tId) { document.getElementById(tId).value = '';document.getElementById(tId).select(); }
function putPlaceHolders(){
	document.getElementById('nTIn').placeholder = 'Enter  Your \nEnglish';
	document.getElementById('eTIn').placeholder = String.fromCharCode(949,0x5201,0x10B4) + "  " + String.fromCharCode(955,937) +
		"\n" + String.fromCharCode(957,915,956,0x0041);
}
function rtnN(event,elem) {
	elem.value = stripText(elem);
	if (event.keyCode == "13" || event == "trans") startScript();
	document.getElementById('eTIn').value = stripText(document.getElementById('eTIn'));
}
function rtnE(event,elem) {
	elem.value = stripText(elem);
	if (event.keyCode == "13" || event == "trans") startRevScript();
	document.getElementById('nTIn').value = stripText(document.getElementById('nTIn'));
}
function stripText(elem) {
	var elemText = elem.value.replace(/\n/g, '');
	var elemArr = elemText.split('');
	for(let i = 0; elemArr[i] == ' ';) elemArr.splice(i,1);
	for(let i = elemText.length-1; elemArr[i] == ' ' && elemArr[i-1] == ' '; i--) elemArr.splice(i,1);
	return elemArr.join('');
}

/******************************************************************************/
/* INITIALIZATION FUNCTION */
/******************************************************************************/

function ngmaInfo() {
	const infoPhrase = " In that sense, "+'"all things are lawful"'+" for him. What's more, even if this period never"+
		" comes to pass, since there is anyway no God and no immortality, the new man may well become the man-god, even if he is the only one"+
		" in the whole world, and promoted to his new position, he may lightheartedly overstep all the barriers of the old morality of the old"+
		" slave-man, if necessary. There is no law for God. Where God stands, the place is holy. Where I stand will be at once the foremost"+
		" place ... "+'"all things are lawful"'+" and that's the end of it! That's all very charming; but if you want to swindle why do you want a"+
		" moral sanction for doing it? ";
	const infoPhrase2 = " When you suspend your faculty of independent judgment, you suspend consciousness."+
		" To stop consciousness is to stop life. Second-handers have no sense of reality. Their reality is not within them, but somewhere"+
		" in that space which divides one human body from another. Not an entity, but a relation--anchored to nothing. That's the emptiness"+
		" I couldn't understand in people. Men without an ego. Opinion without a rational process. Motion without brakes or motor. Power"+
		" without responsibility. The second-hander acts, but the source of his actions is scattered in every other living person. It's"+
		" everywhere and nowhere and you can't reason with him. ";
	const infoPhrase3 = " Hoisting high that olive stake with its stabbing point, straight into the monster's eye they rammed it hard -"+
		" I drove my weight on it from above and bored it home as a shipwright bores his beam with a shipwright's drill"+
		" that men below, whipping the strap back and forth, whirl and the drill keeps twisting faster, never stopping -"+
		" So we seized our stake with its fiery tip and bored it round and round in the giant's eye"+
		" till blood came boiling up around that smoking shaft and the hot blast singed his brow and eyelids round the core"+
		" and the broiling eyeball burst - its crackling roots blazed and hissed - as a blacksmith plunges a glowing ax or adze"+
		" in an ice - cold bath and the metal screeches steam and its temper hardens - that's the iron's strength -"+
		" so the eye of the Cyclops sizzled round that stake! ";
	var convertedPhrase = createFinalArray(infoPhrase);
	var convertedPhrase2 = createFinalArray(infoPhrase2);
	var convertedPhrase3 = createFinalArray(infoPhrase3);
	document.getElementById("demo0").innerHTML = '"'+convertedPhrase+'"';
	document.getElementById("demo1").innerHTML = '"'+convertedPhrase2+'"';
	document.getElementById("demo2").innerHTML = '"'+convertedPhrase3+'"';
}


var keyCounter = 0;

function startScript() {	
	var userStr1 = " " + document.getElementById('nTIn').value + " ";
	if (userStr1 == "  ") return;
	if ((userStr1.toLowerCase() == QUEST) || (userStr1.toLowerCase() == QUESTING)) {
		printOpt();
		var userStr2 = " " + prompt("There were 25 monsters and 28 kids", "How many didn't?") + " ";
		if (userStr2 == " null ") return;
		if ((userStr2.toLowerCase() == AN1) || (userStr2.toLowerCase() == AN2)) {
			alert("Well Done! Original thinking is always rewarding.");
			keyCounter++;
		} else {
			alert("Nope!");
			document.getElementById('eTIn').value = 'Do Over';
		}
		document.getElementById('ngmaEnter1').scrollIntoView();
	} else if (userStr1.toLowerCase() == nul && keyCounter > 0) {
		alert(into);
		alert(intro);
		structure();
		document.getElementById('demo1').scrollIntoView();
	} else {
		printOpt();
		var convertedPhrase = createFinalArray(userStr1);
		convPhraseLen = convertedPhrase.length;
		convPhraseArr = convertedPhrase.split('');
		for(let i = 0; convPhraseArr[i] == ' ';) convPhraseArr.splice(i,1);
		for(let i = convPhraseLen-1; convPhraseArr[i] == ' ' && convPhraseArr[i-1] == ' '; i--) convPhraseArr.splice(i,1);
		document.getElementById('eTIn').value = convPhraseArr.join('');
		document.getElementById('ngmaEnter1').scrollIntoView();
	}
}

/******************************************************************************/
/* CLICK TO COPY FUNCTIONS */
/******************************************************************************/

/************* CLICK TO COPY NGMA *************/
const cB1 = document.querySelector("#cB1");
cB1.onclick = function() { document.execCommand("copy"); }
cB1.addEventListener("copy", function(event) {
	event.preventDefault();
	if (event.clipboardData) event.clipboardData.setData("text/plain", document.getElementById("nTIn").value);
});

/************ CLICK TO COPY ENGLISH ************/
const cB2 = document.querySelector("#cB2");
cB2.onclick = function() { document.execCommand("copy"); }
cB2.addEventListener("copy", function(event) {
	event.preventDefault();
	if (event.clipboardData) event.clipboardData.setData("text/plain", document.getElementById("eTIn").value);
});

/******************************************************************************/
/* CONSTANTS */
/******************************************************************************/

const doesItWork = 'Of course';

const iAm = String.fromCharCode(967,968,957)+' '+
String.fromCharCode(915,968,923,932);

const mCr = "'Let us strive to be more liberal as we grow older for this is"+
" the safety valve of our rights. Never belong to any organization that"+
" makes you narrow or contracted, that makes you look upon your fellow"+
" man with a green-eyed selfishness, because he does not accept your"+
" religion or political idea. Remember his rights of franchise is his,"+
" not yours. Never surrender your rights to utter an honest thought on"+
" the line of justice and reason.' - Martin C. Randleman, Co. B"+
" 10th Iowa Inf. Civil War Union Captain";

/******************************************************************************/
/* REVERSION */
/******************************************************************************/

/*************************** INITIALIZATION FUNCTION ***************************/
const eArr = (' ? ! . , ; "' + engWordConst).split(' ');
const nArr = fixPhrase(generateFinalArray().split('')).split(' ');

function getNgmaString() {
	var ENTER_PHRASE_HERE = " " + document.getElementById('eTIn').value + " ";
	if (ENTER_PHRASE_HERE == "  ") return 123;
	var phraseArr2 = ENTER_PHRASE_HERE.split('');
	for (let i = 0; i < phraseArr2.length; i++) {
		if (phraseArr2[i] == "?") {
			phraseArr2.splice(i,1," ?");
		} else if (phraseArr2[i] == "!") {
			phraseArr2.splice(i,1," !");
		} else if (phraseArr2[i] == String.fromCharCode(0x2216)) {
			phraseArr2.splice(i,1," "+String.fromCharCode(0x2216)+" ");
		} else if (phraseArr2[i] == "-") {
			phraseArr2.splice(i,1," - ");
		} else if (phraseArr2[i] == '"') {
			if (phraseArr2[i+1] == " ") {
				phraseArr2.splice(i,1,' "');
			} else {
				phraseArr2.splice(i,1,'" ');
			}
		} else if (phraseArr2[i] == ';') {
			phraseArr2.splice(i,1,' -');
		}
	}
	return phraseArr2.join('');
}

/**************************** HELPER FUNCTION(S) ****************************/
function passRevWords(word) {
	var newRevStr = '';
	for (let n = 0; n < nArr.length; n++) {
		if (nArr[n] == word) {
			newRevStr += eArr[n];
			break;
		}
	}
	return newRevStr;
} 

function fixPunc(sentence) {
	for (let i = 0; i < sentence.length; i++) {
		if ((sentence[i] == " ") && (sentence[i+1] == ".")) {
			sentence.splice(i,1);
		} else if ((sentence[i] == " ") && (sentence[i+1] == "?")) {
			sentence.splice(i,1);
		} else if ((sentence[i] == " ") && (sentence[i+1] == "!")) {
			sentence.splice(i,1);
		} else if ((sentence[i] == " ") && (sentence[i+1] == ",")) {
			sentence.splice(i,1);
		}
	}
	return sentence.join('');
} 

function fixPhrase(phrase) {
	for (let i = 0; i < phrase.length; i++) {
		if (phrase[i] == String.fromCharCode(0x2216)) {
			phrase.splice(i+1,0,' ');
		} else if (phrase[i] == '-') {
			phrase.splice(i+1,0,' ');
			return phrase.join('');
		}
	}
}

/******************************* MAIN FUNCTIONS *******************************/
function generateFinalArray() {
	var finalArr      = [];
	var ngmaEditEngArr = formatStrEditEnglish(editPunc((' ? ! . , ; "' + engWordConst).split('')).toLowerCase());
	var ngmaCommonWordsArr = formatStrCommonWords(ngmaEditEngArr);
	var ngmaGeneralPhoneticArr = formatStrGeneralPhonetic(ngmaCommonWordsArr);
	var ngmaVowelConEArr = formatStrVowelConE(ngmaGeneralPhoneticArr);
	var ngmaVowelPairs1Arr = formatStrVowelPairs1(ngmaVowelConEArr);
	var ngmaVowelPairs2Arr = formatStrVowelPairs2(ngmaVowelPairs1Arr);
	var ngmaConsonantsArr = formatStrConsonants(ngmaVowelPairs2Arr);
	var ngmaVowelConPairsArr1 = formatStrVowelConPairs1(ngmaConsonantsArr);
	var ngmaVowelConPairsArr2 = formatStrVowelConPairs2(ngmaVowelConPairsArr1);
	var ngmaCharStr = replaceConsonants(ngmaVowelConPairsArr2);

	ngmaCharStr.split(' ').forEach((word) => {
		finalArr.push(removeDuplicateLetters(word));
	});

	var formattedFinalArr = formatFinalArray1(finalArr);
	return formatFinalArray2(formattedFinalArr);
}

function generateRevPhrase() { 
	var revEng = [];
	var arr = getNgmaString();
	if (arr == 123) return 123;

	arr.split(' ').forEach((word) => {
		revEng.push(passRevWords(word));
	});

	var fixRevEng = fixPunc(revEng.join(' ').split(''));
	return fixRevEng;
}

/***************************** EXECUTION FUNCTION *****************************/
function startRevScript() {
	var revPhrase = generateRevPhrase();
	if (revPhrase == 123) return;
	printOpt();
	rPArr = revPhrase.split('');
	rPArr[1] = rPArr[1].toUpperCase();
	for (let i = 2; i < rPArr.length - 2; i++) {
		if (((rPArr[i] == ' ') && (rPArr[i+1] == 'i')) && (rPArr[i+2] == ' ')) {
			rPArr.splice(i+1,1,'I');
		} else if (((rPArr[i] == '.') || (rPArr[i] == '?')) || (rPArr[i] == '!')) {
			rPArr[i+2] = rPArr[i+2].toUpperCase();
		}
	}
	rPLen = rPArr.join('').length;
	for(let i = 0; rPArr[i] == ' ';) rPArr.splice(i,1);
	for(let i = rPLen-1; rPArr[i] == ' ' && rPArr[i-1] == ' '; i--) rPArr.splice(i,1);
	document.getElementById("nTIn").value = rPArr.join('');
}

/******************************************************************************/
/* DIY */
/******************************************************************************/

const title1 = String.fromCharCode(0x002D,0x003A,0x002D,0x0020,0x004E,0x0047,
		0x004D,0x0041,0x0020,0x004B,0x0045,0x0059,0x0020,0x002D,0x003A,0x002D);

const title2 = "-:- CONSONANTS -:-";
const consonantL = "(B: "+String.fromCharCode(946)+")"+
" (D: "+String.fromCharCode(916)+") (F: "+String.fromCharCode(934)+")"+
" (G: "+String.fromCharCode(915)+") (H: "+String.fromCharCode(951)+")"+
" (J: "+String.fromCharCode(967)+") (K: "+String.fromCharCode(0x30B9)+")"+
" (L: "+String.fromCharCode(923)+") (M: "+String.fromCharCode(956)+")"+
" (N: "+String.fromCharCode(957)+") (P: "+String.fromCharCode(928)+")"+
" (R: "+String.fromCharCode(929)+") (S: "+String.fromCharCode(931)+")"+
" (T: "+String.fromCharCode(932)+") (V: "+String.fromCharCode(965)+")"+
" (W: "+String.fromCharCode(948)+") (X: "+String.fromCharCode(926)+")"+
" (Y: "+String.fromCharCode(955)+") (Z: "+String.fromCharCode(950)+")";

const title3 = "-:- VOWELS -:-";
const vowelL1 = "[l(a)st: "+String.fromCharCode(0x0041)+"] "+
"[l(a)te: "+String.fromCharCode(0x0048)+"] "+
"[l(i)st: "+String.fromCharCode(953)+"] "+
"[l(e)st: "+String.fromCharCode(949)+"] "+
"[l(ee)k: "+String.fromCharCode(0x0045)+"] "+
"[l(u)ll: "+String.fromCharCode(0x0427)+"] "+
"[l(oo)k: "+String.fromCharCode(0x144E)+"] ";
const vowelL2 = "[l(o)se: "+String.fromCharCode(960)+"] "+
"[l(o)st: "+String.fromCharCode(968)+"] "+
"[l(ou)d: "+String.fromCharCode(969)+"] "+
"[l(oa)d: "+String.fromCharCode(937)+"] "+
"[(u)nit: "+String.fromCharCode(933)+"] "+
"[b(oi)l: "+String.fromCharCode(0x155F)+"] "+
"[b(i)le: "+String.fromCharCode(0x0049)+"] ";

const title4 = "-:- T/S/C + H -:-";
const conH = "('th': "+String.fromCharCode(920)+")"+
" ('sh': "+String.fromCharCode(936)+") ('ch': "+String.fromCharCode(935)+")";

const title5 = "-:- R/N COMBINATIONS -:-";
const conRN = "('are': "+String.fromCharCode(0x0052)+")"+
" ('air': "+String.fromCharCode(228)+")"+
" ('ear': "+String.fromCharCode(0x260B)+")"+
" ('er': "+String.fromCharCode(0x10B4)+")"+
" ('or': "+String.fromCharCode(0x004F)+")"+
" ('nd': "+String.fromCharCode(0x2207)+")"+
" ('nk': "+String.fromCharCode(0x004E)+")"+
" ('nt': "+String.fromCharCode(0x5201)+")"+
" ('ng': "+String.fromCharCode(0x0AEA)+")"+
" ('ing': "+String.fromCharCode(0x04A8)+")";

const title6 = "-:- T COMBINATIONS -:-";
const conT = "('ft': "+String.fromCharCode(964)+")"+
" ('st': "+String.fromCharCode(0x1560)+")"+
" ('it': "+String.fromCharCode(0x0074)+")"+
" ('ct': "+String.fromCharCode(0x0043)+")"+
" ('at': "+String.fromCharCode(0x0466)+")"+
" ('ts': "+String.fromCharCode(0x00DF)+")"+
" ('eet': "+String.fromCharCode(0x0CEE)+")";

const title7 = "-:- CONSONANT COMBINATIONS -:-";
const conComb = "('bee': "+String.fromCharCode(0x0042)+")"+
" ('dee': "+String.fromCharCode(0x1402)+")"+
" ('-ed': "+String.fromCharCode(0x2661)+")"+
" ('-ly': "+String.fromCharCode(0x01338)+")"+
" ('el': "+String.fromCharCode(0x1430)+")"+
" (vi(s)ion: "+String.fromCharCode(0x04FE)+")"+
" (ac(tion): "+String.fromCharCode(0x00B0)+")"+
"<br> (delic(ious): "+String.fromCharCode(0x14D0)+")"+
" (comma: -)"+
" (period: "+String.fromCharCode(0x2216)+")";

const title8 = "-:- COMMON WORDS -:-";
const comW1 = "(a,an: "+String.fromCharCode(951)+")"+
" (and: "+String.fromCharCode(0x0026)+")"+
" (are: "+String.fromCharCode(0x0052)+")"+
" (as: "+String.fromCharCode(950)+")"+
" (at: "+String.fromCharCode(0x0466)+")"+
" (ate: "+String.fromCharCode(0x0038)+")"+
" (be: "+String.fromCharCode(0x0042)+")"+
" (because: "+String.fromCharCode(0x0CEC)+")"+
" (but: "+String.fromCharCode(946)+")"+
"<br> (can: "+String.fromCharCode(0x30B9)+")"+
" (do,did: "+String.fromCharCode(916)+")"+
" (ear: "+String.fromCharCode(0x260B)+")"+
" (end: "+String.fromCharCode(0x2207)+")"+
" (for: "+String.fromCharCode(934)+")";
const comW2 = "(go: "+String.fromCharCode(915)+")"+
" (good: "+String.fromCharCode(0x00A7)+")"+
" (how: "+String.fromCharCode(969)+")"+
" (I: "+String.fromCharCode(0x0049)+")"+
" (in: "+String.fromCharCode(957)+")"+
" (is: "+String.fromCharCode(931)+")"+
" (it: "+String.fromCharCode(953)+")"+
" (its: "+String.fromCharCode(0x00DF)+")"+
" (left: "+String.fromCharCode(171)+")"+
" (less: "+String.fromCharCode(60)+")"+
" (more: "+String.fromCharCode(62)+")"+
" (my: "+String.fromCharCode(956)+")"+
" (not: "+String.fromCharCode(0x5201)+")"+
" (of: "+String.fromCharCode(965)+")"+
" (peace: "+String.fromCharCode(0x1210)+")"+
" (person: "+String.fromCharCode(0x1E8A)+")";
const comW3 = "(put: "+String.fromCharCode(928)+")"+
" (right: "+String.fromCharCode(187)+")"+
" (she: "+String.fromCharCode(936)+")"+
" (so: "+String.fromCharCode(0x2234)+")"+
" (the: "+String.fromCharCode(920)+")"+
" (then: "+String.fromCharCode(0x0D24)+")"+
" (to: "+String.fromCharCode(932)+")"+
" (well: "+String.fromCharCode(0x1430)+")"+
" (will: "+String.fromCharCode(923)+")"+
"<br> (with: "+String.fromCharCode(948,953)+")"+
" (would: "+String.fromCharCode(948)+")"+
" (yeah: "+String.fromCharCode(955)+")"+
" (you: "+String.fromCharCode(933)+")"+
" (different: "+String.fromCharCode(0x2260)+")";

/******************************************************************************/
/* HELPER FUNCTION(S) */
/******************************************************************************/

function structure() {
	document.getElementById("demo1").innerHTML = title1;
	document.getElementById("demo2").innerHTML = title2;
	document.getElementById("demo3").innerHTML = consonantL;
	document.getElementById("demo4").innerHTML = title3;
	document.getElementById("demo5").innerHTML = vowelL1;
	document.getElementById("demo6").innerHTML = vowelL2;
	document.getElementById("demo7").innerHTML = title4;
	document.getElementById("demo8").innerHTML = conH;
	document.getElementById("demo9").innerHTML = title5;
	document.getElementById("demo10").innerHTML = conRN;
	document.getElementById("demo11").innerHTML = title6;
	document.getElementById("demo12").innerHTML = conT;
	document.getElementById("demo13").innerHTML = title7;
	document.getElementById("demo14").innerHTML = conComb;
	document.getElementById("demo15").innerHTML = title8;
	document.getElementById("demo16").innerHTML = comW1;
	document.getElementById("demo17").innerHTML = comW2;
	document.getElementById("demo18").innerHTML = comW3;
	document.getElementById("demo20").innerHTML = gotin;
}


function removeDuplicateLetters(oldString) {
	var newNgmaStr = '';
	for (let i = 0; i < oldString.length; i++) {
		if (oldString[i] != oldString[i-1]) newNgmaStr += oldString[i];
	}
	return newNgmaStr;
}


function editPunc(phraseArr) {
	var len = phraseArr.length;
	for (let i = 0; i < len; i++) {
		if (((phraseArr[i] == " ") && (phraseArr[i+1] == ".")) && ((phraseArr[i+2] == ".") && (phraseArr[i+3] == "."))) {
			phraseArr.splice(i,4," ,");
		}
		if (phraseArr[i] == "?") {
			phraseArr.splice(i,1," ?");
		} else if (phraseArr[i] == "!") {
			phraseArr.splice(i,1," !");
		} else if (phraseArr[i] == ".") {
			phraseArr.splice(i,1," .");
		} else if (phraseArr[i] == ",") {
			phraseArr.splice(i,1," ,");
		}
	}
	return phraseArr.join('');
}

/******************************************************************************/
/* REPLACEMENT FUNCTIONS */
/******************************************************************************/

function formatStrEditEnglish(engStr) {
	return engStr
		.replace(/,/g, '-').replace(/tion/g, String.fromCharCode(0x00B0))
		.replace(/tch/g, 'ch').replace(/can't/g, "can not")
		.replace(/le /g, 'l ').replace(/cious/g, String.fromCharCode(936,0x14D0))
		.replace(/ci/g, String.fromCharCode(931,0x0069))
		.replace(/ kn/g, ' '+String.fromCharCode(957))
		.replace(/cq/g, String.fromCharCode(0x0071)).replace(/'d/g, ' would')
		.replace(/i'm/g, 'I A'+String.fromCharCode(956)).replace(/'ll/g, ' will').replace(/'re/g, ' are')
		.replace(/n't/g, ' not').replace(/'ve/g, ' have').replace(/ces /g, 'cez ')
		.replace(/ded /g, 'de'+String.fromCharCode(0x2661)+' ').replace(/ses /g, 'sez ');
}


function formatStrCommonWords(engStr) {
	return engStr
		.replace(/ a /g, ' '+String.fromCharCode(951)+' ')
		.replace(/ i /g, ' '+String.fromCharCode(0x0049)+' ')
		.replace(/ an /g, ' '+String.fromCharCode(951)+' ')
		.replace(/ by /g, ' '+String.fromCharCode(946,0x0049)+' ')
		.replace(/ as /g, ' '+String.fromCharCode(950)+' ')
		.replace(/ be /g, ' '+String.fromCharCode(0x0042)+' ')
		.replace(/ do /g, ' '+String.fromCharCode(916)+' ')
		.replace(/ go /g, ' '+String.fromCharCode(915)+' ')
		.replace(/ he /g, ' '+String.fromCharCode(951,0x0045)+' ') 
		.replace(/ in /g, ' '+String.fromCharCode(957)+' ')
		.replace(/ is /g, ' '+String.fromCharCode(931)+' ')
		.replace(/ it /g, ' '+String.fromCharCode(953)+' ')
		.replace(/ its /g, ' '+String.fromCharCode(0x00DF)+' ')
		.replace(/ me /g, ' '+String.fromCharCode(956)+'E ')
		.replace(/ my /g, ' '+String.fromCharCode(956)+' ')
		.replace(/ no /g, ' '+String.fromCharCode(957,937)+' ')
		.replace(/ not /g, ' '+String.fromCharCode(0x5201)+' ')
		.replace(/ of /g, ' '+String.fromCharCode(965)+' ')
		.replace(/ on /g, ' '+String.fromCharCode(968,957)+' ')
		.replace(/ so /g, ' '+String.fromCharCode(0x2234)+' ')
		.replace(/ to /g, ' '+String.fromCharCode(932)+' ')
		.replace(/ we /g, ' '+String.fromCharCode(948,0x0045)+' ')
		.replace(/ who /g, ' '+String.fromCharCode(951,960)+' ')
		.replace(/ why /g, ' '+String.fromCharCode(948,0x0049)+' ')
		.replace(/ air /g, ' '+String.fromCharCode(228)+' ')
		.replace(/ are /g, ' '+String.fromCharCode(0x0052)+' ')
		.replace(/ but /g, ' '+String.fromCharCode(946)+' ')
		.replace(/ can /g, ' '+String.fromCharCode(0x30B9)+' ')
		.replace(/ did /g, ' '+String.fromCharCode(916,953,916)+' ')
		.replace(/ ear /g, ' '+String.fromCharCode(0x260B)+' ')
		.replace(/ end /g, ' '+String.fromCharCode(0x2207)+' ')
		.replace(/ for /g, ' '+String.fromCharCode(934)+' ')
		.replace(/ how /g, ' '+String.fromCharCode(969)+' ')
		.replace(/ put /g, ' '+String.fromCharCode(928)+' ')
		.replace(/ she /g, ' '+String.fromCharCode(936)+' ')
		.replace(/ sy/g, ' '+String.fromCharCode(931,953))
		.replace(/ the /g, ' '+String.fromCharCode(920)+' ')
		.replace(/ use /g, ' '+String.fromCharCode(0x0059,950)+' ')
		.replace(/ you /g, ' '+String.fromCharCode(933)+' ')
		.replace(/ been /g, ' '+String.fromCharCode(946,957)+' ')
		.replace(/ does /g, ' '+String.fromCharCode(916,0x0427,950)+' ')
		.replace(/ good /g, ' '+String.fromCharCode(0x00A7)+' ')
		.replace(/ have /g, ' '+String.fromCharCode(951,965)+' ')
		.replace(/ left /g, ' '+String.fromCharCode(0x226A)+' ')
		.replace(/ less /g, ' '+String.fromCharCode(0x003C)+' ')
		.replace(/ more /g, ' '+String.fromCharCode(0x003E)+' ')
		.replace(/ once /g, ' '+String.fromCharCode(948,0x0427,957,931)+' ')
		.replace(/ into /g, ' '+String.fromCharCode(0x5201,960)+' ')
		.replace(/ this /g, ' '+String.fromCharCode(920,931)+' ')
		.replace(/ well /g, ' '+String.fromCharCode(0x1430)+' ')
		.replace(/ will /g, ' '+String.fromCharCode(923)+' ')
		.replace(/ with /g, ' '+String.fromCharCode(948,953)+' ')
		.replace(/ yeah /g, ' '+String.fromCharCode(955)+' ')
		.replace(/ your /g, ' '+String.fromCharCode(955,937)+' ')
		.replace(/ right /g, ' '+String.fromCharCode(0x226B)+' ')
		.replace(/ could /g, ' '+String.fromCharCode(0x30B9)+' ')
		.replace(/ would /g, ' '+String.fromCharCode(948)+' ')
		.replace(/ were /g, ' '+String.fromCharCode(948,0x10B4)+' ')
		.replace(/ where /g, ' '+String.fromCharCode(948,228)+' ')
		.replace(/ whol /g, ' '+String.fromCharCode(951,937,923)+' ')
		.replace(/ hello /g, ' '+String.fromCharCode(951,0x1430,937)+' ')
		.replace(/ peopl /g, ' '+String.fromCharCode(0x1E8A)+' ')
		.replace(/ because /g, ' '+String.fromCharCode(0x0CEC)+' ')
		.replace(/ therefore /g, ' '+String.fromCharCode(0x2234)+' ')
		.replace(/ through /g, ' '+String.fromCharCode(920,929,960)+' ')
		.replace(/ throughout /g, ' '+String.fromCharCode(920,929,960,969,932)+' ')
		.replace(/ there /g, ' '+String.fromCharCode(920,228)+' ')
		.replace(/ their /g, ' '+String.fromCharCode(920,228)+' ')
		.replace(/ they're /g, ' '+String.fromCharCode(920,228)+' ')
		/* -:- SINGLE-NUMBERS TO WORDS SPACED -:- */
		.replace(/ 1 /g, ' '+String.fromCharCode(948,0x0427,957)+' ')
		.replace(/ 2 /g, ' '+String.fromCharCode(932,960)+' ')
		.replace(/ 3 /g, ' '+String.fromCharCode(920,929,0x0045)+' ')
		.replace(/ 4 /g, ' '+String.fromCharCode(934,0x004F)+' ')
		.replace(/ 5 /g, ' '+String.fromCharCode(934,0x0049,965)+' ')
		.replace(/ 6 /g, ' '+String.fromCharCode(931,953,926)+' ')
		.replace(/ 7 /g, ' '+String.fromCharCode(931,949,965,949,957)+' ')
		.replace(/ 9 /g, ' '+String.fromCharCode(957,0x0049,957)+' ')
		.replace(/ 0 /g, ' '+String.fromCharCode(950,0x260B,937)+' ');
}


function formatStrGeneralPhonetic(engStr) {
	return engStr
		.replace(/acco/g, String.fromCharCode(0x0041,0x30B9,0x006F))
		.replace(/aught/g, String.fromCharCode(968,932))
		.replace(/cess/g, String.fromCharCode(931,949,931))
		.replace(/chill/g, String.fromCharCode(0x1210))
		.replace(/tious/g, String.fromCharCode(936,0x14D0))
		.replace(/randleman/g, String.fromCharCode(929,0x0026,0x1430,0x2642))
		.replace(/behind/g, String.fromCharCode(0x0042,951,0x0049,0x2207))
		.replace(/blind/g, String.fromCharCode(946,923,0x0049,0x2207))
		.replace(/c&ide/g, String.fromCharCode(0x30B9,0x0026,0x0045,916))
		.replace(/difference/g, String.fromCharCode(0x2260))
		.replace(/different/g, String.fromCharCode(0x2260))
		.replace(/ engi/g, String.fromCharCode(0x0020,949,957,967,0x0069))
		.replace(/human/g, String.fromCharCode(0x1E8A))
		.replace(/inged/g, String.fromCharCode(957,967,0x2661))
		.replace(/inger/g, String.fromCharCode(0x04A8,0x10B4))
		.replace(/inges/g, String.fromCharCode(957,967,950))
		.replace(/iously/g, String.fromCharCode(0x0045,0x14D0,0x01338))
		.replace(/ourse/g, String.fromCharCode(0x004F,931)) 
		.replace(/ously/g, String.fromCharCode(0x14D0,0x01338))
		.replace(/ought/g, String.fromCharCode(968,932))
        .replace(/tough/g, String.fromCharCode(932,0x0427,934))
		.replace(/rough/g, String.fromCharCode(929,0x0427,934))
		.replace(/peace/g, String.fromCharCode(0x1210))
		.replace(/people/g, String.fromCharCode(0x1E8A))
		.replace(/person/g, String.fromCharCode(0x1E8A))
		.replace(/ary /g, String.fromCharCode(228,0x0045,0x0020))
		.replace(/ery /g, String.fromCharCode(0x10B4,0x0045,0x0020))
		.replace(/ory /g, String.fromCharCode(0x004F,0x0045,0x0020))
		.replace(/ toge/g, String.fromCharCode(0x0020,932,960,915,949))
		.replace(/ture/g, String.fromCharCode(935,0x10B4))
		.replace(/type/g, String.fromCharCode(932,0x0049,928))
		.replace(/angs/g, String.fromCharCode(0x0041,0x0AEA,950))
		.replace(/bear/g, String.fromCharCode(946,228))
		.replace(/bind/g, String.fromCharCode(946,0x0049,0x2207))
		.replace(/come/g, String.fromCharCode(0x30B9,0x0427,956))
		.replace(/eige/g, String.fromCharCode(0x0048,0x04FE))
		.replace(/eigh/g, String.fromCharCode(0x0048))
		.replace(/eate/g, String.fromCharCode(0x0CEE))
		.replace(/find/g, String.fromCharCode(934,0x0049,0x2207))
		.replace(/ighs/g, String.fromCharCode(0x0049,950))
		.replace(/ight/g, String.fromCharCode(0x0049,932))
		.replace(/inge/g, String.fromCharCode(957,967))
		.replace(/ious/g, String.fromCharCode(0x0045,0x14D0))
		.replace(/ings/g, String.fromCharCode(0x04A8,950))
		.replace(/itch/g, String.fromCharCode(0x22C9))
		.replace(/kind/g, String.fromCharCode(0x30B9,0x0049,0x2207))
		.replace(/oate/g, String.fromCharCode(937,932))
		.replace(/mind/g, String.fromCharCode(956,0x0049,0x2207))
		.replace(/ngma/g, String.fromCharCode(957,915,956,0x0041))
		.replace(/oose/g, String.fromCharCode(960,931))
		.replace(/pear/g, String.fromCharCode(928,228))
		.replace(/psych/g, String.fromCharCode(931,0x0049,0x30B9))
		.replace(/rind/g, String.fromCharCode(929,0x0049,0x2207))
		.replace(/sion/g, String.fromCharCode(0x04FE,0x0427,957))
		.replace(/sure/g, String.fromCharCode(0x04FE,0x10B4))
		.replace(/than/g, String.fromCharCode(920,0x0041,957))
		.replace(/then/g, String.fromCharCode(0x0D24))
		.replace(/udgm/g, String.fromCharCode(0x0427,967,956))
		.replace(/ungs/g, String.fromCharCode(0x0427,0x0AEA,950))
		.replace(/wear/g, String.fromCharCode(948,228))
		.replace(/well/g, String.fromCharCode(948,0x1430))
		.replace(/xury/g, String.fromCharCode(0x04FE,0x10B4,0x0045))
		.replace(/acc/g, String.fromCharCode(0x0041,926))
		.replace(/ack/g, String.fromCharCode(0x0041,0x30B9))
		.replace(/ang/g, String.fromCharCode(0x0041,0x0AEA))
		.replace(/dee/g, String.fromCharCode(0x1402))
		.replace(/eat/g, String.fromCharCode(0x0CEE))
		.replace(/eck/g, String.fromCharCode(949,0x30B9))
		.replace(/eek/g, String.fromCharCode(0x0045,0x30B9))
		.replace(/eet/g, String.fromCharCode(0x0CEE))
		.replace(/ess/g, String.fromCharCode(949,931))
		.replace(/ete/g, String.fromCharCode(0x0CEE))
		.replace(/iar/g, String.fromCharCode(0x0049,0x0052))
		.replace(/ick/g, String.fromCharCode(953,0x30B9))
		.replace(/ign/g, String.fromCharCode(0x0049,957))
		.replace(/ire/g, String.fromCharCode(0x0049,0x0052))
		.replace(/ism/g, String.fromCharCode(953,950,956))
		.replace(/key/g, String.fromCharCode(0x30B9,0x0045))
		.replace(/man/g, String.fromCharCode(0x2642))
		.replace(/nce/g, String.fromCharCode(957,931))
		.replace(/oat/g, String.fromCharCode(937,932))
		.replace(/ock/g, String.fromCharCode(968,0x30B9))
		.replace(/out/g, String.fromCharCode(969,932))
		.replace(/psy/g, String.fromCharCode(931,0x0049))
		.replace(/sch/g, String.fromCharCode(931,0x30B9))
		.replace(/uck/g, String.fromCharCode(0x0427,0x30B9))
		.replace(/ung/g, String.fromCharCode(0x0427,0x0AEA))
		.replace(/wel/g, String.fromCharCode(948,0x1430))
		.replace(/wh/g, 'w')
		/* -:- 'CE' COMBINATIONS -:- */
		.replace(/ace/g, String.fromCharCode(0x0048,931))
		.replace(/ece/g, String.fromCharCode(0x0045,931))
		.replace(/ice/g, String.fromCharCode(0x0049,931))
		.replace(/oce/g, String.fromCharCode(937,931))
		.replace(/uce/g, String.fromCharCode(960,931))
		.replace(/ce /g, 's ')
		/* -:- '-RE' COMBINATIONS -:- */
		.replace(/ bare /g, ' '+String.fromCharCode(946,228)+' ').replace(/ dare /g, ' '+String.fromCharCode(916,228)+' ')
		.replace(/ fare /g, ' '+String.fromCharCode(934,228)+' ').replace(/ hare /g, ' '+String.fromCharCode(951,228)+' ')
		.replace(/ mare /g, ' '+String.fromCharCode(956,228)+' ').replace(/ rare /g, ' '+String.fromCharCode(929,228)+' ')
		.replace(/ care /g, ' '+String.fromCharCode(0x30B9,228)+' ').replace(/ pure /g, ' '+String.fromCharCode(928,955,0x10B4)+' ')
		.replace(/ cure /g, ' '+String.fromCharCode(0x30B9,955,0x10B4)+' ');
}


function formatStrVowelConE(engStr) { 
	return engStr
		/* -:- VOWEL + CONSONANT + 'E' -:- */
		.replace(/abe/g, String.fromCharCode(0x0048,946))
		.replace(/afe/g, String.fromCharCode(0x0048,934))
		.replace(/ade/g, String.fromCharCode(0x0048,916))
		.replace(/age/g, String.fromCharCode(0x0048,967))
		.replace(/ake/g, String.fromCharCode(0x0048,0x30B9))
		.replace(/ale/g, String.fromCharCode(0x0048,923))
		.replace(/ame/g, String.fromCharCode(0x0048,956))
		.replace(/ape/g, String.fromCharCode(0x0048,928))
		.replace(/ane/g, String.fromCharCode(0x0048,957))
		.replace(/ase/g, String.fromCharCode(0x0048,931))
		.replace(/are/g, String.fromCharCode(0x0052))
		.replace(/ave/g, String.fromCharCode(0x0048,965))
		.replace(/ate/g, String.fromCharCode(0x0038))
		.replace(/aze/g, String.fromCharCode(0x0048,950))
		.replace(/aye/g, String.fromCharCode(0x0048))
		/* -:- */
		.replace(/ebe/g, String.fromCharCode(0x0045,946))
		.replace(/efe/g, String.fromCharCode(0x0045,934))
		.replace(/ede/g, String.fromCharCode(0x0045,916))
		.replace(/ege/g, String.fromCharCode(0x0045,967))
		.replace(/eke/g, String.fromCharCode(0x0045,0x30B9))
		.replace(/ele/g, String.fromCharCode(0x0045,923))
		.replace(/eme/g, String.fromCharCode(0x0045,956))
		.replace(/epe/g, String.fromCharCode(0x0045,928))
		.replace(/ene/g, String.fromCharCode(0x0045,957))
		.replace(/ere/g, String.fromCharCode(0x0045,929))
		.replace(/ese/g, String.fromCharCode(0x0045,931))
		.replace(/ete/g, String.fromCharCode(0x0CEE))
		.replace(/eve/g, String.fromCharCode(0x0045,965))
		.replace(/eye/g, String.fromCharCode(0x0049))
		.replace(/eze/g, String.fromCharCode(0x0045,950))
		/* -:-  */
		.replace(/ibe/g, String.fromCharCode(0x0049,946))
		.replace(/ide/g, String.fromCharCode(0x0049,916))
		.replace(/ife/g, String.fromCharCode(0x0049,934))
		.replace(/ige/g, String.fromCharCode(0x0049,967))
		.replace(/ike/g, String.fromCharCode(0x0049,0x30B9))
		.replace(/ile/g, String.fromCharCode(0x0049,923))
		.replace(/ime/g, String.fromCharCode(0x0049,956))
		.replace(/ine/g, String.fromCharCode(0x0049,957))
		.replace(/ipe/g, String.fromCharCode(0x0049,928))
		.replace(/ire/g, String.fromCharCode(0x0049,929))
		.replace(/ise/g, String.fromCharCode(0x0049,931))
		.replace(/ive/g, String.fromCharCode(0x0049,965))
		.replace(/ite/g, String.fromCharCode(0x0049,932))
		.replace(/ize/g, String.fromCharCode(0x0049,950))
		/* -:- */
		.replace(/obe/g, String.fromCharCode(937,946))
		.replace(/ode/g, String.fromCharCode(937,916))
		.replace(/ofe/g, String.fromCharCode(937,934))
		.replace(/oge/g, String.fromCharCode(937,967))
		.replace(/oke/g, String.fromCharCode(937,0x30B9))
		.replace(/ole/g, String.fromCharCode(937,923))
		.replace(/ome/g, String.fromCharCode(937,956))
		.replace(/one/g, String.fromCharCode(937,957))
		.replace(/ope/g, String.fromCharCode(937,928))
		.replace(/ose/g, String.fromCharCode(937,950))
		.replace(/ore/g, String.fromCharCode(0x004F))
		.replace(/ove/g, String.fromCharCode(937,965))
		.replace(/ote/g, String.fromCharCode(937,932))
		.replace(/oze/g, String.fromCharCode(937,950))
		.replace(/oye/g, String.fromCharCode(0x155F))
		/* -:- */
		.replace(/ube/g, String.fromCharCode(960,946))
		.replace(/ude/g, String.fromCharCode(960,916))
		.replace(/ufe/g, String.fromCharCode(960,934))
		.replace(/uge/g, String.fromCharCode(960,967))
		.replace(/uke/g, String.fromCharCode(960,0x30B9))
		.replace(/ule/g, String.fromCharCode(960,923))
		.replace(/ume/g, String.fromCharCode(960,956))
		.replace(/une/g, String.fromCharCode(960,957))
		.replace(/upe/g, String.fromCharCode(960,928))
		.replace(/use/g, String.fromCharCode(933,950))
		.replace(/ure/g, String.fromCharCode(0x10B4))
		.replace(/uve/g, String.fromCharCode(960,965))
		.replace(/ute/g, String.fromCharCode(960,932))
		.replace(/uze/g, String.fromCharCode(960,950))
		.replace(/uye/g, String.fromCharCode(960))
		/* -:- 'oo' + CONSONANT -:- */
		.replace(/ood/g, String.fromCharCode(0x144E,916))
		.replace(/oof/g, String.fromCharCode(0x144E,934))
		.replace(/ooh/g, String.fromCharCode(960))
		.replace(/ook/g, String.fromCharCode(0x144E,0x30B9))
		.replace(/oom/g, String.fromCharCode(960,956))
		.replace(/ool/g, String.fromCharCode(0x144E,923))
		.replace(/oon/g, String.fromCharCode(960,957))
		.replace(/oop/g, String.fromCharCode(960,928))
		.replace(/roo/g, String.fromCharCode(929,960))
		.replace(/oot/g, String.fromCharCode(960,0x0074))
		/* -:- CONSONANT + 'oo' -:- */
		.replace(/boo/g, String.fromCharCode(946,960))
		.replace(/coo/g, String.fromCharCode(0x30B9,960))
		.replace(/doo/g, String.fromCharCode(916,960))
		.replace(/foo/g, String.fromCharCode(934,960))
		.replace(/goo/g, String.fromCharCode(915,960))
		.replace(/hoo/g, String.fromCharCode(951,960))
		.replace(/loo/g, String.fromCharCode(923,960))
		.replace(/moo/g, String.fromCharCode(956,960))
		.replace(/noo/g, String.fromCharCode(957,960))
		.replace(/poo/g, String.fromCharCode(928,960))
		.replace(/oor/g, String.fromCharCode(960,929))
		.replace(/too/g, String.fromCharCode(932,960))
		.replace(/and/g, String.fromCharCode(0x0026))
		.replace(/air/g, String.fromCharCode(228))
		.replace(/bee/g, String.fromCharCode(0x0042))
		.replace(/igh/g, String.fromCharCode(0x0049))
		.replace(/ing/g, String.fromCharCode(0x04A8))
		.replace(/oar/g, String.fromCharCode(0x004F))
		.replace(/ous/g, String.fromCharCode(0x14D0))
		.replace(/rui/g, String.fromCharCode(929,960))
		.replace(/you/g, String.fromCharCode(933));
}


function formatStrVowelPairs1(engStr) { 
	return engStr
		/* o: Î© */
		.replace(/ough/g, String.fromCharCode(937))
		/* o: á‚¶ */
		.replace(/ould/g, String.fromCharCode(0x144E,916))
		/* u: Ð§ */
		.replace(/oung/g, String.fromCharCode(0x0427,0x0AEA))
		/* y: Î¥ */
		.replace(/unif/g, String.fromCharCode(0x0059,957,953,934))
		.replace(/unil/g, String.fromCharCode(0x0059,957,953,923))
		.replace(/unit/g, String.fromCharCode(0x0059,957,0x0074))
		.replace(/unique/g, String.fromCharCode(0x0059,957,0x0045,0x30B9));
}


function formatStrVowelPairs2(engStr) { 
	return engStr
		/* -:- ENGLISH/ENGLISH SINGLE-SYMBOL VOWEL PAIRS -:- */
		/* a: H */
		.replace(/ae/g, String.fromCharCode(0x0048))
		.replace(/ai/g, String.fromCharCode(0x0048))
		.replace(/ay/g, String.fromCharCode(0x0048))
		.replace(/ey/g, String.fromCharCode(0x0048))
		/* a: A */
		.replace(/aa/g, String.fromCharCode(0x0041))
		/* e: E */
		.replace(/ea/g, String.fromCharCode(0x0045))
		.replace(/ee/g, String.fromCharCode(0x0045))
		.replace(/ie/g, String.fromCharCode(0x0045))
		.replace(/yy/g, String.fromCharCode(0x0045))
		/* i: I */
		.replace(/ei/g, String.fromCharCode(0x0049))
		.replace(/ii/g, String.fromCharCode(0x0049))
		.replace(/uy/g, String.fromCharCode(0x0049))
		/* i: Î¹ */
		.replace(/ui/g, String.fromCharCode(953))
		/* o: Î© */
		.replace(/oa/g, String.fromCharCode(937))
		.replace(/oe/g, String.fromCharCode(937))
		/* o: Ïˆ */
		.replace(/au/g, String.fromCharCode(968))
		.replace(/aw/g, String.fromCharCode(968))
		/* u: Ï€ */
		.replace(/oo/g, String.fromCharCode(960))
		.replace(/ue/g, String.fromCharCode(960))
		.replace(/uu/g, String.fromCharCode(960))
		.replace(/ew/g, String.fromCharCode(960))
		/* u: Ï‰ */
		.replace(/ou/g, String.fromCharCode(969))
		.replace(/ow/g, String.fromCharCode(969))
		/* y: Î¥ */
		.replace(/eu/g, String.fromCharCode(933))
		.replace(/yu/g, String.fromCharCode(933))
		/* y: á•Ÿ */
		.replace(/oi/g, String.fromCharCode(0x155F))
		.replace(/oy/g, String.fromCharCode(0x155F))
		/* -:- ENGLISH/ENGLISH DOUBLE-SYMBOL VOWEL PAIRS -:- */
		.replace(/ao/g, String.fromCharCode(0x0048,937))
		.replace(/ia/g, String.fromCharCode(0x0045,0x0041))
		.replace(/eo/g, String.fromCharCode(0x0045,937))
		.replace(/io/g, String.fromCharCode(0x0049,937))
		.replace(/iu/g, String.fromCharCode(0x0049,0x0427))
		.replace(/iy/g, String.fromCharCode(0x0049,955))
		.replace(/ua/g, String.fromCharCode(960,0x0041))
		.replace(/uo/g, String.fromCharCode(960,937))
		.replace(/ya/g, String.fromCharCode(955,0x0041))
		.replace(/ye/g, String.fromCharCode(955,949))
		.replace(/yi/g, String.fromCharCode(955,0x0049))
		.replace(/yo/g, String.fromCharCode(955,937))
		/* -:- ENGLISH/NGMA SINGLE/DOUBLE-SYMBOL VOWEL PAIRS -:- */
		/* a */
		.replace(/aH/g, String.fromCharCode(0x0041,0x0048))
		.replace(/aA/g, String.fromCharCode(0x0041))
		.replace(/aE/g, String.fromCharCode(0x0041,0x0045))
		.replace(/aI/g, String.fromCharCode(0x0049))
		/* e */
		.replace(/eH/g, String.fromCharCode(949,0x0048))
		.replace(/eA/g, String.fromCharCode(949,0x0041))
		.replace(/eE/g, String.fromCharCode(0x0045))
		.replace(/eI/g, String.fromCharCode(0x0049))
		/* i */
		.replace(/iH/g, String.fromCharCode(0x0045,0x0048))
		.replace(/iA/g, String.fromCharCode(0x0049,0x0041))
		.replace(/iE/g, String.fromCharCode(953,0x0045))
		.replace(/iI/g, String.fromCharCode(0x0049))
		/* o */
		.replace(/oH/g, String.fromCharCode(937,0x0048))
		.replace(/oA/g, String.fromCharCode(937,0x0041))
		.replace(/oE/g, String.fromCharCode(937))
		.replace(/oI/g, String.fromCharCode(937,0x0049))
		/* u */
		.replace(/uH/g, String.fromCharCode(960,0x0048))
		.replace(/uA/g, String.fromCharCode(960,0x0041))
		.replace(/uE/g, String.fromCharCode(960,0x0045))
		.replace(/uI/g, String.fromCharCode(960,0x0049));
}


function formatStrConsonants(engStr) { 
	return engStr
		.replace(/cc/g, String.fromCharCode(926))
		.replace(/ch/g, String.fromCharCode(935))
		.replace(/ck/g, String.fromCharCode(0x30B9))
		.replace(/ct/g, String.fromCharCode(0x0043))
		.replace(/ft/g, String.fromCharCode(964))
		.replace(/ly/g, String.fromCharCode(0x01338))
		.replace(/nd/g, String.fromCharCode(0x2207))
		.replace(/ng/g, String.fromCharCode(0x0AEA))
		.replace(/nk/g, String.fromCharCode(0x004E))
		.replace(/nt/g, String.fromCharCode(0x5201))
		.replace(/ph/g, String.fromCharCode(934))
		.replace(/qu/g, String.fromCharCode(0x30B9,948))
		.replace(/sh/g, String.fromCharCode(936))
		.replace(/st/g, String.fromCharCode(0x1560))
		.replace(/th/g, String.fromCharCode(920))
		.replace(/ts/g, String.fromCharCode(0x00DF))
		.replace(/dj/g, String.fromCharCode(967))
		.replace(/dge/g, String.fromCharCode(967));
}


function formatStrVowelConPairs1(engStr) { 
	return engStr
		/* -:- VOWEL(& "W") PAIRS -:- */
		/* a: A */
		.replace(/ab/g, String.fromCharCode(0x0041,946))
		.replace(/ac/g, String.fromCharCode(0x0041,0x30B9))
		.replace(/aC/g, String.fromCharCode(0x0041,0x0043))
		.replace(/ad/g, String.fromCharCode(0x0041,916))
		.replace(/af/g, String.fromCharCode(0x0041,934))
		.replace(/ag/g, String.fromCharCode(0x0041,915))
		.replace(/ah/g, String.fromCharCode(0x0041))
		.replace(/aj/g, String.fromCharCode(0x0041,967))
		.replace(/al/g, String.fromCharCode(0x0041,923))
		.replace(/ak/g, String.fromCharCode(0x0041,0x30B9))
		.replace(/am/g, String.fromCharCode(0x0041,956))
		.replace(/an/g, String.fromCharCode(0x0041,957))
		.replace(/aN/g, String.fromCharCode(0x0041,0x004E))
		.replace(/ap/g, String.fromCharCode(0x0041,928))
		.replace(/ar/g, String.fromCharCode(0x0052))
		.replace(/as/g, String.fromCharCode(0x0041,931))
		.replace(/at/g, String.fromCharCode(0x0466))
		.replace(/av/g, String.fromCharCode(0x0041,965))
		.replace(/ax/g, String.fromCharCode(0x0041,926))
		.replace(/az/g, String.fromCharCode(0X0041,950))
		/* e: E */
		.replace(/by/g, String.fromCharCode(946,0x0045))
		.replace(/cy/g, String.fromCharCode(931,0x0045))
		.replace(/dy/g, String.fromCharCode(916,0x0045))
		.replace(/gy/g, String.fromCharCode(915,0x0045))
		.replace(/ky/g, String.fromCharCode(0x30B9,0x0045))
		.replace(/my/g, String.fromCharCode(956,0x0045))
		.replace(/py/g, String.fromCharCode(928,0x0045))
		.replace(/ny/g, String.fromCharCode(957,0x0045))
		.replace(/ty/g, String.fromCharCode(932,0x0045))
		.replace(/zy/g, String.fromCharCode(950,0X0045))
		/* e: Îµ */
		.replace(/eb/g, String.fromCharCode(949,946))
		.replace(/ec/g, String.fromCharCode(949,0x30B9))
		.replace(/eC/g, String.fromCharCode(949,0x0043))
		.replace(/ed/g, String.fromCharCode(0x2661))
		.replace(/ef/g, String.fromCharCode(949,934))
		.replace(/eg/g, String.fromCharCode(949,915))
		.replace(/ej/g, String.fromCharCode(949,967))
		.replace(/eh/g, String.fromCharCode(949))
		.replace(/ek/g, String.fromCharCode(949,0x30B9))
		.replace(/el/g, String.fromCharCode(0x1430))
		.replace(/em/g, String.fromCharCode(949,956))
		.replace(/en/g, String.fromCharCode(949,957))
		.replace(/eN/g, String.fromCharCode(949,0x004E))
		.replace(/ep/g, String.fromCharCode(949,928))
		.replace(/er/g, String.fromCharCode(0x10B4))
		.replace(/es/g, String.fromCharCode(949,931))
		.replace(/et/g, String.fromCharCode(949,932))
		.replace(/ev/g, String.fromCharCode(949,965))
		.replace(/ex/g, String.fromCharCode(949,926))
		.replace(/ez/g, String.fromCharCode(949,950))
		/* i: Î¹ / I */
		.replace(/ib/g, String.fromCharCode(953,946))
		.replace(/ic/g, String.fromCharCode(953,0x30B9))
		.replace(/iC/g, String.fromCharCode(953,0x0043))
		.replace(/id/g, String.fromCharCode(953,916))
		.replace(/if/g, String.fromCharCode(953,934))
		.replace(/ig/g, String.fromCharCode(953,915))
		.replace(/ih/g, String.fromCharCode(953))
		.replace(/ij/g, String.fromCharCode(953,967))
		.replace(/ik/g, String.fromCharCode(953,0x30B9))
		.replace(/il/g, String.fromCharCode(953,923))
		.replace(/im/g, String.fromCharCode(953,956))
		.replace(/in/g, String.fromCharCode(953,957))
		.replace(/iN/g, String.fromCharCode(953,0x004E))
		.replace(/ip/g, String.fromCharCode(953,928))
		.replace(/ir/g, String.fromCharCode(0x10B4))
		.replace(/is/g, String.fromCharCode(953,931))
		.replace(/it/g, String.fromCharCode(0x0074))
		.replace(/iv/g, String.fromCharCode(953,965))
		.replace(/ix/g, String.fromCharCode(953,926))
		.replace(/iz/g, String.fromCharCode(953,950))
		.replace(/cI/g, String.fromCharCode(931,0x0049))
		/* o: Ïˆ / Î© */
		.replace(/ob/g, String.fromCharCode(968,946))
		.replace(/oc/g, String.fromCharCode(968,0x30B9))
		.replace(/oC/g, String.fromCharCode(968,0x0043))
		.replace(/of/g, String.fromCharCode(968,934))
		.replace(/oh/g, String.fromCharCode(937))
		.replace(/od/g, String.fromCharCode(968,916))
		.replace(/oj/g, String.fromCharCode(968,967))
		.replace(/og/g, String.fromCharCode(968,915))
		.replace(/ol/g, String.fromCharCode(937,923))
		.replace(/ok/g, String.fromCharCode(968,0x30B9))
		.replace(/op/g, String.fromCharCode(968,928))
		.replace(/om/g, String.fromCharCode(968,956))
		.replace(/oN/g, String.fromCharCode(968,0x004E))
		.replace(/on/g, String.fromCharCode(968,957))
		.replace(/or/g, String.fromCharCode(0x004F))
		.replace(/os/g, String.fromCharCode(968,931))
		.replace(/ot/g, String.fromCharCode(968,932))
		.replace(/ov/g, String.fromCharCode(937,965))
		.replace(/ox/g, String.fromCharCode(968,926))
		.replace(/oz/g, String.fromCharCode(968,950))
		/* u: Ð§ */ 
		.replace(/ub/g, String.fromCharCode(0x0427,946))
		.replace(/uc/g, String.fromCharCode(0x0427,0x30B9))
		.replace(/uC/g, String.fromCharCode(0x0427,0x0043))
		.replace(/ud/g, String.fromCharCode(0x0427,916))
		.replace(/uf/g, String.fromCharCode(0x0427,934))
		.replace(/ug/g, String.fromCharCode(0x0427,915))
		.replace(/uh/g, String.fromCharCode(0x0427))
		.replace(/uj/g, String.fromCharCode(0x0427,967))
		.replace(/ul/g, String.fromCharCode(0x0427,923))
		.replace(/uk/g, String.fromCharCode(0x0427,0x30B9))
		.replace(/up/g, String.fromCharCode(0x0427,928))
		.replace(/um/g, String.fromCharCode(0x0427,956))
		.replace(/uN/g, String.fromCharCode(0x0427,0x004E))
		.replace(/un/g, String.fromCharCode(0x0427,957))
		.replace(/ut/g, String.fromCharCode(0x0427,932))
		.replace(/us/g, String.fromCharCode(0x0427,931))
		.replace(/ux/g, String.fromCharCode(0x0427,926))
		.replace(/uv/g, String.fromCharCode(0x0427,965))
		.replace(/uz/g, String.fromCharCode(0x0427,950));
}


function formatStrVowelConPairs2(engStr) { 
	var findPairs = [String.fromCharCode(0x0061),String.fromCharCode(0x30B9),
	String.fromCharCode(0x0061),String.fromCharCode(934),
	String.fromCharCode(0x0061),String.fromCharCode(964),
	String.fromCharCode(0x0061),String.fromCharCode(920),
	String.fromCharCode(0x0061),String.fromCharCode(0x00DF),
	String.fromCharCode(0x0061),String.fromCharCode(936),
	String.fromCharCode(0x0061),String.fromCharCode(0x1560),
	String.fromCharCode(0x0061),String.fromCharCode(0x0AEA),
	String.fromCharCode(0x0061),String.fromCharCode(0x01338),
	String.fromCharCode(0x0061),String.fromCharCode(967),
	String.fromCharCode(0x0043),String.fromCharCode(949),
	String.fromCharCode(0x0065),String.fromCharCode(920),
	String.fromCharCode(0x0065),String.fromCharCode(0x00DF),
	String.fromCharCode(0x0065),String.fromCharCode(936),
	String.fromCharCode(0x0065),String.fromCharCode(0x1560),
	String.fromCharCode(0x0065),String.fromCharCode(0x0AEA),
	String.fromCharCode(0x0065),String.fromCharCode(0x2207),
	String.fromCharCode(0x0065),String.fromCharCode(0x01338),
	String.fromCharCode(0x0065),String.fromCharCode(967),
	String.fromCharCode(0x0065),String.fromCharCode(934),
	String.fromCharCode(0x0065),String.fromCharCode(964),
	String.fromCharCode(0x0065),String.fromCharCode(0x30B9),
	String.fromCharCode(0x0069),String.fromCharCode(920),
	String.fromCharCode(0x0069),String.fromCharCode(0x00DF),
	String.fromCharCode(0x0069),String.fromCharCode(0x1560),
	String.fromCharCode(0x0069),String.fromCharCode(936),
	String.fromCharCode(0x0069),String.fromCharCode(0x2207),
	String.fromCharCode(0x0069),String.fromCharCode(0x01338),
	String.fromCharCode(0x0069),String.fromCharCode(967),
	String.fromCharCode(0x0069),String.fromCharCode(934),
	String.fromCharCode(0x0069),String.fromCharCode(964),
	String.fromCharCode(0x0069),String.fromCharCode(0x30B9),
	String.fromCharCode(0x006F),String.fromCharCode(967),
	String.fromCharCode(0x006F),String.fromCharCode(0x00DF),
	String.fromCharCode(0x006F),String.fromCharCode(920),
	String.fromCharCode(0x006F),String.fromCharCode(936),
	String.fromCharCode(0x006F),String.fromCharCode(0x1560),
	String.fromCharCode(0x006F),String.fromCharCode(0x0AEA),
	String.fromCharCode(0x006F),String.fromCharCode(0x2207),
	String.fromCharCode(0x006F),String.fromCharCode(0x01338),
	String.fromCharCode(0x006F),String.fromCharCode(967),
	String.fromCharCode(0x006F),String.fromCharCode(934),
	String.fromCharCode(0x006F),String.fromCharCode(964),
	String.fromCharCode(0x006F),String.fromCharCode(0x30B9),
	String.fromCharCode(0x0075),String.fromCharCode(967),
	String.fromCharCode(0x0075),String.fromCharCode(0x00DF),
	String.fromCharCode(0x0075),String.fromCharCode(920),
	String.fromCharCode(0x0075),String.fromCharCode(0x1560),
	String.fromCharCode(0x0075),String.fromCharCode(936),
	String.fromCharCode(0x0075),String.fromCharCode(0x0AEA),
	String.fromCharCode(0x0075),String.fromCharCode(0x2207),
	String.fromCharCode(0x0075),String.fromCharCode(0x01338),
	String.fromCharCode(0x0075),String.fromCharCode(967),
	String.fromCharCode(0x0075),String.fromCharCode(934),
	String.fromCharCode(0x0075),String.fromCharCode(964),
	String.fromCharCode(0x0075),String.fromCharCode(0x30B9)];
	var replacePairs = [String.fromCharCode(0x0041),String.fromCharCode(0x30B9),
	String.fromCharCode(0x0041),String.fromCharCode(934),
	String.fromCharCode(0x0041),String.fromCharCode(964),
	String.fromCharCode(0x0041),String.fromCharCode(920),
	String.fromCharCode(0x0041),String.fromCharCode(0x00DF),
	String.fromCharCode(0x0041),String.fromCharCode(936),
	String.fromCharCode(0x0041),String.fromCharCode(0x1560),
	String.fromCharCode(0x0041),String.fromCharCode(0x0AEA),
	String.fromCharCode(0x0041),String.fromCharCode(0x01338),
	String.fromCharCode(0x0041),String.fromCharCode(967),
	String.fromCharCode(931),String.fromCharCode(949),
	String.fromCharCode(949),String.fromCharCode(920),
	String.fromCharCode(949),String.fromCharCode(0x00DF),
	String.fromCharCode(949),String.fromCharCode(936),
	String.fromCharCode(949),String.fromCharCode(0x1560),
	String.fromCharCode(949),String.fromCharCode(0x0AEA),
	String.fromCharCode(949),String.fromCharCode(0x2207),
	String.fromCharCode(949),String.fromCharCode(0x01338),
	String.fromCharCode(949),String.fromCharCode(967),
	String.fromCharCode(949),String.fromCharCode(934),
	String.fromCharCode(949),String.fromCharCode(964),
	String.fromCharCode(949),String.fromCharCode(0x30B9),
	String.fromCharCode(953),String.fromCharCode(920),
	String.fromCharCode(953),String.fromCharCode(0x00DF),
	String.fromCharCode(953),String.fromCharCode(0x1560),
	String.fromCharCode(953),String.fromCharCode(936),
	String.fromCharCode(953),String.fromCharCode(0x2207),
	String.fromCharCode(953),String.fromCharCode(0x01338),
	String.fromCharCode(953),String.fromCharCode(967),
	String.fromCharCode(953),String.fromCharCode(934),
	String.fromCharCode(953),String.fromCharCode(964),
	String.fromCharCode(953),String.fromCharCode(0x30B9),
	String.fromCharCode(936),String.fromCharCode(0x30B9),
	String.fromCharCode(936),String.fromCharCode(0x00DF),
	String.fromCharCode(936),String.fromCharCode(920),
	String.fromCharCode(936),String.fromCharCode(936),
	String.fromCharCode(936),String.fromCharCode(0x1560),
	String.fromCharCode(936),String.fromCharCode(0x0AEA),
	String.fromCharCode(936),String.fromCharCode(0x2207),
	String.fromCharCode(936),String.fromCharCode(0x01338),
	String.fromCharCode(936),String.fromCharCode(967),
	String.fromCharCode(936),String.fromCharCode(934),
	String.fromCharCode(936),String.fromCharCode(964),
	String.fromCharCode(936),String.fromCharCode(0x30B9),
	String.fromCharCode(0x0427),String.fromCharCode(967),
	String.fromCharCode(0x0427),String.fromCharCode(0x00DF),
	String.fromCharCode(0x0427),String.fromCharCode(920),
	String.fromCharCode(0x0427),String.fromCharCode(0x1560),
	String.fromCharCode(0x0427),String.fromCharCode(936),
	String.fromCharCode(0x0427),String.fromCharCode(0x0AEA),
	String.fromCharCode(0x0427),String.fromCharCode(0x2207),
	String.fromCharCode(0x0427),String.fromCharCode(0x01338),
	String.fromCharCode(0x0427),String.fromCharCode(967),
	String.fromCharCode(0x0427),String.fromCharCode(934),
	String.fromCharCode(0x0427),String.fromCharCode(964),
	String.fromCharCode(0x0427),String.fromCharCode(0x30B9)];
	var userA = engStr.split('');
	for (i = 0; i < userA.length-1; i++) {
		for (j = 0; j < findPairs.length; j+=2) {
			if (userA[i] == findPairs[j] && userA[i+1] == findPairs[j+1]) {
				userA[i] = replacePairs[j];
				userA[i+1] = replacePairs[j+1];
			}
		}
	}
	return userA.join('');
}


function replaceConsonants(engStr) {
	return engStr
		.replace(/b/g, String.fromCharCode(946))
		.replace(/d/g, String.fromCharCode(916))
		.replace(/f/g, String.fromCharCode(934))
		.replace(/g/g, String.fromCharCode(915))
		.replace(/h/g, String.fromCharCode(951))
		.replace(/j/g, String.fromCharCode(967))
		.replace(/k/g, String.fromCharCode(0x30B9))
		.replace(/l/g, String.fromCharCode(923))
		.replace(/m/g, String.fromCharCode(956))
		.replace(/n/g, String.fromCharCode(957))
		.replace(/p/g, String.fromCharCode(928))
		.replace(/r/g, String.fromCharCode(929))
		.replace(/s/g, String.fromCharCode(931))
		.replace(/t/g, String.fromCharCode(932))
		.replace(/v/g, String.fromCharCode(965))
		.replace(/w/g, String.fromCharCode(948))
		.replace(/x/g, String.fromCharCode(926))
		.replace(/y/g, String.fromCharCode(955))
		.replace(/z/g, String.fromCharCode(950))
		.replace(/c/g, String.fromCharCode(0x30B9))
		.replace(/u/g, String.fromCharCode(0x0427))
		.replace(/i/g, String.fromCharCode(953));
}


function formatFinalArray1(theFinArr) { 
	return theFinArr.join(' ')
		.replace(/ - /g, '-').replace(/k/g, String.fromCharCode(0x30B9))
		.replace(/q/g, String.fromCharCode(0x30B9));
}


function formatFinalArray2(theFinArr) {
	var soughtPairs = [String.fromCharCode(0x0061),String.fromCharCode(935),
	String.fromCharCode(0x0065),String.fromCharCode(935),
	String.fromCharCode(0x0069),String.fromCharCode(935),
	String.fromCharCode(0x0061),String.fromCharCode(0x00B0),
	String.fromCharCode(0x0065),String.fromCharCode(0x00B0),
	String.fromCharCode(0x0069),String.fromCharCode(0x00B0),
	String.fromCharCode(0x006F),String.fromCharCode(0x00B0),
	String.fromCharCode(0x0427),String.fromCharCode(0x00B0),
	String.fromCharCode(0x10B4),String.fromCharCode(0x0065)];
	var replacePairs = [String.fromCharCode(0x0041),String.fromCharCode(935),
	String.fromCharCode(949),String.fromCharCode(935),
	String.fromCharCode(953),String.fromCharCode(935),
	String.fromCharCode(0x0048),String.fromCharCode(0x00B0),
	String.fromCharCode(0x0045),String.fromCharCode(0x00B0),
	String.fromCharCode(953),String.fromCharCode(0x00B0),
	String.fromCharCode(937),String.fromCharCode(0x00B0),
	String.fromCharCode(960),String.fromCharCode(0x00B0),
	String.fromCharCode(0x0045),String.fromCharCode(929)];
	var userArray = theFinArr.split('');
	for (i = 0; i < userArray.length-1; i++) {
		for (j = 0; j < soughtPairs.length; j+=2) {
			if (userArray[i]==soughtPairs[j] && userArray[i+1]==soughtPairs[j+1]) {
				userArray[i] = replacePairs[j];
				userArray[i+1] = replacePairs[j+1];
			}
		}
	}
	for (k = 0; k < userArray.length; k++) {
		if (userArray[k] == "'") { 
			userArray.splice(k,1);
		} else if ((userArray[k] == " ") && (userArray[k+1] == ".")) {
			userArray.splice(k,2);
			userArray.splice(k,1,String.fromCharCode(0x2216));
		} else if ((userArray[k] == " ") && (userArray[k+1] == "?")) {
			userArray.splice(k,2,"?");
		} else if ((userArray[k] == " ") && (userArray[k+1] == "!")) {
			userArray.splice(k,2,"!");
		} else if ((userArray[k] == String.fromCharCode(953)) && (userArray[k+1] == String.fromCharCode(932))) {
			userArray.splice(k,2,String.fromCharCode(0x0074));
		} else if ((userArray[k] == String.fromCharCode(946)) && (userArray[k+1] == String.fromCharCode(0x0045))) {
			userArray.splice(k,2,String.fromCharCode(0x0042));
		} else if ((userArray[k] == String.fromCharCode(916)) && (userArray[k+1] == String.fromCharCode(0x0045))) {
			userArray.splice(k,2,String.fromCharCode(0x1402));
		} else if ((userArray[k] == String.fromCharCode(0x30B9)) && (userArray[k+1] == String.fromCharCode(931))) {
			userArray.splice(k,2,String.fromCharCode(926));
		} else if ((userArray[k] == String.fromCharCode(923)) && (userArray[k+1] == String.fromCharCode(0x0045))) {
			userArray.splice(k,2,String.fromCharCode(0x01338));
		}
	}
	return userArray.join('').replace(/a/g, String.fromCharCode(0x0041))
		.replace(/e/g, String.fromCharCode(949)).replace(/o/g, String.fromCharCode(968));
}

/******************************************************************************/
/* CONSTANTS++ */
/******************************************************************************/

const N = ' '+String.fromCharCode(0x0063,0x0026,0x0069);
const G = String.fromCharCode(0x0064,0x0065,0x006B);
const M = String.fromCharCode(0x0065,0x0079,0x0063);
const A = String.fromCharCode(0x0061,0x0072,0x0064)+' ';


const QUEST = ' '+String.fromCharCode(0x0032,0x0062,0x006F,0x0072,0x006E,0x006F,
		0x0074,0x0032,0x0062)+' '; /* ' 2bornot2b ' */
const QUESTING = ' '+String.fromCharCode(0x0074,0x006F,0x0020,0x0062,0x0065,
		0x0020,0x006F,0x0072,0x0020,0x006E,0x006F,0x0074,0x0020,0x0074,0x006F,0x0020,
		0x0062,0x0065)+' '; /* ' to be or not to be ' */
const AN1 = ' '+String.fromCharCode(0x0035)+' '; /* ' 5 ' */
const AN2 = ' '+String.fromCharCode(0x0066,0x0069,0x0076,0x0065)+' '; /* ' five ' */


const AP = String.fromCharCode(0x002D,0x003A,0x002D,0x0050,0x0041,0x0052,
		0x0041,0x004D,0x0045,0x0054,0x0045,0x0052,0x0053)+' '; 
const PR = String.fromCharCode(0x0050,0x0041,0x0053,0x0053,0x0045,0x0044);
const OV = String.fromCharCode(0x002D,0x003A,0x002D,0x0053,0x0045,0x0043,
		0x0055,0x0052,0x0049,0x0054,0x0059)+' ';
const ED = String.fromCharCode(0x004D,0x0045,0x0041,0x0053,0x0055,0x0052,0x0045,0x0053);
const IN = ' '+String.fromCharCode(0x0044,0x0045,0x0041,0x0043,0x0054,0x0049,
		0x0056,0x0041,0x0054,0x0045,0x0044,0x002D,0x003A,0x002D);


const GR = String.fromCharCode(0x0057,0x0065,0x006C,0x0063,0x006F,0x006D,0x0065);
const EE = ' '+String.fromCharCode(0x0048,0x006F,0x006D,0x0065,0x002C)+' ';
const TI = String.fromCharCode(0x004D,0x0072,0x002E)+' ';
const NG = String.fromCharCode(0x0052,0x0061,0x006E,0x0064,0x006C,0x0065,0x006D,
		0x0061,0x006E,0x002E);


const ER = String.fromCharCode(0x004F,0x0056,0x0045,0x0052,0x0052,0x0049,0x0044,
		0x0045,0x002D,0x003A,0x002D);

/******************************************************************************/
/* MAIN FUNCTION */
/******************************************************************************/

function createFinalArray(userStrArg) {
	var finalArray      = [];
	if ((userStrArg.toLowerCase() == ' does it work ') || 
			(userStrArg.toLowerCase() == ' does it work? ')) {
		return doesItWork;
	} else if (userStrArg.toLowerCase() == ' i am ') {
		return iAm;
	} else if (userStrArg.toLowerCase() == ' mcr ') {
		return mCr;
	} else {
		var phraseStr = editPunc(userStrArg.split(''));
		var ngmaEditEngArray = formatStrEditEnglish(phraseStr.toLowerCase());
		var ngmaCommonWordsArray = formatStrCommonWords(ngmaEditEngArray);
		var ngmaGeneralPhoneticArray = formatStrGeneralPhonetic(ngmaCommonWordsArray);
		var ngmaVowelConEArray = formatStrVowelConE(ngmaGeneralPhoneticArray);
		var ngmaVowelPairs1Array = formatStrVowelPairs1(ngmaVowelConEArray);
		var ngmaVowelPairs2Array = formatStrVowelPairs2(ngmaVowelPairs1Array);
		var ngmaConsonantsArray = formatStrConsonants(ngmaVowelPairs2Array);
		var ngmaVowelConPairsArray1 = formatStrVowelConPairs1(ngmaConsonantsArray);
		var ngmaVowelConPairsArray2 = formatStrVowelConPairs2(ngmaVowelConPairsArray1);
		var ngmaLetterStr = replaceConsonants(ngmaVowelConPairsArray2);

		ngmaLetterStr.split(' ').forEach((word) => {
			finalArray.push(removeDuplicateLetters(word));
		});

		var formattedFinalArray = formatFinalArray1(finalArray);
		return formatFinalArray2(formattedFinalArray);
	}	
}

const nul = N+G+M+A; /* " c&idekeycard " */
const into = AP+PR+OV+ED+IN; /* "-:-PARAMETERS PASSED-:-SECURITY MEASURES DEACTIVATED-:-" */
const intro = GR+EE+TI+NG; /* "Welcome Home, Mr. Randleman." */
const gotin = OV+ER; /* "-:- SECURITY OVERRIDE -:-"" */
