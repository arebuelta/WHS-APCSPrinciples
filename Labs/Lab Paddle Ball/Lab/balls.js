/*
** Boids Function
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
    this.render();
  }
  // This function changes the location of the boids
  // by adding speed to location and velocity
  this.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    for (var i = 0; i < balls.length; i++){
        if (balls[i].vel.y > 0){
          var dist = balls[i].loc.dist(redRect.loc);
          if (dist < 20){
            balls.splice(i, 1);
            console.log(balls.length);
          }
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
	ellipse(this.loc.x, this.loc.y, rad, rad);
	}
}
