/*
** Balls Function
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
		if (balls[i].loc.y > 820){
			balls[i].loc.y = 0;
			balls[i].vel.y = -2;
		}
		// p1 = coordinates of the top left corner of paddle
		var p1 = createVector(redRect.loc.x-75, redRect.loc.y); 
		// x1 gets the x-distance between the ball and p1
		var x1 = balls[i].loc.x-p1.x;
		// dist1 gets the distance between the ball and p1
		var dist1 = balls[i].loc.dist(p1);
		// height = the height of the ball from the paddle
		var height = Math.sqrt((dist1*dist1)-(x1*x1));
		if (balls[i].vel.y > 0){
			if (x1 > 0){
				if (x1 < 150){
					if (height < 5) balls[i].vel.y = -balls[i].vel.y;	
				}
			}
		}
		else{
			var p2 = createVector(p1.x, p1.y+20);
			var dist2 = balls[i].loc.dist(p2);
			var x2 = balls[i].loc.x-p2.x;
			var height2 = Math.sqrt((dist2*dist2)-(x2*x2));
			if (x2 > 0){
				if (x2 < 150){
					if (height2 < 5){
						balls.splice(i, 1);
						console.log(balls.length);
					}
				}
			}
		}
	}
  }
	    //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
	if(this.loc.y < 0) this.vel.y = -this.vel.y;
	if(this.loc.y > height) this.vel.y = -this.vel.y
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
	ellipse(this.loc.x, this.loc.y, rad, rad);
	}
}
