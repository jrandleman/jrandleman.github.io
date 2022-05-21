/* Author: Jordan Randleman */

/******************************************************************************/
/* INFO FUNCTIONS */
/******************************************************************************/

function aboutWP() {
    var name = prompt("\nWelcome to the home page! I'm Jordan Randleman's cybernetic shadow, the"+
        " bits of binary brought by his brain to power this website.\n\nWhat's your name?", "...");
    if ((name != null) && (name != "...")) {
        if (name.toLowerCase() == "jordan" || name.toLowerCase() == "jordan randleman") {
            name = "Creator";
        } else if (name.toLowerCase() == "will" || name.toLowerCase() == "will randleman") {
            name = "Bro";
        } else if (name.toLowerCase() == "katia" || name.toLowerCase() == "katia randleman") {
            name = "Mom";
        } else if (name.toLowerCase() == "randy" || name.toLowerCase() == "randy randleman") {
            name = "Dad";
        } else if (name.toLowerCase() == "brendan" || name.toLowerCase() == "brendan zhou") {
            name = "Broski";
        }
        var guide1 = confirm("\nHello "+name+"! Would you like to run through the"+
            " tutorial?\n\n\n\n\n\n\n-:- ( 1 / 6 ) -:-");
        if (guide1) {
            alert("\nGreat! You can always click 'cancel' anytime to quit the"+
                " guide and begin browsing.\n\n\n\n\n\n-:- ( 2 / 6 ) -:-");
            var guide2 = confirm("\nSo, "+name+", this website's rule of thumb is that if moving your" + 
                " mouse over something makes it change shape or color, click it for"+
                " more information!\n\n\n\n\n-:- ( 3 / 6 ) -:-");
            if (guide2) {
                var guide3 = confirm("\nThe top of this home page has my resume (top right), "+
                    " a link to this website's earliest prototypes and architecture (top left), and a link to email me"+
                    " at jrandleman@scu.edu (right of the 'welcome' title).\n\n\n\n\n-:- ( 4 / 6 ) -:-");
                if (guide3) {
                    var guide4 = confirm("\nThe middle of this home page is divided into"+
                        " five sections, each running programs of various intellectual"+
                        " curiosities I had initially developed on paper in high school."+
                        " Click their names to go their corresponding web pages, select 'show me the numbers'"+
                        " to see the math behind them, and click the question mark on each page (after"+
                        " clicking their name) for more information!\n\n-:- ( 5 / 6 ) -:-");
                    if (guide4) {
                        alert("\nThe bottom of this home page has links to my high school, college,"+
                            " and most frequented extracurricular activity.\n\n\n\n\n\n-:- ( 6 / 6 ) -:-");
                        alert("-:- TUTORIAL COMPLETED -:-\n\nCongratulations "+name+"! Short and"+
                            " sweet, that's the gist of it. Feel free to run through"+
                            " the tutorial again if you ever want a refresher on how the website works."+
                            "\n\nAnd if you're particularly obvservant, keep your"+
                            " eyes peeled and your mind sharp: this website contains more"+
                            " information than that which is immediately obvious...");
                        document.getElementById("noice").innerHTML = "Welcome, "+name+"!";
                        if(holiCounter > 0) {
                            var c2Height = document.getElementById('noice').offsetHeight;
                            var oldC2Height = document.getElementById('clm2').style.top.split('');
                            for(let i = 0; i < 2; i++) oldC2Height.pop();
                            document.getElementById('clm2').style.top = String(c2Height+Number(oldC2Height.join(''))) + 'px';
                        } else {
                            document.getElementById("clm2").style.top = '195px';
                        }
                    }
                }
            }
        }
    }
}

/******************************************************************************/
/* SUDOKU TITLE GENERATION */
/******************************************************************************/

var sSudCh = 1;
var nSudCh = 0;
var engSTitle = "SUDOKUS!!";
var engSArr = engSTitle.split('');
var numSTitle = '123456789';
var numSArr = numSTitle.split('');

