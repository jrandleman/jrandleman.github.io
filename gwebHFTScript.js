/* Author: Jordan Randleman */

/******************************************************************************/
/* QUESTION MARK FUNCTION */
/******************************************************************************/

function yellowQ() { document.getElementById("spinning3DText3").style = "color:yellow;"; }
function borderQ() { document.getElementById("spinning3DText3").style = "color:#FE8F10;"; }

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
// TYPEWRITER VARIABLES
/******************************************************************************/

var ch = 0;
var speed = 80;
var possibleChars = '-+*/|}{[]~":;?/.><=+-_)(*&^%$#@!)}';
var possible = possibleChars.split('');
var possibleTitleInts = [];
var titleArr = [];
const bodyId = document.body.id;
/*************************** -:- NGMA CONV VARS -:- ***************************/
var titleTxtN = "NGMA Conversion!", titleLenN = (titleTxtN.length);
const titleFilledArrN = randTitle(titleLenN).split('').splice(0,titleLenN);

var prcTextN = "THE PROCESS", prcLenN = prcTextN.length;
const prcFilledArrN = randTitle(titleLenN).split('').splice(0,prcLenN);

var nnpTextN = "THE NOTEPAD", nnpLenN = nnpTextN.length;
const nnpFilledArrN = randTitle(titleLenN).split('').splice(0,nnpLenN);

var subt1TextN = " TRANSLATE ", subt1LenN = subt1TextN.length;
const subt1FilledArrN = randTitle(titleLenN).split('').splice(0,subt1LenN);
var subt2TextN = " YOUR TEXT ", subt2LenN = subt2TextN.length;
const subt2FilledArrN = randTitle(titleLenN).split('').splice(0,subt2LenN);

var id1TextN = "NGMA ", id1LenN = id1TextN.length;
const id1FilledArrN = randTitle(titleLenN).split('').splice(0,id1LenN);
var id2TextN = "ENGL", id2LenN = id2TextN.length;
const id2FilledArrN = randTitle(titleLenN).split('').splice(0,id2LenN);
/*************************** -:- DIMENSION VARS -:- ***************************/
var id1TextD = "-:- CLICK TO ENTER -:-", id1LenD = id1TextD.length;
const id1FilledArrD = randTitle(id1LenD).split('').splice(0,id1LenD);

var titleTxtD = "Spatial Dimensions!", titleLenD = (titleTxtD.length);
const titleFilledArrD = randTitle(id1LenD).split('').splice(0,titleLenD);

var numTextD = "THE NUMBERS", numLenD = numTextD.length;
const numFilledArrD = randTitle(id1LenD).split('').splice(0,numLenD);

var kTextD = "KMAP CREATION", kLenD = kTextD.length;
const kFilledArrD = randTitle(id1LenD).split('').splice(0,kLenD);

var subt1TextD = " DETERMINE ", subt1LenD = subt1TextD.length;
const subt1FilledArrD = randTitle(id1LenD).split('').splice(0,subt1LenD);
var subt2TextD = " DIMENSIONS ", subt2LenD = subt2TextD.length;
const subt2FilledArrD = randTitle(id1LenD).split('').splice(0,subt2LenD);

var ssub1TextD = "Inner Hypercube:", ssub1LenD = ssub1TextD.length;
const ssub1FilledArrD = randTitle(id1LenD).split('').splice(0,ssub1LenD);
var ssub2TextD = "Outer Hypercube:", ssub2LenD = ssub2TextD.length;
const ssub2FilledArrD = randTitle(id1LenD).split('').splice(0,ssub2LenD);
/************************** -:- PERSPECTIVE VARS -:- **************************/
var id1TextP = "-:- CLICK TO ENTER -:-", id1LenP = id1TextP.length;
const id1FilledArrP = randTitle(id1LenP).split('').splice(0,id1LenP);

var titleTxtP = "Perspective Length!", titleLenP = (titleTxtP.length);
const titleFilledArrP = randTitle(id1LenP).split('').splice(0,titleLenP);

var numTextP = "SHOW ME THE NUMBERS", numLenP = numTextP.length;
const numFilledArrP = randTitle(id1LenP).split('').splice(0,numLenP);

var subt1TextP = " Permute ", subt1LenP = subt1TextP.length;
const subt1FilledArrP = randTitle(id1LenP).split('').splice(0,subt1LenP);
var subt2TextP = " Perspective ", subt2LenP = subt2TextP.length;
const subt2FilledArrP = randTitle(id1LenP).split('').splice(0,subt2LenP);

