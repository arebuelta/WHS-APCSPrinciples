//Global variables
var boids = [];
var yellowTriangle;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBoids(55);
  
}
function draw() {
  background(20, 20, 20);
  for (var i = 0; i < boids.length; i++){
  boids[i].run();
  }
  yellowTriangle.run();
}

function loadBoids(numBoids) {
	for (var i = 0; i < numBoids; i++){
		var location = createVector(random(width), random(height));
		var velocity = createVector(random(-3, 3), random(-3, 3));
		var col = color(100, 100, 100);
		boids.push(new Boids(location, velocity, col));
	}
var location = createVector(width/2, height/2);
var velocity = createVector(0,0);
var col = color(255, 255 ,0);
yellowTriangle = new Boids(location, velocity, col);
console.log(boids.length);
}