/* ColorBar Constructor Function
** Anthony Rebuelta
** October 26, 2018
*/

function ColorBar(location, w, h, color){
  this.loc = location;
  this.w = w;
  this.h = h;
  this.col = color;
  this.run = function (){
    this.render();
  }
  this.render = function(){
    fill(this.col);
    rect(this.locX, this.locY, w, h);
  }
}
