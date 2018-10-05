/*
** Boids Function
** Anthony Rebuelta
** October 4, 2018
*/

function Rect(location, velocity, col){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.col = col;
  // This function calls other functions
  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the boids
  // by adding speed to location and velocity
  this.update = function(){
    var mouseLoc = createVector(mouseX, 0);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)
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
		rect(this.loc.x, 550, 150, 20);
	}
}