var ssub1TextP = "Base Length: ", ssub1LenP = ssub1TextP.length;
const ssub1FilledArrP = randTitle(id1LenP).split('').splice(0,ssub1LenP);
var ssub2TextP = "Distance Moved: ", ssub2LenP = ssub2TextP.length;
const ssub2FilledArrP = randTitle(id1LenP).split('').splice(0,ssub2LenP);
var ssub3TextP = "Horizontal ", ssub3LenP = ssub3TextP.length;
const ssub3FilledArrP = randTitle(id1LenP).split('').splice(0,ssub3LenP);
var ssub4TextP = "Vertical ", ssub4LenP = ssub4TextP.length;
const ssub4FilledArrP = randTitle(id1LenP).split('').splice(0,ssub4LenP);
/*************************** -:- STAR CALC VARS -:- ***************************/
var titleTxtS = "Star Calculation!", titleLenS = (titleTxtS.length);
const titleFilledArrS = randTitle(titleLenS).split('').splice(0,titleLenS);

var numTextS = "THE NUMBERS", numLenS = numTextS.length;
const numFilledArrS = randTitle(titleLenS).split('').splice(0,numLenS);

var tesTextS = "TESSELLATION", tesLenS = tesTextS.length;
const tesFilledArrS = randTitle(titleLenS).split('').splice(0,tesLenS);

var subt1TextS = " Spawn Star ", subt1LenS = subt1TextS.length;
const subt1FilledArrS = randTitle(titleLenS).split('').splice(0,subt1LenS);
var subt2TextS = " Sequence ", subt2LenS = subt2TextS.length;
const subt2FilledArrS = randTitle(titleLenS).split('').splice(0,subt2LenS);

var ssub1TextS = "Star Points: ", ssub1LenS = ssub1TextS.length;
const ssub1FilledArrS = randTitle(titleLenS).split('').splice(0,ssub1LenS);

var id1TextS = "-:- ENTER -:-", id1LenS = id1TextS.length;
const id1FilledArrS = randTitle(titleLenS).split('').splice(0,id1LenS);
/************************* -:- NGMA NOTEPAD VARS -:- **************************/
var titleTxtNote = "NGMA Notepad!", titleLenNote = (titleTxtNote.length);
const titleFilledArrNote = randTitle(titleLenNote).split('').splice(0,titleLenNote);
/************************* -:- KMAP CREATION VARS -:- **************************/
var titleTxtKmap = "Kmap Creation!", titleLenKmap = (titleTxtKmap.length);
const titleFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,titleLenKmap);

var numTextKmap = "THE NUMBERS", numLenKmap = numTextKmap.length;
const numFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,numLenKmap);

var dimTextKmap = "N DIMENSIONS", dimLenKmap = dimTextKmap.length;
const dimFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,dimLenKmap);

var sopTextKmap = "SOP", sopLenKmap = sopTextKmap.length;
const sopFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,sopLenKmap);

var posTextKmap = "POS", posLenKmap = posTextKmap.length;
const posFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,posLenKmap);

var fcnEditTextKmap = "Fcn Editor", fcnEditLenKmap = fcnEditTextKmap.length;
const fcnEditFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,fcnEditLenKmap);

var kmapTextKmap = "Kmap", kmapLenKmap = kmapTextKmap.length;
const kmapFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,kmapLenKmap);

var ttableTextKmap = "Ttable", ttableLenKmap = ttableTextKmap.length;
const ttableFilledArrKmap = randTitle(titleLenKmap).split('').splice(0,ttableLenKmap);

/******************************************************************************/ 
// TYPEWRITER FUNCTIONS
/******************************************************************************/

function randTitle(len) {
    while (possibleTitleInts.length < len) {
        var ranNum =  Math.floor(Math.random() * (len));
        if (possibleTitleInts.indexOf(ranNum) == -1) possibleTitleInts.push(ranNum);
    }
    for (let i = 0; i < possibleTitleInts.length; i++) {
        var num = possibleTitleInts[i];
        titleArr.push(possible[num]);
    }
    return titleArr.join('');
}


function typeWriter() { 
  switch(bodyId) {
    case 'ncon':       typeWriterNcon(); break;
    case 'dim':        typeWriterDim();  break;
    case 'per':        typeWriterPer();  break;
    case 'scrollable': typeWriterStar(); break; /* star function */
    case 'notePad':    typeWriterNote(); break;
    case 'kmapCreate': typeWriterKmap(); break;
  }
}


