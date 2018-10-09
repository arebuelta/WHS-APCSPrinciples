/*
** Paddle Function
** Anthony Rebuelta
** October 4, 2018
*/

function Paddle(velocity, col){
  // Instance variables
  this.loc = createVector(mouseX, 550);
  this.vel = velocity;
  this.col = col;
  // This function calls other functions
  this.run = function (){
    this.update();
    this.render();
  }
  // This function changes the location of the boids
  // by adding speed to location and velocity
  this.update = function(){
    var mouseLoc = createVector(mouseX, 550);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
		rect(this.loc.x-((w+(100*a))/2), this.loc.y, (w+(100*a)), 20);
	}
}
