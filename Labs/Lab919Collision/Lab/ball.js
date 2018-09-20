/*
**  Collision
** Anthony Rebuelta
** September 19, 2018
*/

function Ball(location, velocity, rad, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = rad;
  this.col = col;
  this.acc = createVector(0, .1);
  // This function calls other functions
  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
    if (this !== yellowTriangle){
      var steeringForce = p5.Vector.sub(this.loc, yellowTriangle.loc);
      steeringForce.normalize();
      steeringForce.mult(0.5);
  	  this.vel.add(steeringForce);
	    this.loc.add(this.vel);
     }
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    triangle(10, 0, 0, 100, 50, 0);
  }
}
