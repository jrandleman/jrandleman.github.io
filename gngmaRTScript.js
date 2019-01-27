/* Author: Jordan Randleman */

/******************************************************************************/
/* JS NGMA ALPHABET OBJECT */
/******************************************************************************/

var jngma = {
	v: {
		// l(a)p --  l(ay) -- l(aw)
		a: { ah: String.fromCharCode(913), ae: String.fromCharCode(919), aw: String.fromCharCode(968) },
		// (e)bb -- m(e)
		e: { eh: String.fromCharCode(949), ee: String.fromCharCode(917) },
		// b(i)t -- sl(y)
		i: { i: String.fromCharCode(953), ai: String.fromCharCode(921) },
		// oh -- h(ow) -- t(oy)
		o: { oh: String.fromCharCode(937), ow: String.fromCharCode(969), oi: String.fromCharCode(0x155F), oo: String.fromCharCode(0x144E) },
		// (a)bout, (u)p -- b(oo)k -- wh(o) -- you
		u: { uh: String.fromCharCode(0x0427), ou: String.fromCharCode(960), yu: String.fromCharCode(933) }
	},
	c: { // consonants
		b: String.fromCharCode(946), d: String.fromCharCode(916), f: String.fromCharCode(934), g: String.fromCharCode(915),
		h: String.fromCharCode(951), j: String.fromCharCode(967), k: String.fromCharCode(0x30B9), l: String.fromCharCode(923),
		m: String.fromCharCode(956), n: String.fromCharCode(957), p: String.fromCharCode(928), s: String.fromCharCode(931),
		t: String.fromCharCode(932), v: String.fromCharCode(965), w: String.fromCharCode(948), x: String.fromCharCode(926),
		y: String.fromCharCode(955), z: String.fromCharCode(950)
	},
	sc: { // special consonants
		bee: String.fromCharCode(914), dee: String.fromCharCode(0x1402),
		el: String.fromCharCode(0x1430), j: String.fromCharCode(0x04FE)
	},
	r: { // vowel-'r' combos
		ar: String.fromCharCode(0x0052), r: String.fromCharCode(929), air: String.fromCharCode(228),
		eer: String.fromCharCode(0x260B), er: String.fromCharCode(0x10B4), or: String.fromCharCode(0x004F)
	},
	t: { // consonant-'t' combos
		at: String.fromCharCode(0x0466), ate: String.fromCharCode(0x0038), eet: String.fromCharCode(0x0CEE), ft: String.fromCharCode(964),
		tch: String.fromCharCode(0x22C9), nt: String.fromCharCode(0x5201), st: String.fromCharCode(0x1560), ts: String.fromCharCode(0x00DF),
		ct: String.fromCharCode(0x0043)
	},
	h: { ch: String.fromCharCode(935), sh: String.fromCharCode(936), th: String.fromCharCode(920) }, // c/s/t-h combos
	e: { // endings
		ed: String.fromCharCode(0x2661), ly: String.fromCharCode(0x01338), ing: String.fromCharCode(0x04A8), nk: String.fromCharCode(0x004E),
		ous: String.fromCharCode(0x14D0), tion: String.fromCharCode(0x00B0), nd: String.fromCharCode(0x2207), ng: String.fromCharCode(0x0AEA)
	},
	w: { // common single-symbol words
		a: String.fromCharCode(951), an: String.fromCharCode(951),
		am: String.fromCharCode(956), me: String.fromCharCode(956), my: String.fromCharCode(956),
		did: String.fromCharCode(916), do: String.fromCharCode(916),
		in: String.fromCharCode(957), on: String.fromCharCode(957),
		one: String.fromCharCode(0x0031), won: String.fromCharCode(0x0031),
		about: String.fromCharCode(0x223C), and: String.fromCharCode(0x0026), are: String.fromCharCode(0x0052), as: String.fromCharCode(950),
		at: String.fromCharCode(0x0466), ate: String.fromCharCode(0x0038), bc: String.fromCharCode(0x0CEC), be: String.fromCharCode(914),
		but: String.fromCharCode(946), can: String.fromCharCode(0x30B9), could: String.fromCharCode(0x30B9), cash: String.fromCharCode(0x0024),
		peace: String.fromCharCode(0x1210), diff: String.fromCharCode(0x2260), ear: String.fromCharCode(0x260B), end: String.fromCharCode(0x2207),
		for: String.fromCharCode(934), fit: String.fromCharCode(964), go: String.fromCharCode(915), good: String.fromCharCode(0x00A7),
		he: String.fromCharCode(0x2022), how: String.fromCharCode(969), i: String.fromCharCode(921), ink: String.fromCharCode(0x004E),
		is: String.fromCharCode(931), it: String.fromCharCode(0x0074), its: String.fromCharCode(0x00DF), itch: String.fromCharCode(0x22C9),
		kit: String.fromCharCode(0x0043), less: String.fromCharCode(60), more: String.fromCharCode(62), not: String.fromCharCode(0x5201),
		of: String.fromCharCode(965), or: String.fromCharCode(0x004F), left: String.fromCharCode(171), right: String.fromCharCode(187),
		man: String.fromCharCode(0x2642), person: String.fromCharCode(0x1E8A), put: String.fromCharCode(928), same: String.fromCharCode(0x003D),
		she: String.fromCharCode(936), shun: String.fromCharCode(0x00B0), sit: String.fromCharCode(0x1560), so: String.fromCharCode(0x2234),
		then: String.fromCharCode(0x0D24), the: String.fromCharCode(920), to: String.fromCharCode(932), will: String.fromCharCode(923),
		well: String.fromCharCode(0x1430), would: String.fromCharCode(948), yeah: String.fromCharCode(955), you: String.fromCharCode(933)
	},
	p: { // punctuation
		p: String.fromCharCode(0x2216), ep: String.fromCharCode(0x002E), c: String.fromCharCode(0x002D), ec: String.fromCharCode(0x002C),
		m: String.fromCharCode(0x2014), col: String.fromCharCode(0x003A), fs: String.fromCharCode(0x002F), bs: String.fromCharCode(0x005C),
		fb: String.fromCharCode(0x005B), bb: String.fromCharCode(0x005D), at: String.fromCharCode(0x0040)
	},
	ca: { // capital ABC's
		a: String.fromCharCode(0x0041), b: String.fromCharCode(0x0042), c: String.fromCharCode(0x0043), d: String.fromCharCode(0x0044),
		e: String.fromCharCode(0x0045), f: String.fromCharCode(0x0046), g: String.fromCharCode(0x0047), h: String.fromCharCode(0x0048),
		i: String.fromCharCode(0x0049), j: String.fromCharCode(0x004A), k: String.fromCharCode(0x004B), l: String.fromCharCode(0x004C),
		m: String.fromCharCode(0x004D), n: String.fromCharCode(0x004E), o: String.fromCharCode(0x004F), p: String.fromCharCode(0x0050),
		q: String.fromCharCode(0x0051), r: String.fromCharCode(0x0052), s: String.fromCharCode(0x0053), t: String.fromCharCode(0x0054),
		u: String.fromCharCode(0x0055), v: String.fromCharCode(0x0056), w: String.fromCharCode(0x0057), x: String.fromCharCode(0x0058),
		y: String.fromCharCode(0x0059), z: String.fromCharCode(0x005A)
	},
	la: { // lowercase abc's
		a: String.fromCharCode(0x0061), b: String.fromCharCode(0x0062), c: String.fromCharCode(0x0063), d: String.fromCharCode(0x0064),
		e: String.fromCharCode(0x0065), f: String.fromCharCode(0x0066), g: String.fromCharCode(0x0067), h: String.fromCharCode(0x0068),
		i: String.fromCharCode(0x0069), j: String.fromCharCode(0x006A), k: String.fromCharCode(0x006B), l: String.fromCharCode(0x006C),
		m: String.fromCharCode(0x006D), n: String.fromCharCode(0x006E), o: String.fromCharCode(0x006F), p: String.fromCharCode(0x0070),
		q: String.fromCharCode(0x0071), r: String.fromCharCode(0x0072), s: String.fromCharCode(0x0073), t: String.fromCharCode(0x0074),
		u: String.fromCharCode(0x0075), v: String.fromCharCode(0x0076), w: String.fromCharCode(0x0077), x: String.fromCharCode(0x0078),
		y: String.fromCharCode(0x0079), z: String.fromCharCode(0x007A)
	},
	n: { // numbers
		o: String.fromCharCode(0x0030), i: String.fromCharCode(0x0031), ii: String.fromCharCode(0x0032), iii: String.fromCharCode(0x0033),
		iv: String.fromCharCode(0x0034), v: String.fromCharCode(0x0035), vi: String.fromCharCode(0x0036), vii: String.fromCharCode(0x0037),
		iix: String.fromCharCode(0x0038), ix: String.fromCharCode(0x0039)
	},
	s: String.fromCharCode(0x0020)
};

