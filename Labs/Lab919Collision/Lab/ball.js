/*
** Ball Function
** Anthony Rebuelta
** October 4, 2018
*/

function Ball(location, velocity, col, rad){
  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = rad;
  this.col = col;

  this.run = function(){
    this.update();
    this.render();
  }
  // This function changes the location of the ball by making it follow the mouse
  this.update = function(){
    var mouseLoc = createVector(mouseX, mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09)
     }
  //checkEdges() reverses speed when the ball touches an edge
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, rad, rad);
  }
}