function typeWriterNcon() {
    if (ch < titleTxtN.length) {
        var letter = titleTxtN.charAt(ch);
        var nnpLetter = nnpTextN.charAt(ch);
        var prcletter = prcTextN.charAt(ch);
        var subt1letter = subt1TextN.charAt(ch);
        var subt2letter = subt2TextN.charAt(ch);
        var id1letter = id1TextN.charAt(ch);
        var id2letter = id2TextN.charAt(ch);

        titleFilledArrN.splice(ch,1,letter);
        nnpFilledArrN.splice(ch,1,nnpLetter);
        prcFilledArrN.splice(ch,1,prcletter);
        subt1FilledArrN.splice(ch,1,subt1letter);
        subt2FilledArrN.splice(ch,1,subt2letter);
        id1FilledArrN.splice(ch,1,id1letter);
        id2FilledArrN.splice(ch,1,id2letter);

        document.getElementById("webTitleID").innerHTML = titleFilledArrN.join('');
        document.getElementById("nnpId").innerHTML = nnpFilledArrN.join('');
        document.getElementById("prcId").innerHTML = prcFilledArrN.join('');
        document.getElementById("subt1Id").innerHTML = subt1FilledArrN.join('');
        document.getElementById("subt2Id").innerHTML = subt2FilledArrN.join('');
        document.getElementById("id1").innerHTML = id1FilledArrN.join('');
        document.getElementById("id2").innerHTML = id2FilledArrN.join('');
        ch++;
        setTimeout(typeWriterNcon, speed);
    }
}


function typeWriterDim() {
    if (ch < id1TextD.length) {
        var letter = titleTxtD.charAt(ch);
        var numletter = numTextD.charAt(ch);
        var kletter = kTextD.charAt(ch);
        var subt1letter = subt1TextD.charAt(ch);
        var subt2letter = subt2TextD.charAt(ch);
        var ssub1letter = ssub1TextD.charAt(ch);
        var ssub2letter = ssub2TextD.charAt(ch);
        var id1letter = id1TextD.charAt(ch);

        titleFilledArrD.splice(ch,1,letter);
        numFilledArrD.splice(ch,1,numletter);
        kFilledArrD.splice(ch,1,kletter);
        subt1FilledArrD.splice(ch,1,subt1letter);
        subt2FilledArrD.splice(ch,1,subt2letter);
        ssub1FilledArrD.splice(ch,1,ssub1letter);
        ssub2FilledArrD.splice(ch,1,ssub2letter);
        id1FilledArrD.splice(ch,1,id1letter);

        document.getElementById("webTitleID").innerHTML = titleFilledArrD.join('');
        document.getElementById("numId").innerHTML = numFilledArrD.join('');
        document.getElementById("kmapId").innerHTML = kFilledArrD.join('');
        document.getElementById("subt1Id").innerHTML = subt1FilledArrD.join('');
        document.getElementById("subt2Id").innerHTML = subt2FilledArrD.join('');
        document.getElementById("ssub1").innerHTML = ssub1FilledArrD.join('');
        document.getElementById("ssub2").innerHTML = ssub2FilledArrD.join('');
        document.getElementById("id1").innerHTML = id1FilledArrD.join('');
        ch++;
        setTimeout(typeWriterDim, speed);
    }
}


function typeWriterPer() {
    if (ch < id1TextP.length) {
        var letter = titleTxtP.charAt(ch);
        var numletter = numTextP.charAt(ch);
        var subt1letter = subt1TextP.charAt(ch);
        var subt2letter = subt2TextP.charAt(ch);
        var ssub1letter = ssub1TextP.charAt(ch);
        var ssub2letter = ssub2TextP.charAt(ch);
        var ssub3letter = ssub3TextP.charAt(ch);
        var ssub4letter = ssub4TextP.charAt(ch);
        var id1letter = id1TextP.charAt(ch);

        titleFilledArrP.splice(ch,1,letter);
        numFilledArrP.splice(ch,1,numletter);
        subt1FilledArrP.splice(ch,1,subt1letter);
        subt2FilledArrP.splice(ch,1,subt2letter);
        ssub1FilledArrP.splice(ch,1,ssub1letter);
        ssub2FilledArrP.splice(ch,1,ssub2letter);
        ssub3FilledArrP.splice(ch,1,ssub3letter);
        ssub4FilledArrP.splice(ch,1,ssub4letter);
        id1FilledArrP.splice(ch,1,id1letter);

        document.getElementById("webTitleID").innerHTML = titleFilledArrP.join('');
        document.getElementById("numId").innerHTML = numFilledArrP.join('');
        document.getElementById("subt1Id").innerHTML = subt1FilledArrP.join('');
        document.getElementById("subt2Id").innerHTML = subt2FilledArrP.join('');
        document.getElementById("ssub1").innerHTML = ssub1FilledArrP.join('');
        document.getElementById("ssub2").innerHTML = ssub2FilledArrP.join('');
        document.getElementById("ssub3").innerHTML = ssub3FilledArrP.join('');
        document.getElementById("ssub4").innerHTML = ssub4FilledArrP.join('');
        document.getElementById("id1").innerHTML = id1FilledArrP.join('');
        ch++;
        setTimeout(typeWriterPer, speed);
    }
}


