// snake constructer function
function Snake(loc, vel){
  this.loc = loc;
  this.vel = vel;
  this.segments = [];

  this.run = function (){
    this.update();
    this.grow();
    this.tangled();
    this.render();
  }
  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);
    // add segments on to snake
  }
  this.grow = function(){
    if (foodEaten > 0){
      var v1; // x variable used to determine location of segments based on velocity of snake
      var v2;
      for (var i = 0; i < foodEaten; i++){
      if (this.vel.x === 2 && this.vel.y === 0){
        v1 = -w*(i+1);
        v2 = 0;
        if(keyCode === UP_ARROW){
          var temp = this.loc.y;
          console.log(temp);
          while (w > this.loc.y-temp){
            v1 = -w*(i+1);
            v2 = 0;
          }
        }
      }
      else if (this.vel.x === -2 && this.vel.y === 0){
        v1 = w*(i+1);
        v2 = 0;
      }
      else if (this.vel.x === 0 && this.vel.y === -2){
        v1 = 0;
        v2 = w*(i+1);
      }
      else {
        v1 = 0;
        v2 = -w*(i+1);
      }
      fill (0, 255, 0);
      this.segments[i] = rect(this.loc.x+v1, this.loc.y+v2, w, w);
      }
    }
  }
  this.tangled = function(){

  }
  this.render = function(){
    fill (0, 255, 0);
    rect(this.loc.x, this.loc.y, w, w);
  }
}
