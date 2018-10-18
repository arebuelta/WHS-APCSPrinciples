/*
** Balls Function
** Anthony Rebuelta
** October 4, 2018
*/

function Ball(location, velocity, col, rad){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.col = col;
  this.rad = rad;
  this.acc = createVector(0, .1);
  // This function calls other functions
  this.run = function (){
    this.checkEdges();
    this.update();
    this.collision(); // calls collision detection function
    this.render();
  }
  // This function changes the location of the boids
  // by adding speed to location and velocity
  this.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  // This function checks for collision and removes balls
  this.collision = function (){
    for (var i = 0; i < balls.length; i++){
    var m = 250;
    // relocates balls if they go out of canvas
    if (balls[i].loc.y > 820){
      balls[i].loc.y = 0;
      balls[i].vel.y = -2;
      }
    // p1 = coordinates of the top left corner of paddle
    var p1 = createVector(paddle.loc.x-(m/2), paddle.loc.y);
    // x1 gets the x-distance between the ball and p1
    var x1 = balls[i].loc.x-p1.x;
    // dist1 gets the distance between the ball and p1
    var dist1 = balls[i].loc.dist(p1);
    // height = the height of the ball from the top of the paddle
    var height = Math.sqrt((dist1*dist1)-(x1*x1));
    // p2 = coordinates of the bottom left corner of paddle
    var p2 = createVector(p1.x, p1.y+20);
    // dist2 gets the distance between the ball and p2
    var dist2 = balls[i].loc.dist(p2);
    // x2 gets the x-distance between the ball and p2
    var x2 = balls[i].loc.x-p2.x;
    // height2 = the height of the ball from the bottom of paddle
    var height2 = Math.sqrt((dist2*dist2)-(x2*x2));
    /* Splices balls if their x distance is between 0 and the paddle's width,
    ** their velocity is positive, and their height is less than 10 pixels from the top of the paddle
    */
    if (balls[i].vel.y > 0 && x1 > 0 && x1 < m && height < 10){
            balls.splice(i, 1);
            c = c+1;
            if (balls.length === 0){
              end = "done";
            }
        }
    /* Resets game by splicing all balls if the ball's x distance is between 0 and the paddle's width,
    ** their velocity is positive, and their height is less than 10 pixels from the bottom of the paddle
    */
    else if (balls[i].vel.y < 0 && x2 > 0 && x2 < m && height2 < 10) {
            balls.length = 0;
            a = a+1;
            b = 20*(1+a);
            for (var i = 0; i < balls.length; i++){

            }
          }
        }
      }
	    //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
	  if(this.loc.y < 0) this.vel.y = -this.vel.y;
	  if(this.loc.y > height) this.vel.y = -this.vel.y
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
	  ellipse(this.loc.x, this.loc.y, rad, rad);
	}
}
