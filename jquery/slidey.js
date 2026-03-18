"use strict";

// This one's for image sliders
var cur1 = 0;
var slides = document.querySelectorAll('.slider');
setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  cur1 = (cur1 != slides.length - 1) ? cur1 + 1 : 0;
  slides[cur1].style.opacity = 1;
}, 6000);

// This one's for text sliders
var cur2 = 0;
var tSlds = document.querySelectorAll('.textSlide');
if (tSlds.length > 0) {
	setInterval(function() {
	  for (var i = 0; i < tSlds.length; i++) {
		tSlds[i].style.opacity = 0;
	  }
	  cur2 = (cur2 != tSlds.length - 1) ? cur2 + 1 : 0;
	  tSlds[cur2].style.opacity = 1;
	}, 6000);
}


var sorry1 = document.getElementById('sorry1');
var sorry2 = document.getElementById('sorry2');
var incdnts = document.querySelectorAll('.incdnt');
var descs = document.querySelectorAll('.desc');
var curIncdnt = 0;

document.onload = goToIncdnt(0);

function nextClick() {
	if (curIncdnt == (incdnts.length - 1)) {
		curIncdnt = 0
	} else {
		curIncdnt += 1
	};
	goToIncdnt(curIncdnt);
}

function prevClick() {
	if (curIncdnt == 0) {
		curIncdnt = (incdnts.length - 1)
	} else {
		curIncdnt -= 1
	};
	goToIncdnt(curIncdnt);
}

function goToIncdnt(n) {
	if (incdnts[n]) {
		sorry1.innerHTML = incdnts[n].innerHTML;
		sorry2.innerHTML =document.getElementById(incdnts[n].id).innerHTML;
	}
}