window.human = false;

var canvasE1 = document.querySelector('.fireworks');
var ctx = canvasE1.getContext('2d');
var numbreOfParticulas = 30;
var PointerX = 0;
var PointerY = 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' :

function setCanvasSize() {
    canvasE1.width = window.innerWidth * 2;
    canvasE1.height = window.innerHeight * 2;
    canvasE1.style.width = window.innerWidth + 'px';
    canvasE1.style.height = window.innerHeight + 'px';
    canvasE1.getContext('2d').scale(2, 2);
}