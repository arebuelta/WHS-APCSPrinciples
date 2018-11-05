/* ColorBar Constructor Function
** Anthony Rebuelta
** October 26, 2018
*/

function ColorBar(loc, w, h, col){
  // Instance variables
  this.loc = loc;
  this.w = w;
  this.h = h;
  this.col = col;
  // This function calls other functions
  this.run = function (){
    this.render();
  }
  // render() draws each bar
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, w, h);
  }
}