// vowel types
const va = jngma.v.a, ve = jngma.v.e, vi = jngma.v.i, vo = jngma.v.o, vu = jngma.v.u;
// consonant types
const cn = jngma.c, sp = jngma.sc;
// vowel-r & consonant-t combos
const rc = jngma.r, tc = jngma.t;
// upper & lowercase alphabet
const hi = jngma.ca, lo = jngma.la;

const h = jngma.h; // C/S/T-H combos
const end = jngma.e; // endings
const w = jngma.w; // words
const p = jngma.p; // punctuation
const num = jngma.n; // numbers
const s = jngma.s; // space

/******************************************************************************/
/* INFO FUNCTIONS */
/******************************************************************************/

function aboutNgma() {
	alert("I created the NGMA shorthand with phonetic & pictographic"+
		" roots. \n\nOrignially developed to speed up class note-taking,"+
		" NGMA is designed to decrease the character-to-concept ratio"+
		" of written word relative to that of English, along with an"+
		" additional layer of personal privacy.\n\n=> Enter text to be translated"+
		" in the boxes below, then click the corresponding arrow to convert from"+
		" English to NGMA or vice versa.");
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
			myWindow.document.write("<p style='font-size:10px'><b><i><span style='float:left;'>NGMA &#x00A9; Jordan Randleman</span><span style='float:right;'>https://jrandleman.github.io/index.html</span></i></b></p><br>");
			myWindow.document.write("<center style='font-family:arial'><h1><u><i>NGMA Conversion:</i></u></h1><p style='font-size:22px'><b>"+ntext+"</b></p></center>");
			myWindow.print();
			myWindow.close();
		} else if ((printTxt == '2' || printTxt == '(2)') || printTxt == "english") {
			var etext = document.getElementById("nTIn").value;
			myWindow = window.open("", "myWindow", "width=1500,height=1000");
			myWindow.document.write("<p style='font-size:10px'><b><i><span style='float:left;'>NGMA &#x00A9; Jordan Randleman</span><span style='float:right;'>https://jrandleman.github.io/index.html</span></i></b></p><br>");
			myWindow.document.write("<center><h1><u><i style='font-family:arial'>English Reversion:</i></u></h1><p style='font-size:22px'><b>"+etext+"</b></p></center>");
			myWindow.print();
			myWindow.close();
		} else {
			var ntext = document.getElementById("eTIn").value;
			var etext = document.getElementById("nTIn").value;
			myWindow = window.open("", "myWindow", "width=1500,height=1000");
			myWindow.document.write("<p style='font-size:10px'><b><i><span style='float:left;'>NGMA &#x00A9; Jordan Randleman</span><span style='float:right;'>https://jrandleman.github.io/index.html</span></i></b></p><br>");
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
	document.getElementById('eTIn').placeholder = ve.eh+tc.nt+rc.er + "  " + cn.y+vo.oh +
		"\n" + cn.n+cn.g+cn.m+va.ah;
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
const iAm = cn.j+va.aw+cn.n+' '+cn.g+va.aw+cn.l+cn.t;
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
		} else if (phraseArr2[i] == p.p) {
			phraseArr2.splice(i,1," "+p.p+" ");
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
		if (phrase[i] == p.p) {
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

	ngmaCharStr.split(' ').forEach((word) => { finalArr.push(removeDuplicateLetters(word)); });

	var formattedFinalArr = formatFinalArray1(finalArr);
	return formatFinalArray2(formattedFinalArr);
}

function generateRevPhrase() { 
	var revEng = [];
	var arr = getNgmaString();
	if (arr == 123) return 123;

	arr.split(' ').forEach((word) => { revEng.push(passRevWords(word)); });

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
	var rPLen = rPArr.join('').length;
	for(let i = 0; rPArr[i] == ' ';) rPArr.splice(i,1);
	for(let i = rPLen-1; rPArr[i] == ' ' && rPArr[i-1] == ' '; i--) rPArr.splice(i,1);
	document.getElementById("nTIn").value = rPArr.join('');
	document.getElementById('ngmaEnter1').scrollIntoView();
}

/******************************************************************************/
/* DIY */
/******************************************************************************/

const title1 = p.c+p.col+p.c+s+hi.n+hi.g+hi.m+hi.a+s+hi.k+hi.e+hi.y+s+p.c+p.col+p.c;

const title2 = "-:- CONSONANTS -:-";
const consonantL = "(B: "+cn.b+") (D: "+cn.d+") (F: "+cn.f+") (G: "+cn.g+")"+
" (H: "+cn.h+") (J: "+cn.j+") (K: "+cn.k+") (L: "+cn.l+") (M: "+cn.m+") (N: "+cn.n+")"+
" (P: "+cn.p+") (R: "+rc.r+") (S: "+cn.s+") (T: "+cn.t+") (V: "+cn.v+") (W: "+cn.w+")"+
" (X: "+cn.x+") (Y: "+cn.y+") (Z: "+cn.z+")";

const title3 = "-:- VOWELS -:-";
const vowelL1 = "[l(a)st: "+va.ah+"] [l(a)te: "+va.ae+"] [l(i)st: "+vi.i+"]"+
" [l(e)st: "+ve.eh+"] [l(ee)k: "+ve.ee+"] [l(u)ll: "+vu.uh+"] [l(oo)k: "+vo.oo+"]";
const vowelL2 = "[l(o)se: "+vu.ou+"] [l(o)st: "+va.aw+"] [l(ou)d: "+vo.ow+"]"+
" [l(oa)d: "+vo.oh+"] [(u)nit: "+vu.yu+"] [b(oi)l: "+vo.oi+"] [b(i)le: "+vi.ai+"]";

const title4 = "-:- T/S/C + H -:-";
const conH = "('th': "+h.th+") ('sh': "+h.sh+") ('ch': "+h.ch+")";

const title5 = "-:- R/N COMBINATIONS -:-";
const conRN = "('are': "+rc.ar+") ('air': "+rc.air+") ('ear': "+rc.eer+")"+
" ('er': "+rc.er+") ('or': "+rc.or+") ('nd': "+end.nd+") ('nk': "+end.nk+")"+
" ('nt': "+tc.nt+") ('ng': "+end.ng+") ('ing': "+end.ing+")";

const title6 = "-:- T COMBINATIONS -:-";
const conT = "('ft': "+tc.ft+") ('st': "+tc.st+") ('it': "+lo.t+")"+
" ('ct': "+tc.ct+") ('at': "+tc.at+") ('ts': "+tc.ts+") ('eet': "+tc.eet+")";

const title7 = "-:- CONSONANT COMBINATIONS -:-";
const conComb = "('bee': "+sp.bee+") ('dee': "+sp.dee+") ('-ed': "+end.ed+")"+
" ('-ly': "+end.ly+") ('el': "+sp.el+") (vi(s)ion: "+sp.j+") (ac(tion): "+end.tion+")"+
" <br> (delic(ious): "+end.ous+") (comma: -) (period: "+p.p+")";

const title8 = "-:- COMMON WORDS -:-";
const comW1 = "(a,an: "+w.a+") (and: "+w.and+") (are: "+w.are+") (as: "+w.as+")"+
" (at: "+w.at+") (ate: "+w.ate+") (be: "+w.be+") (because: "+w.bc+") (but: "+w.but+")"+
" <br> (can: "+w.can+") (do,did: "+w.do+") (ear: "+w.ear+") (end: "+w.end+") (for: "+w.for+")";
const comW2 = "(go: "+w.go+") (good: "+w.good+") (how: "+w.how+") (I: "+w.i+")"+
" (in: "+w.in+") (is: "+w.is+") (it: "+w.it+") (its: "+w.its+") (left: "+w.left+")"+
" (less: "+w.less+") (more: "+w.more+") (my: "+w.my+") (not: "+w.not+") (of: "+w.of+")"+
" (peace: "+w.peace+") (person: "+w.person+")";
const comW3 = "(put: "+w.put+") (right: "+w.right+") (she: "+w.she+") (so: "+w.so+")"+
" (the: "+w.the+") (then: "+w.then+") (to: "+w.to+") (well: "+w.well+") (will: "+w.will+")"+
" <br> (with: "+cn.w+vi.i+") (would: "+w.would+") (yeah: "+w.yeah+") (you: "+w.you+")"+
" (different: "+w.diff+")";

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
	for (let i = 0; i < oldString.length; i++) if (oldString[i] != oldString[i-1]) newNgmaStr += oldString[i];
	return newNgmaStr;
}


