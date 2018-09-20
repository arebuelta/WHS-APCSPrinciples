
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
//first monster
strokeWeight(5)
smooth()
//body
fill(200, 200, 200);
ellipse(400, 400, 200, 200);
//eyes
fill(255, 255, 255);
ellipse(375, 370, 40, 40);
fill(255, 255, 255);
ellipse(415, 370, 40, 40);
//mouth
fill(100, 200, 100);
rect(370, 420, 50, 20);
//hat
fill(125, 150, 150);
triangle(370, 310, 400, 270, 430, 310);
//pupils
fill(0, 0, 0);
ellipse(375, 370, 15, 15);
ellipse(415, 370, 15, 15);
//ears
fill(255, 255, 255);
arc(310, 400, 50, 50, PI/2, PI);
arc(490, 400, 50, 50, (PI/2)*3, 2*PI);

//second monster
strokeWeight(5)
smooth()
//body
fill(200, 200, 200);
ellipse(400, 150, 200, 200);
//eyes
fill(255, 255, 255);
ellipse(375, 120, 40, 40);
fill(255, 255, 255);
ellipse(415, 120, 40, 40);
//mouth
fill(100, 200, 100);
rect(370, 170, 50, 20);
//hat
fill(125, 150, 150);
triangle(370, 60, 400, 20, 430, 60);
//pupils
fill(0, 0, 0);
ellipse(375, 120, 15, 15);
ellipse(415, 120, 15, 15);
//ears
fill(255, 255, 255);
arc(310, 150, 50, 50, PI/2, PI);
arc(490, 150, 50, 50, (PI/2)*3, 2*PI);

//third monster
strokeWeight(5)
smooth()
//body
fill(200, 200, 200);
ellipse(400, 650, 200, 200);
//eyes
fill(255, 255, 255);
ellipse(375, 620, 40, 40);
fill(255, 255, 255);
ellipse(415, 620, 40, 40);
//mouth
fill(100, 200, 100);
rect(370, 670, 50, 20);
//hat
fill(125, 150, 150);
triangle(370, 560, 400, 520, 430, 560);
//pupils
fill(0, 0, 0);
ellipse(375, 620, 15, 15);
ellipse(415, 620, 15, 15);
//ears
fill(255, 255, 255);
arc(310, 650, 50, 50, PI/2, PI);
arc(490, 650, 50, 50, (PI/2)*3, 2*PI);
}
