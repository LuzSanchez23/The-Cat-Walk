var movePixels = 10;
var delayMs = 50;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}
//assigment on class starts here👇🏽

//#1 when press start button the cat start walking
function onStartClick() {
    startCatWalk();
}
var startButton = document.getElementById('start-button'); //1st where to put the event?
startButton.addEventListener('click', onStartClick); //method what type of event we want and what trigger.

//#2 when press stop button the cat stop walking -starts the timer and speed of the cat
function onStopClick(){
    //clears the cat timer and starts it back at 0
window.clearInterval(catTimer);
}

//stop button functionality
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick);

//#3 
//Speed funtionatily
function onSpeedClick(){
    //telling the movePixels variable to increase by 10
    movePixels += 2;
    //when measuringi speed, you have to use 1000/x (1000/50 or 1000/20 or 1000/5)
    var speed = movePixels * (1000/20);
    document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px/second';
}
var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);