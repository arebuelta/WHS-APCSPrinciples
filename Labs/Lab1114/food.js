function Food(loc){
  this.loc = loc;

  this.run = function (){
    this.update();
    this.render();
  }
  this.update = function (){

  }
  this.render = function(){
    fill (255, 0, 0);
    rect(this.loc.x, this.loc.y, w, w);
  }
}
