
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
	background(200, 200, 200);
	fill(255, 5, 81);
	rect(100, 100, 50, 90);
	ellipse(200, 200, 50, 70);
	rect(600, 600, 70, 30);
	ellipse(400, 400, 70, 30);
	ellipse(300, 300, 50, 50);
	rect(500, 500, 50, 50);
	rect(700, 700, 85, 40);
	ellipse(580, 300, 100, 100);
}
