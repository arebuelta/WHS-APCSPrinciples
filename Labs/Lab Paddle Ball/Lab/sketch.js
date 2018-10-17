/*
** Paddle Ball Lab
** Anthony Rebuelta
** October 4, 2018
*/

//Global variables
var balls = [];
var paddle;
var a = 0; // Variable used to increase paddle size and number of balls
var c = 0; // Variable that is used to get the score of spliced balls
var w = 150; // Original width of paddle
var b;
var end;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  b = 20*(1+a);
  loadBalls(b);
  loadPaddle();
}
// draw function that runs objects
function draw() {
  fill (255, 255, 255)
  background(20, 20, 20);
  paddle.run();
  textSize(25);
  fill (255, 255, 255);
  text("Score:", 50 , 50);
  text(c, 140, 50);
  // for loop used to run every single ball in the array
  for (var i = 0; i < balls.length; i++){
  balls[i].run();
  }
  if (end === "done"){
    fill (255, 255, 255);
    text("congrats", 400, 400);
  }
}
  // function that loads balls, giving them their locations, velocity, and color
function loadBalls(numBalls) {
	for (var i = 0; i < numBalls; i++){
		var location = createVector(random(width), random(0, 200));
		var velocity = createVector(random(-3, 3), -2);
		var col = color(255, 255, 255);
		var rad = 20;
    // Pushes balls to the Ball function
		balls.push(new Ball(location, velocity, col, rad));
	}
}

  // function that gives the red rectangle its location, velocity, and color
function loadPaddle(){
  var velocity = createVector(0,0);
  var col = color(255, 255 ,0);
  // sends to the ball function and defines it
  paddle = new Paddle(velocity, col);
}
