/* Lab1026 Color Bars
** Anthony Rebuelta
** October 26, 2018
*/
var bars = [];

function setup(){
createCanvas()
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);
loadBars(255);
}

function draw(){
for (var i = 0; i < bars.length; i++){
  bars[i].run();
}
}

function myBubbleSort(){

}

function mySelectSort(){
}


function loadBars(numBars){
  for (var i = 0; i < numBars; i++){
    var h = 100;
    var w = (800/numBars);
    var loc = createVector((w*i), 100);
    var col = color(random(255), random(255), random(255));
    bars.push(new ColorBar(loc, w, h, col));
  }
}
