/*
** Checkerboard
** Anthony Rebuelta
** September 11, 2018
*/

function Square(locX, locY, se, col){
  // Instance variables
  this.locX = locX;
  this.locY = locY;
  this.se = se;
  this.col = col;
  // This function calls other functions
  this.run = function (){
    this.render();
  }
  this.render = function(){
    fill(this.col);
    rect(this.locX, this.locY, se, se);
  }
}
