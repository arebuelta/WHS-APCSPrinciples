/*
** Anthony Rebuelta
** Snake Constructor Function
** 14 December 2018
*/

function Snake(loc, vel){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.segments = []; // array of the snake's segments
  this.gameEnd = false; // variable used to determine if game has ended
  // This function calls other functions
  this.run = function (){
    this.update();
	this.render();
    this.endGame();
  }
  // This function changes the location of the snake adding velocity to location
  // Also adds a location to the segments array
  this.update = function(){
	// for loop that makes a segment equal to the next segment
    for (var i = 0; i < this.segments.length-1; i++) {
		this.segments[i] = this.segments[i+1];
	}
	// gives a location to the segments
    this.segments[foodEaten-1] = createVector(this.loc.x, this.loc.y);
    this.loc.x = this.loc.x + this.vel.x*w;
    this.loc.y = this.loc.y + this.vel.y*w;

  }
  // This function ends game when locations of segments and snake are the same and when the snake touches the wall
  this.endGame = function(){
	  // for loop that checks if the snake head collides with any segment and if so ends the game
    for (var i = 0; i < this.segments.length; i++){
      if (this.loc.x === this.segments[i].x && this.loc.y === this.segments[i].y){
        this.gameEnd = true;
        locked = false;
	  }
	}
	// if statements that check if the snake hit the wall and if so ends the game
	if (this.loc.x > s){
		this.gameEnd = true;
		locked = false;
	  }
	else if (this.loc.x < 0){
		this.gameEnd = true;
		locked = false; 
	  }
	else if (this.loc.y > s){
		this.gameEnd = true;
		locked = false;
	  }
	else if (this.loc.y < 0){
		this.gameEnd = true;
		locked = false;
    }
  }
  // render() draws the snake at the new location along with its segments
  this.render = function(){
    fill(0, 255, 0);
	// for loop that draws each segment
    for (var i = 0; i < this.segments.length; i++) {
        rect(this.segments[i].x, this.segments[i].y, w, w);
    }
    rect(this.loc.x, this.loc.y, w, w);
  }
}
