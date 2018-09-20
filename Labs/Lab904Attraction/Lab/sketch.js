//Global variables
var balls = [];
var redBall;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(25);
}
function draw() {
  background(20, 20, 20);
  redBall.run();
  for (i = 0; i < balls.length; i++){
  balls[i].run();
  }
}
function loadBalls(numBalls){
  for (i = 0; i < numBalls; i++){
	  var location = createVector(random(width), random(height));
	  var velocity = createVector(random(-3, 3), random(-3, 3));
    var r = random(20, 40);
    var col = color(random(255), random(255), random(255));
    balls.push(new Ball(location, velocity, r, col));
  }
var location = createVector(width/2, height/2);
var velocity = createVector(0,0);
var r = 55;
var col = color(255,0,0);
redBall = new Ball(location, velocity, r, col);
}
