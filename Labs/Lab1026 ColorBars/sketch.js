/* Lab1026 Color Bars
** Anthony Rebuelta
** October 26, 2018
*/
var bars = [];

function setup(){
createCanvas()
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
loadBars(255);
}

function draw(){
fill (255, 255, 255)
background(20, 20, 20);
for (var i = 0; i < bars.length; i++){
  bars[i].run();
}
}

function myBubbleSort(){

}

function mySelectSort(){
}


function loadBars(numBars){
  var x = 0;
  for (var i = 0; i < bars.length; i++){
    var h = 100;
    var w = (255/bars.length);
    var location = createVector((x+w), 50);
    var color = color(random(255), random(255), random(255));
    bars.push(new ColorBar(location, w, h, color));
  }
}
