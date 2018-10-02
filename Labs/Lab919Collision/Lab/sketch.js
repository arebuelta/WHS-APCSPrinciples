//Global variables
var boids = [];
var yellowBall;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBoids(55);
  loadBall();

}
function draw() {
  background(20, 20, 20);
  yellowBall.run();
  for (var i = 0; i < boids.length; i++){
  boids[i].run();
  }
}

function loadBoids(numBoids) {
	for (var i = 0; i < numBoids; i++){
		var location = createVector(random(width), random(height));
		var velocity = createVector(random(-3, 3), random(-3, 3));
		var col = color(100, 100, 100);
		boids.push(new Boids(location, velocity, col));
	}
console.log(boids.length);
}

function loadBall(){
  var location = createVector(width/2, height/2);
  var velocity = createVector(0,0);
  var col = color(255, 255 ,0);
  var rad = 40;
  yellowBall = new Ball(location, velocity, col, rad);
}
