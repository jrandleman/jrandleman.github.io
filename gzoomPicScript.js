/******************************************************************************/
/* IMG ZOOM FUNCTION */
/******************************************************************************/

function zoomUp(elem) { /* NCON PER STAR ARCH SUDOKU */
	elem.classList = 'zoomin';
	elem.onclick = function(){zoomDown(elem)};
}
function zoomDown(elem) { /* NCON PER STAR ARCH SUDOKU */
	elem.classList.remove('zoomin');
	elem.onclick = function(){zoomUp(elem)};
}

function zoomHi(elem) { /* DIM */
	elem.classList = 'zoomin';
	elem.onclick = function(){zoomLow(elem)};
}
function zoomLow(elem) { /* DIM */
	elem.classList = 'zoomout';
	elem.onclick = function(){zoomHi(elem)};
}

function zoomUp2(elem) { /* SUDOKU */
	elem.classList = 'zoomin2';
	elem.onclick = function(){zoomDown2(elem)};
}
function zoomDown2(elem) { /* SUDOKU */
	elem.classList.remove('zoomin2');
	elem.onclick = function(){zoomUp2(elem)};
}