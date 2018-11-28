/*
** Anthony Rebuelta
** Lab1114: Snake Game
** 14 November 2018
*/

// global variables
var w = 20; // size of snake head and food
var snake; // snake variable
var food = []; // food variable
var foodEaten = 0; // variable holding the number of times the food is eaten
var cols; // variable holding the value of the columns
var rows; // variable holding the value of the rows
var s = 800; // size of canvas

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
  food.push(new Food(createVector(floor(random(cols)), floor(random(rows)))));
  food[0].loc.mult(w); // multiplies location with w to accurately locate it in a row and column

}
// draw function that runs objects
function draw(){
  background (20, 20, 20);
  if (snake.gameEnd === "true"){
  textSize(50);
  fill(255);
  text("Game Over", 200, 400);
  }
  else {
  food[0].run();
  snake.run();
  var D = snake.loc.dist(food[0].loc); // calculates the distance between the snake and food
  // if distance is less than the size of the food, the food is spliced and a new food object is created with a random location
  if (D < w){
    food.splice(0, 1);
    food.push(new Food(createVector(floor(random(cols)), floor(random(rows)))));
	food[0].loc.mult(w);
    foodEaten = foodEaten+1; // adds food eaten
    }
  }
  textSize(30);
  fill(255);
  text("Score: ", 40, 60);
  text(foodEaten, 140, 60);
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