function genEngSTitle(sCh) {
    engSArr.splice(sCh,1,numSTitle.charAt(sCh));
    document.getElementById("sdId").innerHTML = '';
    document.getElementById("sdId").innerHTML += engSArr.join('');
}

function genNumSTitle(numCh) {
    numSArr.splice(numCh,1,engSTitle.charAt(numCh));
    document.getElementById("sdId").innerHTML = '';
    document.getElementById("sdId").innerHTML += numSArr.join('');
}

for(let neSudokuIdx = 1; neSudokuIdx < 8; neSudokuIdx++) { /* SETTIMEOUTS */
    setTimeout(genEngSTitle.bind(null,sSudCh++), (70 * (5+neSudokuIdx)));
}
for(let nnSudokuIdx = 8; nnSudokuIdx < 18; nnSudokuIdx++) { /* SETTIMEOUTS */
    setTimeout(genNumSTitle.bind(null,nSudCh++), (70 * (5+nnSudokuIdx)));
}

/******************************************************************************/
/* NGMA TITLE GENERATION */
/******************************************************************************/

var eCh = 1;
var nCh = 0;
var engNTitle = "NGMA CONVERSION";
var engNArr = engNTitle.split('');
var ngmaNTitle = String.fromCharCode(957,915,956,0xFF21)+'  '
    +String.fromCharCode(0x30B9,968,957,965,0x10B4,0x04FE,0x0427,957)+'!';
var ngmaNArr = ngmaNTitle.split('');

for(let neTitleIdx = 1; neTitleIdx < 16; neTitleIdx++) { /* SETTIMEOUTS */
    setTimeout(genEngNTitle.bind(null,eCh++), (40 * (5+neTitleIdx)));
}
for(let nnTitleIdx = 16; nnTitleIdx < 31; nnTitleIdx++) { /* SETTIMEOUTS */
    setTimeout(genNgmaNTitle.bind(null,nCh++), (40 * (5+nnTitleIdx)));
}

function genEngNTitle(ch) {
    engNArr.splice(ch,1,ngmaNTitle.charAt(ch));
    document.getElementById("nId").innerHTML = '';
    document.getElementById("nId").innerHTML += engNArr.join('');
}

function genNgmaNTitle(ch) {
    ngmaNArr.splice(ch,1,engNTitle.charAt(ch));
    document.getElementById("nId").innerHTML = '';
    document.getElementById("nId").innerHTML += ngmaNArr.join('');
}

/******************************************************************************/
/* HEADER HOVER FUNCTION */
/******************************************************************************/

function cogAnim(flag) {
    if(flag == 1) {
        document.getElementById("lnId").classList.add("fa-spin");
    } else {
        document.getElementById("lnId").classList.remove("fa-spin");
    }
}

/******************************************************************************/
/* TYPEWRITER */
/******************************************************************************/

// /* Randomize array in-place using Durstenfeld shuffle algorithm */
// /* FROM: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */
// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// }

