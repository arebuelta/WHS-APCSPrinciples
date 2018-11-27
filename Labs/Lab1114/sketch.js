/*
** Anthony Rebuelta
** Lab1114: Snake Game
** 14 November 2018
*/

// global variables
var w = 30;
var snake;
var food = [];
var foodEaten = 0;

function setup(){
  cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background (20, 20, 20);
  snake = new Snake(createVector(400, 400), createVector(2, 0))
  food.push(new Food(createVector(random(800), random(800))));

}
function draw(){
  background (20, 20, 20);
  snake.run();
  food[0].run();
  var D = snake.loc.dist(food[0].loc);
  if (D < w){
    food.splice(0, 1);
    food.push(new Food(createVector(random(800), random(800))));
    foodEaten = foodEaten+1;
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -2);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, 2);
  }
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-2, 0);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(2, 0);
  }
}
