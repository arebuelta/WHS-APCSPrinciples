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
var w = 250; // Original width of paddle
var b; // number of balls
var end; // variable used to mark the end of the game
var button;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  b = 20*(1+a);
  loadBalls(b);
  loadPaddle();
  button = createButton('test');
  button.position(750, 750);
  button.mousePressed(instructions);
}
// draw function that runs objects
function draw() {
  fill (255, 255, 255)
  background(20, 20, 20);
  paddle.run();
  button;
  textSize(25);
  fill (255, 255, 255);
  text("Score:", 50 , 50);
  text(c, 140, 50);
  // for loop used to run every single ball in the array
  for (var i = 0; i < balls.length; i++){
  balls[i].run();
  }
  // ends game if all balls are spliced, announcing that the player won
  if (end === "done"){
    fill (255, 255, 255);
    textSize(50);
    text("You Won!", 310, 400);
  }
  // ends game if number of balls increases to over 250, announcing that the player lost
  else if (balls.length > 250){
    fill (255, 255, 255);
    textSize(50);
    text("You Lose!", 300, 400);
    // makes the width of the paddle zero in order to remove it from the screen
    w = 0;
    // makes the velocities of the balls zero to stop the game from running
    for (var i = 0; i < balls.length; i++){
      balls[i].vel.x = 0;
      balls[i].vel.y = 0;
    }
  }
}
function instructions(){
  textSize(25);
  fill (255, 255, 255);
  text("Score:", 100 , 50);
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