function randTitle() {
    // return shuffleArray(possible.slice(0,pdfLen)).join('');

    var possibleTitleInts = [];
    var titleArr = [];
    while (possibleTitleInts.length < pdfLen) {
        var ranNum =  Math.floor(Math.random() * pdfLen);
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

for(let tWriterIdx = 1; tWriterIdx < pdfLen; tWriterIdx++) { /* SETTIMEOUTS */
    setTimeout(typeWriter.bind(null,tWriteCh++), (57 * (5+tWriterIdx)));
}

function typeWriter(ch) {
    var letter = titleTxt.charAt(ch);
    var pletter = pText.charAt(ch);
    var dletter = dText.charAt(ch);
    var sletter = sText.charAt(ch);
    var numletter = numText.charAt(ch);
    var num2letter = num2Text.charAt(ch);
    var kCreateletter = kCreateText.charAt(ch);
    var tesletter = tesText.charAt(ch);
    var prcletter = prcText.charAt(ch);
    var nnpletter = nnpText.charAt(ch);
    var pdfletter = pdfText.charAt(ch);
    var sculetter = scuText.charAt(ch);
    var wspletter = wspText.charAt(ch);
    var acmletter = acmText.charAt(ch);

    titleFilledArr.splice(ch,1,letter);
    pFilledArr.splice(ch,1,pletter);
    dFilledArr.splice(ch,1,dletter);
    sFilledArr.splice(ch,1,sletter);
    numFilledArr.splice(ch,1,numletter);
    num2FilledArr.splice(ch,1,num2letter);
    kCreateFilledArr.splice(ch,1,kCreateletter);
    tesFilledArr.splice(ch,1,tesletter);
    prcFilledArr.splice(ch,1,prcletter);
    nnpFilledArr.splice(ch,1,nnpletter);
    pdfFilledArr.splice(ch,1,pdfletter);
    scuFilledArr.splice(ch,1,sculetter);
    wspFilledArr.splice(ch,1,wspletter);
    acmFilledArr.splice(ch,1,acmletter);

    document.getElementById("webTitleID").innerHTML = titleFilledArr.join('');
    document.getElementById("pId").innerHTML = pFilledArr.join('');
    document.getElementById("dId").innerHTML = dFilledArr.join('');
    document.getElementById("sId").innerHTML = sFilledArr.join('');
    document.getElementById("numId1").innerHTML = numFilledArr.join('');
    document.getElementById("numId2").innerHTML = num2FilledArr.join('');
    document.getElementById("numId6").innerHTML = kCreateFilledArr.join('');
    document.getElementById("numId3").innerHTML = num2FilledArr.join('');
    document.getElementById("numId4").innerHTML = tesFilledArr.join('');
    document.getElementById("numIdS").innerHTML = numFilledArr.join('');
    document.getElementById("prcId").innerHTML = prcFilledArr.join('');
    document.getElementById("numId5").innerHTML = nnpFilledArr.join('');
    document.getElementById("pdfBtnId").innerHTML = pdfFilledArr.join('');
    document.getElementById("scuId").innerHTML = scuFilledArr.join('');
    document.getElementById("wspId").innerHTML = wspFilledArr.join('');
    document.getElementById("acmId").innerHTML = acmFilledArr.join('');
}

var tWriteCh = 1;
var titleTxt = "Welcome to My Website!";
var titleLen = titleTxt.length;
var possibleChars = '-+*/|}{[]~":;?/.><=+-_)(*&^%$#@!)}';
var possible = possibleChars.split('');
const titleFilledArr = randTitle().split('');

var pText = "PERSPECTIVE LENGTH";
var pLen = pText.length;
const pFilledArr = randTitle().split('').splice(0,pLen);

var dText = "SPATIAL DIMENSIONS";
var dLen = dText.length;
const dFilledArr = randTitle().split('').splice(0,dLen);

var sText = "STAR CALCULATION";
var sLen = sText.length;
const sFilledArr = randTitle().split('').splice(0,sLen);

var numText = "SHOW ME THE NUMBERS";
var numLen = numText.length;
const numFilledArr = randTitle().split('').splice(0,numLen);

var num2Text = "THE NUMBERS";
var num2Len = num2Text.length;
const num2FilledArr = randTitle().split('').splice(0,num2Len);

var kCreateText = "KMAP CREATION";
var kCreateLen = kCreateText.length;
const kCreateFilledArr = randTitle().split('').splice(0,kCreateLen);

var tesText = "TESSELLATION";
var tesLen = tesText.length;
const tesFilledArr = randTitle().split('').splice(0,tesLen);

var prcText = "THE PROCESS";
var prcLen = prcText.length;
const prcFilledArr = randTitle().split('').splice(0,prcLen);

var nnpText = "THE NOTEPAD";
var nnpLen = nnpText.length;
const nnpFilledArr = randTitle().split('').splice(0,nnpLen);

var pdfText = "(COEN) Advice for (Incoming) Students";
var pdfLen = pdfText.length;
const pdfFilledArr = randTitle().split('').splice(0,pdfLen);

var scuText = "-:- SCU -:-";
var scuLen = scuText.length;
const scuFilledArr = randTitle().split('').splice(0,scuLen);

var wspText = "-:- WSP -:-";
var wspLen = wspText.length;
const wspFilledArr = randTitle().split('').splice(0,wspLen);

var acmText = "-:- ACM -:-";
var acmLen = acmText.length;
const acmFilledArr = randTitle().split('').splice(0,acmLen);

/******************************************************************************/
/* SPINNING SUDOKU FUNCTION */
/******************************************************************************/

sudIcon();
setTimeout(sudIcon2, 1500);
function sudIcon() {
    document.getElementById("sudIcon").classList = 'spinning3DSud1';
    document.getElementById("sudIcon").innerHTML = '1';
}
function sudIcon2() {
    for(let sdkup = 0; sdkup < 9999; sdkup++) {
        var sud2Time = 1000 + (sdkup*13500);
        var sud3Time = sud2Time + 1500;
        var sud4Time = sud3Time + 1500;
        var sud5Time = sud4Time + 1500;
        var sud6Time = sud5Time + 1500;
        var sud7Time = sud6Time + 1500;
        var sud8Time = sud7Time + 1500;
        var sud9Time = sud8Time + 1500;
        var sud1Time = sud9Time + 1500;
        setTimeout(sud2, sud2Time);
        setTimeout(sud3, sud3Time);
        setTimeout(sud4, sud4Time);
        setTimeout(sud5, sud5Time);
        setTimeout(sud6, sud6Time);
        setTimeout(sud7, sud7Time);
        setTimeout(sud8, sud8Time);
        setTimeout(sud9, sud9Time);
        setTimeout(sud1, sud1Time);
    }
}

function sud2() {
    document.getElementById("sudIcon").innerHTML = "2";
    document.getElementById("sudIcon").classList.remove('spinning3DSud1');
    document.getElementById("sudIcon").classList.add('spinning3DSud2');
}

function sud3() {
    document.getElementById("sudIcon").innerHTML = "3";
    document.getElementById("sudIcon").classList.remove('spinning3DSud2');
    document.getElementById("sudIcon").classList.add('spinning3DSud3');
}

function sud4() {
    document.getElementById("sudIcon").innerHTML = "4";
    document.getElementById("sudIcon").classList.remove('spinning3DSud3');
    document.getElementById("sudIcon").classList.add('spinning3DSud4');
}

function sud5() {
    document.getElementById("sudIcon").innerHTML = "5";
    document.getElementById("sudIcon").classList.remove('spinning3DSud4');
    document.getElementById("sudIcon").classList.add('spinning3DSud5');
}

function sud6() {
    document.getElementById("sudIcon").innerHTML = "6";
    document.getElementById("sudIcon").classList.remove('spinning3DSud5');
    document.getElementById("sudIcon").classList.add('spinning3DSud6');
}

function sud7() {
    document.getElementById("sudIcon").innerHTML = "7";
    document.getElementById("sudIcon").classList.remove('spinning3DSud6');
    document.getElementById("sudIcon").classList.add('spinning3DSud7');
}

function sud8() {
    document.getElementById("sudIcon").innerHTML = "8";
    document.getElementById("sudIcon").classList.remove('spinning3DSud7');
    document.getElementById("sudIcon").classList.add('spinning3DSud8');
}

function sud9() {
    document.getElementById("sudIcon").innerHTML = "9";
    document.getElementById("sudIcon").classList.remove('spinning3DSud8');
    document.getElementById("sudIcon").classList.add('spinning3DSud9');
}

function sud1() {
    document.getElementById("sudIcon").innerHTML = "1";
    document.getElementById("sudIcon").classList.remove('spinning3DSud9');
    document.getElementById("sudIcon").classList.add('spinning3DSud1');
}

/******************************************************************************/
/* SPINNING STAR FUNCTION */
/******************************************************************************/

starIcon();
starIcon2();
function starIcon() {
    document.getElementById("starIcon").classList = 'spinning3DStar5';
    document.getElementById("starIcon").innerHTML = '&#x272D;';
}
function starIcon2() {
    for(let sp = 0; sp < 9999; sp++) {
        var star8Time = 1000 + (sp*4500);
        var star12Time = star8Time + 1500;
        var star5Time = star12Time + 1500;
        setTimeout(spinningStar8, star8Time);
        setTimeout(spinningStar12, star12Time);
        setTimeout(spinningStar5, star5Time);
    }
}

function spinningStar8() {
    document.getElementById("starIcon").innerHTML = "&#x2738;";
    document.getElementById("starIcon").classList.remove('spinning3DStar5');
    document.getElementById("starIcon").classList.add('spinning3DStar8');
}

function spinningStar12() {
    document.getElementById("starIcon").innerHTML = "&#x2739;";
    document.getElementById("starIcon").classList.remove('spinning3DStar8');
    document.getElementById("starIcon").classList.add('spinning3DStar12');
}

function spinningStar5() {
    document.getElementById("starIcon").innerHTML = "&#x272D;";
    document.getElementById("starIcon").classList.remove('spinning3DStar12');
    document.getElementById("starIcon").classList.add('spinning3DStar5');
}

/******************************************************************************/
/* SPINNING NGMA ICON FUNCTION */
/******************************************************************************/

ngmaIcon();
ngmaIcon2();
function ngmaIcon() {
    document.getElementById('ngmaSpinTitle').classList = 'spinning3DText';
    document.getElementById('ngmaSpinTitle').innerHTML = 'Ngma';
}
function ngmaIcon2() {
    for(let np = 0; np < 9999; np++) {
        var nNgmaTime = 2350 + (np*6000);
        var ngmaTime = 5350 + (np*6000);
        setTimeout(ngmaNNGMAFunc, nNgmaTime);
        setTimeout(ngmaNGMAFunc, ngmaTime);
    }
}

function ngmaNNGMAFunc() {
    document.getElementById("ngmaSpinTitle").innerHTML = "&#x03BD;&#x0393;&#x03BC;&#x0041;";
    document.getElementById("ngmaSpinTitle").classList.remove('spinning3DText');
    document.getElementById("ngmaSpinTitle").classList.add('spinning3DText02');
}

function ngmaNGMAFunc() {
    document.getElementById("ngmaSpinTitle").innerHTML = "Ngma";
    document.getElementById("ngmaSpinTitle").classList.remove('spinning3DText02');
    document.getElementById("ngmaSpinTitle").classList.add('spinning3DText');
}

/******************************************************************************/
/* HOLIDAY FUNCTION */
/******************************************************************************/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) dd = '0'+dd;
if(mm<10) mm = '0'+mm;

today = mm + '/' + dd + '/' + yyyy;
var holi = today.split('').splice(0,5).join('');
var holiCounter = 0;

function checkHoliday() {
    if(holi == "07/13") { /* Jordan Bday */
        document.getElementById("holiyay").innerHTML = "<span id='jrbi'>&#x2660;</span><span id='jrbg'>H</span><span id='jrbr'>A</span>"+
            "<span id='jrbg'>P</span><span id='jrbr'>P</span><span id='jrbg'>Y </span><span id='jrbr'>B</span>"+
            "<span id='jrbg'>I</span><span id='jrbr'>R</span><span id='jrbg'>T</span><span id='jrbr'>H</span>"+
            "<span id='jrbg'>D</span><span id='jrbr'>A</span><span id='jrbg'>Y </span><span id='jrbr'>M</span>"+
            "<span id='jrbg'>Y </span><span id='jrbr'>C</span><span id='jrbg'>R</span><span id='jrbr'>E</span>"+
            "<span id='jrbg'>A</span><span id='jrbr'>T</span><span id='jrbg'>O</span><span id='jrbr'>R</span>"+
            "<span id='jrbg'>! </span><span id='jrbi'>&#x2660;</span>";
        holiCounter++;
    } else if(holi == "03/29") { /* Dad Bday */
        document.getElementById("holiyay").innerHTML = "<span id='rrbi'>&#x265B;</span><span id='rrbb'>H</span><span id='rrbr'>A</span>"+
            "<span id='rrbb'>P</span><span id='rrbr'>P</span><span id='rrbb'>Y </span><span id='rrbr'>B</span>"+
            "<span id='rrbb'>I</span><span id='rrbr'>R</span><span id='rrbb'>T</span><span id='rrbr'>H</span>"+
            "<span id='rrbb'>D</span><span id='rrbr'>A</span><span id='rrbb'>Y </span><span id='rrbr'>D</span>"+
            "<span id='rrbb'>A</span><span id='rrbr'>D</span><span id='rrbb'>! </span><span id='rrbi'>&#x265B;</span>";
        holiCounter++;
    } else if(holi == "02/16") { /* Mom Bday */
        document.getElementById("holiyay").innerHTML = "<span id='krbi'>&#x2665;</span><span id='krbp'>H</span><span id='krbb'>A</span>"+
            "<span id='krbp'>P</span><span id='krbb'>P</span><span id='krbp'>Y </span><span id='krbb'>B</span>"+
            "<span id='krbp'>I</span><span id='krbb'>R</span><span id='krbp'>T</span><span id='krbb'>H</span>"+
            "<span id='krbp'>D</span><span id='krbb'>A</span><span id='krbp'>Y </span><span id='krbb'>M</span>"+
            "<span id='krbp'>O</span><span id='krbb'>M</span><span id='krbp'>! </span><span id='krbi'>&#x2665;</span>";
        holiCounter++;
    } else if(holi == "02/02") { /* Will Bday */
        document.getElementById("holiyay").innerHTML = "<span id='wrbi'>&#x2606;</span><span id='wrbp'>H</span><span id='wrbb'>A</span>"+
            "<span id='wrbp'>P</span><span id='wrbb'>P</span><span id='wrbp'>Y </span><span id='wrbb'>B</span>"+
            "<span id='wrbp'>I</span><span id='wrbb'>R</span><span id='wrbp'>T</span><span id='wrbb'>H</span>"+
            "<span id='wrbp'>D</span><span id='wrbb'>A</span><span id='wrbp'>Y </span><span id='wrbb'>W</span>"+
            "<span id='wrbp'>I</span><span id='wrbb'>L</span><span id='wrbp'>L</span><span id='wrbb'>! </span><span id='wrbi'>&#x2606;</span>";
        holiCounter++;
    } else if(holi == "02/14") { /* Valentines */
        document.getElementById("holiyay").innerHTML = "<span id='valh'>&#x2665;</span><span id='valw'>H</span><span id='valp'>A</span>"+
            "<span id='valw'>P</span><span id='valp'>P</span><span id='valw'>Y </span><span id='valp'>V</span>"+
            "<span id='valw'>A</span><span id='valp'>L</span><span id='valw'>E</span><span id='valp'>N</span>"+
            "<span id='valw'>T</span><span id='valp'>I</span><span id='valw'>N</span><span id='valp'>E</span>"+
            "<span id='valw'>S </span><span id='valp'>D</span><span id='valw'>A</span><span id='valp'>Y</span>"+
            "<span id='valw'>! </span><span id='valh'>&#x2665;</span>";
        holiCounter++;
    } else if(holi == "03/14") { /* Pi */
        document.getElementById("holiyay").innerHTML = "<span id='pip'>&#x1D6D1;</span><span id='pio'>H</span><span id='piy'>A</span>"+
            "<span id='pio'>P</span><span id='piy'>P</span><span id='pio'>Y </span><span id='piy'>P</span>"+
            "<span id='pio'>I </span><span id='piy'>D</span><span id='pio'>A</span><span id='piy'>Y</span>"+
            "<span id='pio'>! </span><span id='pip'>&#x1D6D1;</span>";
        holiCounter++;
    } else if(holi == "03/17") { /* St Patricks */
        document.getElementById("holiyay").innerHTML = "<span id='spl'>&#x2663;</span><span id='spg'>H</span><span id='spy'>A</span>"+
            "<span id='spg'>P</span><span id='spy'>P</span><span id='spg'>Y </span><span id='spy'>S</span>"+
            "<span id='spg'>T </span><span id='spy'>P</span><span id='spg'>A</span><span id='spy'>T</span>"+
            "<span id='spg'>R</span><span id='spy'>I</span><span id='spg'>C</span><span id='spy'>K</span>"+
            "<span id='spg'>S </span><span id='spy'>D</span><span id='spg'>A</span><span id='spy'>Y</span><span id='spg'>! </span>"+
            "<span id='spl'>&#x2663;</span>";
        holiCounter++;
    } else if(holi == "05/04") { /* May The Fourth Be With You */
        document.getElementById("holiyay").innerHTML = "<span id='m4i'>&#x2736;</span><span id='m4b'>M</span><span id='m4y'>A</span>"+
            "<span id='m4b'>Y </span><span id='m4y'>T</span><span id='m4b'>H</span><span id='m4y'>E </span>"+
            "<span id='m4b'>&#x275D;</span><span id='m4y'>F</span><span id='m4b'>O</span><span id='m4y'>U</span>"+
            "<span id='m4b'>R</span><span id='m4y'>T</span><span id='m4b'>H</span><span id='m4y'>&#x275E; </span><span id='m4b'>B</span>"+
            "<span id='m4y'>E </span><span id='m4b'>W</span><span id='m4y'>I</span><span id='m4b'>T</span><span id='m4y'>H </span>"+
            "<span id='m4b'>Y</span><span id='m4y'>O</span><span id='m4b'>U</span><span id='m4y'>! </span><span id='m4i'>&#x2736;</span>";
        holiCounter++;
    } else if(holi == "05/05") { /* Cinco De Mayo */
        document.getElementById("holiyay").innerHTML = "<span id='cdmi'>&#x266A;</span><span id='cdmy'>F</span><span id='cdmg'>E</span>"+
            "<span id='cdmr'>L</span><span id='cdmy'>I</span><span id='cdmg'>Z </span><span id='cdmr'>C</span>"+
            "<span id='cdmy'>I</span><span id='cdmg'>N</span><span id='cdmr'>C</span><span id='cdmy'>O </span>"+
            "<span id='cdmg'>D</span><span id='cdmr'>E </span><span id='cdmy'>M</span><span id='cdmg'>A</span><span id='cdmr'>Y</span>"+
            "<span id='cdmy'>O</span><span id='cdmg'>! </span><span id='cdmi'>&#x266C;</span><br>"+
            "<span id='cdmi'>&#x263B;</span><span id='cdmr'>H</span><span id='cdmy'>A</span><span id='cdmg'>P</span><span id='cdmr'>P</span>"+
            "<span id='cdmy'>Y </span><span id='cdmg'>B</span><span id='cdmr'>I</span><span id='cdmy'>R</span><span id='cdmg'>T</span>"+
            "<span id='cdmr'>H</span><span id='cdmy'>D</span><span id='cdmg'>A</span><span id='cdmr'>Y </span><span id='cdmy'>J</span>"+
            "<span id='cdmg'>O</span><span id='cdmr'>W</span><span id='cdmy'>I</span><span id='cdmg'>! </span><span id='cdmi'>&#x263B;</span>";
        holiCounter++;
    } else if(holi == "10/31") { /* Halloween */
        document.getElementById("holiyay").innerHTML = "<span id='hlwng'>&#x263E;</span><span id='hlwno'>H </span><span id='hlwnb'>A </span>"+
            "<span id='hlwno'>P </span><span id='hlwnb'>P </span><span id='hlwno'>Y </span><span id='hlwnb'>H </span>"+
            "<span id='hlwno'>A </span><span id='hlwnb'>L </span><span id='hlwno'>L </span><span id='hlwnb'>O </span>"+
            "<span id='hlwno'>W </span><span id='hlwnb'>E </span><span id='hlwno'>E </span><span id='hlwnb'>N </span>"+
            "<span id='hlwno'>! </span><span id='hlwng'>&#x263E;</span>";
        holiCounter++;
    } else if(holi == "11/01") { /* All Saint's Day */
        document.getElementById("holiyay").innerHTML = "<span id='hlwng'>&#x271F;</span><span id='hlwsb'>H </span><span id='hlwsw'>A </span>"+
            "<span id='hlwsb'>P </span><span id='hlwsw'>P </span><span id='hlwsb'>Y </span><span id='hlwsw'>H </span>"+
            "<span id='hlwsb'>A </span><span id='hlwsw'>L </span><span id='hlwsb'>L </span><span id='hlwsw'>O </span>"+
            "<span id='hlwsb'>W </span><span id='hlwsw'>M </span><span id='hlwsb'>A </span><span id='hlwsw'>S </span>"+
            "<span id='hlwsb'>! </span><span id='hlwng'>&#x271F;</span>";
        holiCounter++;
    } else if(holi == "12/24") { /* Xmas Eve */
        document.getElementById("holiyay").innerHTML = "<span id='hlwng'>&#x2734;</span><span id='xmasr'>M</span><span id='xmasg'>E</span>"+
            "<span id='xmasr'>R</span><span id='xmasg'>R</span><span id='xmasr'>Y </span><span id='xmasg'>C</span>"+
            "<span id='xmasr'>H</span><span id='xmasg'>R</span><span id='xmasr'>I</span><span id='xmasg'>S</span>"+
            "<span id='xmasr'>T</span><span id='xmasg'>M</span><span id='xmasr'>A</span><span id='xmasg'>S </span><span id='xmasr'>E</span>"+
            "<span id='xmasg'>V</span><span id='xmasr'>E</span><span id='xmasg'>! </span><span id='hlwng'>&#x2734;</span>";
        holiCounter++;
    } else if(holi == "12/25") { /* Xmas */
        document.getElementById("holiyay").innerHTML = "<span id='xmasw'>&#x2744;</span><span id='xmasr'>M</span><span id='xmasg'>E</span>"+
            "<span id='xmasr'>R</span><span id='xmasg'>R</span><span id='xmasr'>Y </span><span id='xmasg'>C</span>"+
            "<span id='xmasr'>H</span><span id='xmasg'>R</span><span id='xmasr'>I</span><span id='xmasg'>S</span>"+
            "<span id='xmasr'>T</span><span id='xmasg'>M</span><span id='xmasr'>A</span><span id='xmasg'>S</span>"+
            "<span id='xmasr'>! </span><span id='xmasw'>&#x2744;</span>";
        holiCounter++;
    } else if(holi == "12/31") { /* New Years Eve */
        document.getElementById("holiyay").innerHTML = "<span id='hlwng'>&#x2655;</span><span id='nyg'>H</span><span id='nyb'>A</span>"+
            "<span id='nyg'>P</span><span id='nyb'>P</span><span id='nyg'>Y </span><span id='nyb'>N</span>"+
            "<span id='nyg'>E</span><span id='nyb'>W </span><span id='nyg'>Y</span><span id='nyb'>E</span>"+
            "<span id='nyg'>A</span><span id='nyb'>R</span><span id='nyg'>S </span><span id='nyb'>E</span>"+
            "<span id='nyg'>V</span><span id='nyb'>E</span><span id='nyg'>! </span><span id='hlwng'>&#x2655;</span>";
        holiCounter++;
    } else if(holi == "01/01") { /* New Years */
        document.getElementById("holiyay").innerHTML = "<span id='hlwng'>&#x265B;</span><span id='nyg'>H</span><span id='nyb'>A</span>"+
            "<span id='nyg'>P</span><span id='nyb'>P</span><span id='nyg'>Y </span><span id='nyb'>N</span>"+
            "<span id='nyg'>E</span><span id='nyb'>W </span><span id='nyg'>Y</span><span id='nyb'>E</span>"+
            "<span id='nyg'>A</span><span id='nyb'>R</span><span id='nyg'>!</span><span id='nyb'>! </span><span id='hlwng'>&#x265B;</span>";
        holiCounter++;
    }

    if(holiCounter > 0) {
        var c2Height = document.getElementById('holiyay').offsetHeight;
        var oldC2Height = document.getElementById('clm2').style.top.split('');
        for(let i = 0; i < 2; i++) oldC2Height.pop();
        document.getElementById('clm2').style.top = String(c2Height+Number(oldC2Height.join(''))) + 'px';
    }
}