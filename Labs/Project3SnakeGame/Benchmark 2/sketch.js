/*
** Anthony Rebuelta
** Lab1114: Snake Game
** 14 December 2018
*/

// global variables
var w = 20; // size of snake head and food
var snake; // snake variable
var food = []; // food variable
var foodEaten = 0; // variable holding the number of times the food is eaten
var cols; // variable holding the value of the columns
var rows; // variable holding the value of the rows
var s = 800; // size of canvas
var locked = false; // variable used to determine if play button is pressed
var overBox = false; // variable used to determine if mouse is over play button

// setup function
function setup(){
  cnv = createCanvas(s, s);
  cnv.position((windowWidth-width)/2, 30);
  background (20, 20, 20);
  frameRate (10);
  // creates snake object
  snake = new Snake(createVector(400, 400), createVector(1, 0))
  cols = floor(s/w); // defines columns variable
  rows = floor(s/w); // defines rows variable
  // creates food object into an array of only one object
  createFood();
  food[0].loc.mult(w); // multiplies location with w to accurately locate it in a row and column
}
// draw function that runs objects
function draw(){
  background (20, 20, 20);
  // calls game function if play button was pressed and game end variable is set to false 
  if (locked === true && snake.gameEnd === false){
    game();
  }
  // displays opening screen and checks if mouse is over the play button only if the button is not pressed and game has not ended
  else if (locked === false && snake.gameEnd === false){
    openingScreen();
    if (mouseX > 325 && mouseX < 325+175 &&
      mouseY > 350 && mouseY < 350+75) {
    overBox = true;
    }
    else {
    overBox = false;
      }
    }
	// displays game over screen and checks if mouse is over the play again button only if the button is not pressed and game has ended
    else if (locked === false && snake.gameEnd === true){
      gameOverScreen();
      if (mouseX > 320 && mouseX < 320+175 &&
        mouseY > 450 && mouseY < 450+60) {
      overBox = true;
      }
      else {
      overBox = false;
        }
      }
	  // resets game by reseting variables and game end variable only if the play again button was pressed
    else if (locked === true && snake.gameEnd === true){
      snake = 0;
      food = [];
      setup();
      foodEaten = 0;
      snake.gameEnd = false;
    }
  }
// keyPressed function that changes the velocity of the snake based on what arrow key was pressed
function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -1);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 1);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-1, 0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(1, 0);
  }
}
// openingScreen function that displays opening splash screen with play button
function openingScreen(){
  textSize(75);
  fill(255);
  text("Snake Game", 200, 250);
  fill (255);
  rect(325, 350, 175, 75);
  fill (0);
  textSize(40);
  text("Play", 370, 400);
}
// gameOverScreen function that displays game over splash screen with play again button
function gameOverScreen(){
  textSize(50);
  fill(255);
  text("Game Over", 275, 400);
  fill(255);
  rect(320, 450, 175, 60);
  textSize(30);
  fill(0);
  text("Play Again", 340, 490);
}
// game function that runs game
function game(){
  food[0].run();
  snake.run();
  var D = snake.loc.dist(food[0].loc); // calculates the distance between the snake and food
  // if distance is less than the size of the food, the food is spliced and a new food object is created with a random location
  if (D < w){
    food.splice(0, 1);
    createFood();
  food[0].loc.mult(w);
    foodEaten = foodEaten+1; // adds food eaten
    }
  textSize(30);
  fill(255);
  text("Score: ", 40, 60);
  text(foodEaten, 140, 60);
}
// mousePressed function that runs only when mouse is pressed
function mousePressed(){
	// conditional statement that marks button as pressed only if the mouse is over the button
  if(overBox) {
    locked = true;
  } else {
    locked = false;
  }
}
// createFood function that creates food objects
function createFood(){
	food.push(new Food(createVector(floor(random(cols)), floor(random(rows)))));
	for (var i = 0; i < snake.segments.length; i++){
	// checks if food location is the same as snake segments and reruns function if the statement is true
	if (food[0].loc.x === snake.segments[i].x && food[0].loc.y === snake.segments[i].y){
		createFood();
	}
	}
}