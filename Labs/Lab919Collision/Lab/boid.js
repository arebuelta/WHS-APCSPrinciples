/*
** Boids Function
** Anthony Rebuelta
** October 4, 2018
*/

function Boids(location, velocity, col){
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
    this.loc.add(this.vel);
    // For loop that checks each boids location
    for (var i = 0; i < boids.length; i++){
    var dist = boids[i].loc.dist(yellowBall.loc);
    // Splices boid if its 20 pixels near the yellow ball
      if (dist < 20){
        boids.splice(i, 1)
        console.log(boids.length);
      }
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
	  push(); // push or save the current coord system into the stack
		translate(this.loc.x, this.loc.y);
		rotate(0);
			triangle(-5, 0, 5, 0, 0, -15);
	pop();
	}
}
