//Global variables
var boids = [];
var yellowTriangle;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(25);
}
function draw() {
  background(20, 20, 20);
  yellowTriangle.run();
  for (i = 0; i < boids.length; i++){
  boids[i].run();
  }
}
function loadBalls(numBalls){
  for (i = 0; i < numBalls; i++){
	  var location = createVector(random(width), random(height));
	  var velocity = createVector(random(-3, 3), random(-3, 3));
    var r = random(20, 30, 40);
    var col = color(random(255), random(255), random(255));
    boids.push(new Ball(location, velocity, r, col));
  }
var location = createVector(width/2, height/2);
var velocity = createVector(0,0);
var r = 55;
var col = color(255,0,0);
yellowTriangle = new Ball(location, velocity, r, col);
}