function typeWriterStar() {
    if (ch < titleTxtS.length) {
        var letter = titleTxtS.charAt(ch);
        var numletter = numTextS.charAt(ch);
        var tesletter = tesTextS.charAt(ch);
        var subt1letter = subt1TextS.charAt(ch);
        var subt2letter = subt2TextS.charAt(ch);
        var ssub1letter = ssub1TextS.charAt(ch);
        var id1letter = id1TextS.charAt(ch);

        titleFilledArrS.splice(ch,1,letter);
        numFilledArrS.splice(ch,1,numletter);
        tesFilledArrS.splice(ch,1,tesletter);
        subt1FilledArrS.splice(ch,1,subt1letter);
        subt2FilledArrS.splice(ch,1,subt2letter);
        ssub1FilledArrS.splice(ch,1,ssub1letter);
        id1FilledArrS.splice(ch,1,id1letter);

        document.getElementById("webTitleID").innerHTML = titleFilledArrS.join('');
        document.getElementById("numId").innerHTML = numFilledArrS.join('');
        document.getElementById("tesId").innerHTML = tesFilledArrS.join('');
        document.getElementById("subt1Id").innerHTML = subt1FilledArrS.join('');
        document.getElementById("subt2Id").innerHTML = subt2FilledArrS.join('');
        document.getElementById("ssub1").innerHTML = ssub1FilledArrS.join('');
        document.getElementById("id1").innerHTML = id1FilledArrS.join('');
        ch++;
        setTimeout(typeWriterStar, speed);
    }
}


function typeWriterNote() {
    if (ch < titleLenNote) {
        var letter = titleTxtNote.charAt(ch);
        titleFilledArrNote.splice(ch,1,letter);
        document.getElementById("webTitleID").innerHTML = titleFilledArrNote.join('');
        ch++;
        setTimeout(typeWriterNote, speed);
    }
}


function typeWriterKmap() {
  if (ch < titleLenKmap) {
    var letter = titleTxtKmap.charAt(ch);
    var numLetter = numTextKmap.charAt(ch);
    var dimletter = dimTextKmap.charAt(ch);

    var sopletter = sopTextKmap.charAt(ch);
    var posletter = posTextKmap.charAt(ch);
    var fcnEditletter = fcnEditTextKmap.charAt(ch);
    var kmapletter = kmapTextKmap.charAt(ch);
    var ttableletter = ttableTextKmap.charAt(ch);

    titleFilledArrKmap.splice(ch,1,letter);
    numFilledArrKmap.splice(ch,1,numLetter);
    dimFilledArrKmap.splice(ch,1,dimletter);

    sopFilledArrKmap.splice(ch,1,sopletter);
    posFilledArrKmap.splice(ch,1,posletter);
    fcnEditFilledArrKmap.splice(ch,1,fcnEditletter);
    kmapFilledArrKmap.splice(ch,1,kmapletter);
    ttableFilledArrKmap.splice(ch,1,ttableletter);

    document.getElementById("webTitleID").innerHTML = titleFilledArrKmap.join('');
    document.getElementById("numId").innerHTML = numFilledArrKmap.join('');
    document.getElementById("dimId").innerHTML = dimFilledArrKmap.join('');

    document.getElementById("sopBtn").innerHTML = sopFilledArrKmap.join('');
    document.getElementById("posBtn").innerHTML = posFilledArrKmap.join('');
    document.getElementById("fcnEditBtn").innerHTML = fcnEditFilledArrKmap.join('');
    document.getElementById("kmapBtn").innerHTML = kmapFilledArrKmap.join('');
    document.getElementById("ttableBtn").innerHTML = ttableFilledArrKmap.join('');
    ch++;
    setTimeout(typeWriterKmap, speed);
  }
}