function editPunc(phraseArr) {
	var len = phraseArr.length;
	for (let i = 0; i < len; i++) {
		if ((phraseArr[i] == " " && phraseArr[i+1] == ".") && (phraseArr[i+2] == "." && phraseArr[i+3] == ".")) phraseArr.splice(i,4," ,");
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
		.replace(/,/g, '-').replace(/tion/g, end.tion).replace(/tch/g, 'ch')
		.replace(/can't/g, "can not").replace(/le /g, 'l ').replace(/cious/g, h.sh+end.ous)
		.replace(/ci/g, cn.s+lo.i).replace(/ kn/g, ' '+cn.n).replace(/cq/g, lo.q)
		.replace(/'d/g, ' would').replace(/i'm/g, 'I A'+cn.m).replace(/'ll/g, ' will')
		.replace(/'re/g, ' are').replace(/n't/g, ' not').replace(/'ve/g, ' have')
		.replace(/ces /g, 'cez ').replace(/ded /g, 'de'+end.ed+' ').replace(/ses /g, 'sez ');
}


function formatStrCommonWords(engStr) {
	return engStr
		.replace(/ a /g, ' '+w.a+' ').replace(/ i /g, ' '+w.i+' ').replace(/ an /g, ' '+w.an+' ')
		.replace(/ by /g, ' '+cn.b+vi.ai+' ').replace(/ as /g, ' '+w.as+' ').replace(/ be /g, ' '+w.be+' ')
		.replace(/ do /g, ' '+w.do+' ').replace(/ go /g, ' '+w.go+' ').replace(/ he /g, ' '+w.he+' ') 
		.replace(/ in /g, ' '+w.in+' ').replace(/ is /g, ' '+w.is+' ').replace(/ it /g, ' '+w.it+' ')
		.replace(/ its /g, ' '+w.its+' ').replace(/ me /g, ' '+cn.m+'E ').replace(/ my /g, ' '+w.my+' ')
		.replace(/ no /g, ' '+cn.n+vo.oh+' ').replace(/ not /g, ' '+w.not+' ').replace(/ of /g, ' '+w.of+' ')
		.replace(/ on /g, ' '+va.aw+cn.n+' ').replace(/ so /g, ' '+w.so+' ').replace(/ to /g, ' '+w.to+' ')
		.replace(/ we /g, ' '+cn.w+ve.ee+' ').replace(/ who /g, ' '+cn.h+vu.ou+' ').replace(/ why /g, ' '+cn.w+vi.ai+' ')
		.replace(/ air /g, ' '+rc.air+' ').replace(/ are /g, ' '+rc.ar+' ').replace(/ but /g, ' '+cn.b+' ')
		.replace(/ can /g, ' '+w.can+' ').replace(/ did /g, ' '+cn.d+vi.i+cn.d+' ').replace(/ ear /g, ' '+rc.eer+' ')
		.replace(/ end /g, ' '+end.nd+' ').replace(/ for /g, ' '+w.for+' ').replace(/ how /g, ' '+w.how+' ')
		.replace(/ put /g, ' '+w.put+' ').replace(/ she /g, ' '+w.she+' ').replace(/ sy/g, ' '+cn.s+vi.i)
		.replace(/ the /g, ' '+w.the+' ').replace(/ use /g, ' '+vu.yu+cn.z+' ').replace(/ you /g, ' '+w.you+' ')
		.replace(/ been /g, ' '+cn.b+cn.n+' ').replace(/ does /g, ' '+cn.d+vu.uh+cn.z+' ').replace(/ good /g, ' '+w.good+' ')
		.replace(/ have /g, ' '+cn.h+cn.v+' ').replace(/ left /g, ' '+w.left+' ').replace(/ less /g, ' '+w.less+' ')
		.replace(/ more /g, ' '+w.more+' ').replace(/ once /g, ' '+cn.w+vu.uh+cn.n+cn.s+' ').replace(/ into /g, ' '+tc.nt+vu.ou+' ')
		.replace(/ this /g, ' '+h.th+cn.s+' ').replace(/ well /g, ' '+w.well+' ').replace(/ will /g, ' '+w.will+' ')
		.replace(/ with /g, ' '+cn.w+vi.i+' ').replace(/ yeah /g, ' '+w.yeah+' ').replace(/ your /g, ' '+cn.y+vo.oh+' ')
		.replace(/ right /g, ' '+w.right+' ').replace(/ could /g, ' '+w.could+' ').replace(/ would /g, ' '+w.would+' ')
		.replace(/ were /g, ' '+cn.w+rc.er+' ').replace(/ where /g, ' '+cn.w+rc.air+' ').replace(/ whol /g, ' '+cn.h+vo.oh+cn.l+' ')
		.replace(/ hello /g, ' '+cn.h+sp.el+vo.oh+' ').replace(/ peopl /g, ' '+w.person+' ').replace(/ because /g, ' '+w.bc+' ')
		.replace(/ therefore /g, ' '+w.so+' ').replace(/ through /g, ' '+h.th+rc.r+vu.ou+' ')
		.replace(/ throughout /g, ' '+h.th+rc.r+vu.ou+vo.ow+cn.t+' ').replace(/ there /g, ' '+h.th+rc.air+' ')
		.replace(/ their /g, ' '+h.th+rc.air+' ').replace(/ they're /g, ' '+h.th+rc.air+' ')
		/* -:- SINGLE-NUMBERS TO WORDS SPACED -:- */
		.replace(/ 1 /g, ' '+cn.w+vu.uh+cn.n+' ').replace(/ 2 /g, ' '+cn.t+vu.ou+' ').replace(/ 3 /g, ' '+h.th+rc.r+ve.ee+' ')
		.replace(/ 4 /g, ' '+cn.f+rc.or+' ').replace(/ 5 /g, ' '+cn.f+vi.ai+cn.v+' ').replace(/ 6 /g, ' '+cn.s+vi.i+cn.x+' ')
		.replace(/ 7 /g, ' '+cn.s+ve.eh+cn.v+ve.eh+cn.n+' ').replace(/ 9 /g, ' '+cn.n+vi.ai+cn.n+' ').replace(/ 0 /g, ' '+cn.z+rc.eer+vo.oh+' ');
}


function formatStrGeneralPhonetic(engStr) {
	return engStr
		.replace(/acco/g, va.ah+cn.k+lo.o).replace(/aught/g, va.aw+cn.t).replace(/cess/g, cn.s+ve.eh+cn.s)
		.replace(/chill/g, w.peace).replace(/tious/g, h.sh+end.ous).replace(/randleman/g, rc.r+w.and+sp.el+w.man)
		.replace(/behind/g, sp.bee+cn.h+vi.ai+end.nd).replace(/blind/g, cn.b+cn.l+vi.ai+end.nd).replace(/c&ide/g, cn.k+w.and+hi.e+cn.d)
		.replace(/difference/g, w.diff).replace(/different/g, w.diff).replace(/ engi/g, s+ve.eh+cn.n+cn.j+lo.i)
		.replace(/human/g, w.person).replace(/inged/g, cn.n+cn.j+end.ed).replace(/inger/g, end.ing+rc.er)
		.replace(/inges/g, cn.n+cn.j+cn.z).replace(/iously/g, hi.e+end.ous+end.ly).replace(/ourse/g, rc.or+cn.s)
		.replace(/ously/g, end.ous+end.ly).replace(/ought/g, va.aw+cn.t).replace(/tough/g, cn.t+vu.uh+cn.f)
		.replace(/rough/g, rc.r+vu.uh+cn.f).replace(/peace/g, w.peace).replace(/people/g, w.person)
		.replace(/person/g, w.person).replace(/ary /g, rc.air+hi.e+s).replace(/ery /g, rc.er+hi.e+s)
		.replace(/ory /g, rc.or+hi.e+s).replace(/ toge/g, s+cn.t+vu.ou+cn.g+ve.eh).replace(/ture/g, h.ch+rc.er)
		.replace(/type/g, cn.t+vi.ai+cn.p).replace(/angs/g, va.ah+end.ng+cn.z).replace(/bear/g, cn.b+rc.air)
		.replace(/bind/g, cn.b+vi.ai+end.nd).replace(/come/g, cn.k+vu.uh+cn.m).replace(/eige/g, va.ae+sp.j)
		.replace(/eigh/g, va.ae).replace(/eate/g, tc.eet).replace(/find/g, cn.f+vi.ai+end.nd)
		.replace(/ighs/g, vi.ai+cn.z).replace(/ight/g, vi.ai+cn.t).replace(/inge/g, cn.n+cn.j)
		.replace(/ious/g, ve.ee+end.ous).replace(/ings/g, end.ing+cn.z).replace(/itch/g, w.itch)
		.replace(/kind/g, cn.k+vi.ai+end.nd).replace(/oate/g, vo.oh+cn.t).replace(/mind/g, cn.m+vi.ai+end.nd)
		.replace(/ngma/g, cn.n+cn.g+cn.m+va.ah).replace(/oose/g, vu.ou+cn.s).replace(/pear/g, cn.p+rc.air)
		.replace(/psych/g, cn.s+vi.ai+cn.k).replace(/rind/g, rc.r+vi.ai+end.nd).replace(/sion/g, sp.j+vu.uh+cn.n)
		.replace(/sure/g, sp.j+rc.er).replace(/than/g, h.th+va.ah+cn.n).replace(/then/g, w.then)
		.replace(/udgm/g, vu.uh+cn.j+cn.m).replace(/ungs/g, vu.uh+end.ng+cn.z).replace(/wear/g, cn.w+rc.air)
		.replace(/well/g, cn.w+sp.el).replace(/xury/g, sp.j+rc.er+ve.ee).replace(/acc/g, va.ah+cn.x)
		.replace(/ack/g, va.ah+cn.k).replace(/ang/g, va.ah+end.ng).replace(/dee/g, sp.dee)
		.replace(/eat/g, tc.eet).replace(/eck/g, ve.eh+cn.k).replace(/eek/g, ve.ee+cn.k)
		.replace(/eet/g, tc.eet).replace(/ess/g, ve.eh+cn.s).replace(/ete/g, tc.eet)
		.replace(/iar/g, vi.ai+rc.ar).replace(/ick/g, vi.i+cn.k).replace(/ign/g, vi.ai+cn.n)
		.replace(/ire/g, vi.ai+rc.ar).replace(/ism/g, vi.i+cn.z+cn.m).replace(/key/g, cn.k+ve.ee)
		.replace(/man/g, w.man).replace(/nce/g, cn.n+cn.s).replace(/oat/g, vo.oh+cn.t)
		.replace(/ock/g, va.aw+cn.k).replace(/out/g, vo.ow+cn.t).replace(/psy/g, cn.s+vi.ai)
		.replace(/sch/g, cn.s+cn.k).replace(/uck/g, vu.uh+cn.k).replace(/ung/g, vu.uh+end.ng)
		.replace(/wel/g, cn.w+sp.el).replace(/wh/g, 'w')
		/* -:- 'CE' COMBINATIONS -:- */
		.replace(/ace/g, va.ae+cn.s).replace(/ece/g, ve.ee+cn.s).replace(/ice/g, vi.ai+cn.s)
		.replace(/oce/g, vo.oh+cn.s).replace(/uce/g, vu.ou+cn.s).replace(/ce /g, 's ')
		/* -:- '-RE' COMBINATIONS -:- */
		.replace(/ bare /g, ' '+cn.b+rc.air+' ').replace(/ dare /g, ' '+cn.d+rc.air+' ')
		.replace(/ fare /g, ' '+cn.f+rc.air+' ').replace(/ hare /g, ' '+cn.h+rc.air+' ')
		.replace(/ mare /g, ' '+cn.m+rc.air+' ').replace(/ rare /g, ' '+rc.r+rc.air+' ')
		.replace(/ care /g, ' '+cn.k+rc.air+' ').replace(/ pure /g, ' '+cn.p+cn.y+rc.er+' ')
		.replace(/ cure /g, ' '+cn.k+cn.y+rc.er+' ');
}


function formatStrVowelConE(engStr) { 
	return engStr
		/* -:- VOWEL + CONSONANT + 'E' -:- */
		.replace(/abe/g, va.ae+cn.b).replace(/afe/g, va.ae+cn.f).replace(/ade/g, va.ae+cn.d)
		.replace(/age/g, va.ae+cn.j).replace(/ake/g, va.ae+cn.k).replace(/ale/g, va.ae+cn.l)
		.replace(/ame/g, va.ae+cn.m).replace(/ape/g, va.ae+cn.p).replace(/ane/g, va.ae+cn.n)
		.replace(/ase/g, va.ae+cn.s).replace(/are/g, rc.ar).replace(/ave/g, va.ae+cn.v)
		.replace(/ate/g, tc.ate).replace(/aze/g, va.ae+cn.z).replace(/aye/g, va.ae)
		/* -:- */
		.replace(/ebe/g, ve.ee+cn.b).replace(/efe/g, ve.ee+cn.f).replace(/ede/g, ve.ee+cn.d)
		.replace(/ege/g, ve.ee+cn.j).replace(/eke/g, ve.ee+cn.k).replace(/ele/g, ve.ee+cn.l)
		.replace(/eme/g, ve.ee+cn.m).replace(/epe/g, ve.ee+cn.p).replace(/ene/g, ve.ee+cn.n)
		.replace(/ere/g, ve.ee+rc.r).replace(/ese/g, ve.ee+cn.s).replace(/ete/g, tc.eet)
		.replace(/eve/g, ve.ee+cn.v).replace(/eye/g, vi.ai).replace(/eze/g, ve.ee+cn.z)
		/* -:-  */
		.replace(/ibe/g, vi.ai+cn.b).replace(/ide/g, vi.ai+cn.d).replace(/ife/g, vi.ai+cn.f)
		.replace(/ige/g, vi.ai+cn.j).replace(/ike/g, vi.ai+cn.k).replace(/ile/g, vi.ai+cn.l)
		.replace(/ime/g, vi.ai+cn.m).replace(/ine/g, vi.ai+cn.n).replace(/ipe/g, vi.ai+cn.p)
		.replace(/ire/g, vi.ai+rc.r).replace(/ise/g, vi.ai+cn.s).replace(/ive/g, vi.ai+cn.v)
		.replace(/ite/g, vi.ai+cn.t).replace(/ize/g, vi.ai+cn.z)
		/* -:- */
		.replace(/obe/g, vo.oh+cn.b).replace(/ode/g, vo.oh+cn.d).replace(/ofe/g, vo.oh+cn.f)
		.replace(/oge/g, vo.oh+cn.j).replace(/oke/g, vo.oh+cn.k).replace(/ole/g, vo.oh+cn.l)
		.replace(/ome/g, vo.oh+cn.m).replace(/one/g, vo.oh+cn.n).replace(/ope/g, vo.oh+cn.p)
		.replace(/ose/g, vo.oh+cn.z).replace(/ore/g, rc.or).replace(/ove/g, vo.oh+cn.v)
		.replace(/ote/g, vo.oh+cn.t).replace(/oze/g, vo.oh+cn.z).replace(/oye/g, vo.oi)
		/* -:- */
		.replace(/ube/g, vu.ou+cn.b).replace(/ude/g, vu.ou+cn.d).replace(/ufe/g, vu.ou+cn.f)
		.replace(/uge/g, vu.ou+cn.j).replace(/uke/g, vu.ou+cn.k).replace(/ule/g, vu.ou+cn.l)
		.replace(/ume/g, vu.ou+cn.m).replace(/une/g, vu.ou+cn.n).replace(/upe/g, vu.ou+cn.p)
		.replace(/use/g, vu.yu+cn.z).replace(/ure/g, rc.er).replace(/uve/g, vu.ou+cn.v)
		.replace(/ute/g, vu.ou+cn.t).replace(/uze/g, vu.ou+cn.z).replace(/uye/g, vu.ou)
		/* -:- 'oo' + CONSONANT -:- */
		.replace(/ood/g, vo.oo+cn.d).replace(/oof/g, vo.oo+cn.f).replace(/ooh/g, vu.ou)
		.replace(/ook/g, vo.oo+cn.k).replace(/oom/g, vu.ou+cn.m).replace(/ool/g, vo.oo+cn.l)
		.replace(/oon/g, vu.ou+cn.n).replace(/oop/g, vu.ou+cn.p).replace(/roo/g, rc.r+vu.ou)
		.replace(/oot/g, vu.ou+lo.t)
		/* -:- CONSONANT + 'oo' -:- */
		.replace(/boo/g, cn.b+vu.ou).replace(/coo/g, cn.k+vu.ou).replace(/doo/g, cn.d+vu.ou)
		.replace(/foo/g, cn.f+vu.ou).replace(/goo/g, cn.g+vu.ou).replace(/hoo/g, cn.h+vu.ou)
		.replace(/loo/g, cn.l+vu.ou).replace(/moo/g, cn.m+vu.ou).replace(/noo/g, cn.n+vu.ou)
		.replace(/poo/g, cn.p+vu.ou).replace(/oor/g, vu.ou+rc.r).replace(/too/g, cn.t+vu.ou)
		.replace(/and/g, w.and).replace(/air/g, rc.air).replace(/bee/g, sp.bee)
		.replace(/igh/g, vi.ai).replace(/ing/g, end.ing).replace(/oar/g, rc.or)
		.replace(/ous/g, end.ous).replace(/rui/g, rc.r+vu.ou).replace(/you/g, vu.yu);
}


function formatStrVowelPairs1(engStr) { 
	return engStr
		.replace(/ough/g, vo.oh).replace(/ould/g, vo.oo+cn.d).replace(/oung/g, vu.uh+end.ng)
		.replace(/unif/g, vu.yu+cn.n+vi.i+cn.f).replace(/unil/g, vu.yu+cn.n+vi.i+cn.l)
		.replace(/unit/g, vu.yu+cn.n+lo.t).replace(/unique/g, vu.yu+cn.n+ve.ee+cn.k);
}


function formatStrVowelPairs2(engStr) { 
	return engStr
		/* -:- ENGLISH/ENGLISH SINGLE-SYMBOL VOWEL PAIRS -:- */
		.replace(/ae/g, va.ae).replace(/ai/g, va.ae).replace(/ay/g, va.ae).replace(/ey/g, va.ae) /* b(ay) */
		.replace(/aa/g, va.ah) /* b(a)d */
		.replace(/ea/g, ve.ee).replace(/ee/g, ve.ee).replace(/ie/g, ve.ee).replace(/yy/g, ve.ee) /* b(ee) */
		.replace(/ei/g, vi.ai).replace(/ii/g, vi.ai).replace(/uy/g, vi.ai) /* b(ye) */
		.replace(/ui/g, vi.i) /* b(i)d */
		.replace(/oa/g, vo.oh).replace(/oe/g, vo.oh) /* b(oa)t */
		.replace(/au/g, va.aw).replace(/aw/g, va.aw) /* b(aw)l */
		.replace(/oo/g, vu.ou).replace(/ue/g, vu.ou).replace(/uu/g, vu.ou).replace(/ew/g, vu.ou) /* b(oo) */
		.replace(/ou/g, vo.ow).replace(/ow/g, vo.ow) /* b(ou)t */
		.replace(/eu/g, vu.yu).replace(/yu/g, vu.yu) /* (you) */
		.replace(/oi/g, vo.oi).replace(/oy/g, vo.oi) /* b(oy) */
		/* -:- ENGLISH/ENGLISH DOUBLE-SYMBOL VOWEL PAIRS -:- */
		.replace(/ao/g, va.ae+vo.oh).replace(/ia/g, ve.ee+va.ah).replace(/eo/g, ve.ee+vo.oh)
		.replace(/io/g, vi.ai+vo.oh).replace(/iu/g, vi.ai+vu.uh).replace(/iy/g, vi.ai+cn.y)
		.replace(/ua/g, vu.ou+va.ah).replace(/uo/g, vu.ou+vo.oh).replace(/ya/g, cn.y+va.ah)
		.replace(/ye/g, cn.y+ve.eh).replace(/yi/g, cn.y+vi.ai).replace(/yo/g, cn.y+vo.oh)
		/* -:- ENGLISH/NGMA SINGLE/DOUBLE-SYMBOL VOWEL PAIRS -:- */
		/* a */
		.replace(/aH/g, va.ah+va.ae).replace(/aA/g, va.ah)
		.replace(/aE/g, va.ah+ve.ee).replace(/aI/g, vi.ai)
		/* e */
		.replace(/eH/g, ve.eh+va.ae).replace(/eA/g, ve.eh+va.ah)
		.replace(/eE/g, ve.ee).replace(/eI/g, vi.ai)
		/* i */
		.replace(/iH/g, ve.ee+va.ae).replace(/iA/g, vi.ai+va.ah)
		.replace(/iE/g, vi.i+ve.ee).replace(/iI/g, vi.ai)
		/* o */
		.replace(/oH/g, vo.oh+va.ae).replace(/oA/g, vo.oh+va.ah)
		.replace(/oE/g, vo.oh).replace(/oI/g, vo.oh+vi.ai)
		/* u */
		.replace(/uH/g, vu.ou+va.ae).replace(/uA/g, vu.ou+va.ah)
		.replace(/uE/g, vu.ou+ve.ee).replace(/uI/g, vu.ou+vi.ai);
}


function formatStrConsonants(engStr) { 
	return engStr
		.replace(/cc/g, cn.x).replace(/ch/g, h.ch).replace(/ck/g, cn.k).replace(/ct/g, tc.ct)
		.replace(/ft/g, tc.ft).replace(/ly/g, end.ly).replace(/nd/g, end.nd).replace(/ng/g, end.ng)
		.replace(/nk/g, end.nk).replace(/nt/g, tc.nt).replace(/ph/g, cn.f).replace(/qu/g, cn.k+cn.w)
		.replace(/sh/g, h.sh).replace(/st/g, tc.st).replace(/th/g, h.th).replace(/ts/g, tc.ts)
		.replace(/dj/g, cn.j).replace(/dge/g, cn.j);
}


function formatStrVowelConPairs1(engStr) { 
	return engStr
		/* -:- VOWEL(& "W") PAIRS -:- */
		/* a: A */
		.replace(/ab/g, va.ah+cn.b).replace(/ac/g, va.ah+cn.k).replace(/aC/g, va.ah+tc.ct).replace(/ad/g, va.ah+cn.d)
		.replace(/af/g, va.ah+cn.f).replace(/ag/g, va.ah+cn.g).replace(/ah/g, va.ah).replace(/aj/g, va.ah+cn.j)
		.replace(/al/g, va.ah+cn.l).replace(/ak/g, va.ah+cn.k).replace(/am/g, va.ah+cn.m).replace(/an/g, va.ah+cn.n)
		.replace(/aN/g, va.ah+end.nk).replace(/ap/g, va.ah+cn.p).replace(/ar/g, rc.ar).replace(/as/g, va.ah+cn.s)
		.replace(/at/g, tc.at).replace(/av/g, va.ah+cn.v).replace(/ax/g, va.ah+cn.x).replace(/az/g, va.ah+cn.z)
		/* e: E */
		.replace(/by/g, cn.b+ve.ee).replace(/cy/g, cn.s+ve.ee).replace(/dy/g, cn.d+ve.ee).replace(/gy/g, cn.g+ve.ee)
		.replace(/ky/g, cn.k+ve.ee).replace(/my/g, cn.m+ve.ee).replace(/py/g, cn.p+ve.ee).replace(/ny/g, cn.n+ve.ee)
		.replace(/ty/g, cn.t+ve.ee).replace(/zy/g, cn.z+ve.ee)
		/* e: Îµ */
		.replace(/eb/g, ve.eh+cn.b).replace(/ec/g, ve.eh+cn.k).replace(/eC/g, ve.eh+tc.ct).replace(/ed/g, end.ed)
		.replace(/ef/g, ve.eh+cn.f).replace(/eg/g, ve.eh+cn.g).replace(/ej/g, ve.eh+cn.j).replace(/eh/g, ve.eh)
		.replace(/ek/g, ve.eh+cn.k).replace(/el/g, sp.el).replace(/em/g, ve.eh+cn.m).replace(/en/g, ve.eh+cn.n)
		.replace(/eN/g, ve.eh+end.nk).replace(/ep/g, ve.eh+cn.p).replace(/er/g, rc.er).replace(/es/g, ve.eh+cn.s)
		.replace(/et/g, ve.eh+cn.t).replace(/ev/g, ve.eh+cn.v).replace(/ex/g, ve.eh+cn.x).replace(/ez/g, ve.eh+cn.z)
		/* i: Î¹ / I */
		.replace(/ib/g, vi.i+cn.b).replace(/ic/g, vi.i+cn.k).replace(/iC/g, vi.i+tc.ct).replace(/id/g, vi.i+cn.d)
		.replace(/if/g, vi.i+cn.f).replace(/ig/g, vi.i+cn.g).replace(/ih/g, vi.i).replace(/ij/g, vi.i+cn.j)
		.replace(/ik/g, vi.i+cn.k).replace(/il/g, vi.i+cn.l).replace(/im/g, vi.i+cn.m).replace(/in/g, vi.i+cn.n)
		.replace(/iN/g, vi.i+end.nk).replace(/ip/g, vi.i+cn.p).replace(/ir/g, rc.er).replace(/is/g, vi.i+cn.s)
		.replace(/it/g, lo.t).replace(/iv/g, vi.i+cn.v).replace(/ix/g, vi.i+cn.x).replace(/iz/g, vi.i+cn.z)
		.replace(/cI/g, cn.s+vi.ai)
		/* o: Ïˆ / Î© */
		.replace(/ob/g, va.aw+cn.b).replace(/oc/g, va.aw+cn.k).replace(/oC/g, va.aw+tc.ct).replace(/of/g, va.aw+cn.f)
		.replace(/oh/g, vo.oh).replace(/od/g, va.aw+cn.d).replace(/oj/g, va.aw+cn.j).replace(/og/g, va.aw+cn.g)
		.replace(/ol/g, vo.oh+cn.l).replace(/ok/g, va.aw+cn.k).replace(/op/g, va.aw+cn.p).replace(/om/g, va.aw+cn.m)
		.replace(/oN/g, va.aw+end.nk).replace(/on/g, va.aw+cn.n).replace(/or/g, rc.or).replace(/os/g, va.aw+cn.s)
		.replace(/ot/g, va.aw+cn.t).replace(/ov/g, vo.oh+cn.v).replace(/ox/g, va.aw+cn.x).replace(/oz/g, va.aw+cn.z)
		/* u: Ð§ */ 
		.replace(/ub/g, vu.uh+cn.b).replace(/uc/g, vu.uh+cn.k).replace(/uC/g, vu.uh+tc.ct).replace(/ud/g, vu.uh+cn.d)
		.replace(/uf/g, vu.uh+cn.f).replace(/ug/g, vu.uh+cn.g).replace(/uh/g, vu.uh).replace(/uj/g, vu.uh+cn.j)
		.replace(/ul/g, vu.uh+cn.l).replace(/uk/g, vu.uh+cn.k).replace(/up/g, vu.uh+cn.p).replace(/um/g, vu.uh+cn.m)
		.replace(/uN/g, vu.uh+end.nk).replace(/un/g, vu.uh+cn.n).replace(/ut/g, vu.uh+cn.t).replace(/us/g, vu.uh+cn.s)
		.replace(/ux/g, vu.uh+cn.x).replace(/uv/g, vu.uh+cn.v).replace(/uz/g, vu.uh+cn.z);
}


function formatStrVowelConPairs2(engStr) { 
	var findPairs = [lo.a,cn.k,lo.a,cn.f,lo.a,tc.ft,lo.a,h.th,lo.a,tc.ts,lo.a,h.sh,lo.a,tc.st,lo.a,end.ng,
	lo.a,end.ly,lo.a,cn.j,hi.c,ve.eh,lo.e,h.th,lo.e,tc.ts,lo.e,h.sh,lo.e,tc.st,lo.e,end.ng,lo.e,end.nd,lo.e,
	end.ly,lo.e,cn.j,lo.e,cn.f,lo.e,tc.ft,lo.e,cn.k,lo.i,h.th,lo.i,tc.ts,lo.i,tc.st,lo.i,h.sh,lo.i,end.nd,
	lo.i,end.ly,lo.i,cn.j,lo.i,cn.f,lo.i,tc.ft,lo.i,cn.k,lo.o,cn.j,lo.o,tc.ts,lo.o,h.th,lo.o,h.sh,lo.o,tc.st,
	lo.o,end.ng,lo.o,end.nd,lo.o,end.ly,lo.o,cn.j,lo.o,cn.f,lo.o,tc.ft,lo.o,cn.k,lo.u,cn.j,lo.u,tc.ts,lo.u,
	h.th,lo.u,tc.st,lo.u,h.sh,lo.u,end.ng,lo.u,end.nd,lo.u,end.ly,lo.u,cn.j,lo.u,cn.f,lo.u,tc.ft,lo.u,cn.k];
	var replacePairs = [va.ah,cn.k,va.ah,cn.f,va.ah,tc.ft,va.ah,h.th,va.ah,tc.ts,va.ah,h.sh,va.ah,tc.st,va.ah,end.ng,
	va.ah,end.ly,va.ah,cn.j,cn.s,ve.eh,ve.eh,h.th,ve.eh,tc.ts,ve.eh,h.sh,ve.eh,tc.st,ve.eh,end.ng,ve.eh,end.nd,
	ve.eh,end.ly,ve.eh,cn.j,ve.eh,cn.f,ve.eh,tc.ft,ve.eh,cn.k,vi.i,h.th,vi.i,tc.ts,vi.i,tc.st,vi.i,h.sh,vi.i,end.nd,
	vi.i,end.ly,vi.i,cn.j,vi.i,cn.f,vi.i,tc.ft,vi.i,cn.k,h.sh,cn.k,h.sh,tc.ts,h.sh,h.th,h.sh,h.sh,h.sh,tc.st,h.sh,
	end.ng,h.sh,end.nd,h.sh,end.ly,h.sh,cn.j,h.sh,cn.f,h.sh,tc.ft,h.sh,cn.k,vu.uh,cn.j,vu.uh,tc.ts,vu.uh,h.th,vu.uh,
	tc.st,vu.uh,h.sh,vu.uh,end.ng,vu.uh,end.nd,vu.uh,end.ly,vu.uh,cn.j,vu.uh,cn.f,vu.uh,tc.ft,vu.uh,cn.k];
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
		.replace(/b/g, cn.b).replace(/d/g, cn.d).replace(/f/g, cn.f).replace(/g/g, cn.g)
		.replace(/h/g, cn.h).replace(/j/g, cn.j).replace(/k/g, cn.k).replace(/l/g, cn.l)
		.replace(/m/g, cn.m).replace(/n/g, cn.n).replace(/p/g, cn.p).replace(/r/g, rc.r)
		.replace(/s/g, cn.s).replace(/t/g, cn.t).replace(/v/g, cn.v).replace(/w/g, cn.w)
		.replace(/x/g, cn.x).replace(/y/g, cn.y).replace(/z/g, cn.z).replace(/c/g, cn.k)
		.replace(/u/g, vu.uh).replace(/i/g, vi.i);
}


function formatFinalArray1(theFinArr) { 
	return theFinArr.join(' ').replace(/ - /g, '-').replace(/k/g, cn.k).replace(/q/g, cn.k);
}


function formatFinalArray2(theFinArr) {
	var soughtPairs = [lo.a,h.ch,lo.e,h.ch,lo.i,h.ch,lo.a,end.tion,lo.e,end.tion,
	lo.i,end.tion,lo.o,end.tion,vu.uh,end.tion,rc.er,lo.e];
	var replacePairs = [va.ah,h.ch,ve.eh,h.ch,vi.i,h.ch,va.ae,end.tion,ve.ee,end.tion,
	vi.i,end.tion,vo.oh,end.tion,vu.ou,end.tion,ve.ee,rc.r];
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
			userArray.splice(k,1,p.p);
		} else if ((userArray[k] == " ") && (userArray[k+1] == "?")) {
			userArray.splice(k,2,"?");
		} else if ((userArray[k] == " ") && (userArray[k+1] == "!")) {
			userArray.splice(k,2,"!");
		} else if ((userArray[k] == vi.i) && (userArray[k+1] == cn.t)) {
			userArray.splice(k,2,w.it);
		} else if ((userArray[k] == cn.b) && (userArray[k+1] == ve.ee)) {
			userArray.splice(k,2,sp.bee);
		} else if ((userArray[k] == cn.d) && (userArray[k+1] == ve.ee)) {
			userArray.splice(k,2,sp.dee);
		} else if ((userArray[k] == cn.k) && (userArray[k+1] == cn.s)) {
			userArray.splice(k,2,cn.x);
		} else if ((userArray[k] == cn.l) && (userArray[k+1] == ve.ee)) {
			userArray.splice(k,2,end.ly);
		}
	}
	return userArray.join('').replace(/a/g, va.ah).replace(/e/g, ve.eh).replace(/o/g, va.aw);
}

/******************************************************************************/
/* CONSTANTS++ */
/******************************************************************************/

const N = ' '+lo.c+w.and+lo.i;
const G = lo.d+lo.e+lo.k;
const M = lo.e+lo.y+lo.c;
const A = lo.a+lo.r+lo.d+' ';

const QUEST = ' '+num.ii+lo.b+lo.o+lo.r+lo.n+lo.o+lo.t+num.ii+lo.b+' ';
const QUESTING = ' '+lo.t+lo.o+s+lo.b+lo.e+s+lo.o+lo.r+s+lo.n+lo.o+lo.t+s+lo.t+lo.o+s+lo.b+lo.e+' ';
const AN1 = ' '+num.v+' ';
const AN2 = ' '+lo.f+lo.i+lo.v+lo.e+' ';

const AP = p.c+p.col+p.c+hi.p+hi.a+hi.r+hi.a+hi.m+hi.e+hi.t+hi.e+hi.r+hi.s+' '; 
const PR = hi.p+hi.a+hi.s+hi.s+hi.e+hi.d;
const OV = p.c+p.col+p.c+hi.s+hi.e+hi.c+hi.u+hi.r+hi.i+hi.t+hi.y+' ';
const ED = hi.m+hi.e+hi.a+hi.s+hi.u+hi.r+hi.e+hi.s;
const IN = ' '+hi.d+hi.e+hi.a+hi.c+hi.t+hi.i+hi.v+hi.a+hi.t+hi.e+hi.d+p.c+p.col+p.c;

const GR = hi.w+lo.e+lo.l+lo.c+lo.o+lo.m+lo.e;
const EE = ' '+hi.h+lo.o+lo.m+lo.e+p.ec+' ';
const TI = hi.m+lo.r+p.ep+' ';
const NG = hi.r+lo.a+lo.n+lo.d+lo.l+lo.e+lo.m+lo.a+lo.n+p.ep;

const ER = hi.o+hi.v+hi.e+hi.r+hi.r+hi.i+hi.d+hi.e+p.c+p.col+p.c;

/******************************************************************************/
/* MAIN FUNCTION */
/******************************************************************************/

function createFinalArray(userStrArg) {
	var finalArray      = [];
	if (userStrArg.toLowerCase() == ' does it work ' || userStrArg.toLowerCase() == ' does it work? ') {
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

		ngmaLetterStr.split(' ').forEach((word) => { finalArray.push(removeDuplicateLetters(word)); });

		var formattedFinalArray = formatFinalArray1(finalArray);
		return formatFinalArray2(formattedFinalArray);
	}	
}

const nul = N+G+M+A;
const into = AP+PR+OV+ED+IN;
const intro = GR+EE+TI+NG;
const gotin = OV+ER;
