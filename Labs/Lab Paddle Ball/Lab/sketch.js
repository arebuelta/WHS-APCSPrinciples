/*
** Paddle Ball Lab
** Anthony Rebuelta
** October 4, 2018
*/

//Global variables
var balls = [];
var redRect;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(20);
  loadRect();

}
// draw function that runs objects
function draw() {
  background(20, 20, 20);
  redRect.run();
  // for loop used to run every single ball in the array
  for (var i = 0; i < balls.length; i++){
  balls[i].run();
  }
}
  // function that loads balls, giving them their locations, velocity, and color
function loadBalls(numBalls) {
	for (var i = 0; i < numBalls; i++){
		var location = createVector(random(width), random(height));
		var velocity = createVector(random(-3, 3), random(-3, 3));
		var col = color(255, 255, 255);
		var rad = 20;
    // Pushes balls to the Ball function
		balls.push(new Ball(location, velocity, col, rad));
	}
}

  // function that gives the red rectangle its location, velocity, and color
function loadRect(){
  var location = createVector(width/2, height/2);
  var velocity = createVector(0,0);
  var col = color(255, 255 ,0);
  // sends  to the ball function and defines it
  redRect = new Rect(location, velocity, col);
}
