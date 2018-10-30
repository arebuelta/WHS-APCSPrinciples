/* ColorBar Constructor Function
** Anthony Rebuelta
** October 26, 2018
*/

function ColorBar(loc, w, h, col){
  this.loc = loc;
  this.w = w;
  this.h = h;
  this.col = col;
  this.run = function (){
    this.render();
  }
  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, w, h);
  }
}
