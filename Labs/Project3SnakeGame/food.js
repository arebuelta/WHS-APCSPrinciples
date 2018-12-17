/*
** Anthony Rebuelta
** Food Constructor Function
** 17 December 2018
*/

function Food(loc){
  // Instance variable
  this.loc = loc;
  // This function calls other functions
  this.run = function (){
    this.render();
  }
  // render() draws the food at the new location
  this.render = function(){
    fill (255, 0, 0);
	image(apple, this.loc.x, this.loc.y, w, w);
  }
}
