/* Lab1026 Color Bars
** Anthony Rebuelta
** October 26, 2018
*/
var bars = [];
var sortedBars = [];

function setup(){
createCanvas()
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);
loadBars(255);
myBubbleSort();
}

function draw(){
for (var i = 0; i < bars.length; i++){
  sortedBars[i].run();
}
}

function myBubbleSort(){
  for (var i = bars.length-1; i >= 1; i--){
    for (var j = 0; j < bars.length; j++){
      var x = [];
      x = sortedBars[j+1].col;
      if (blue(sortedBars[j].col) > blue(x)){
      var temp = sortedBars[j];
      sortedBars[j] = sortedBars[j+1];
      sortedBars[j+1] = temp;
    }
    }
  }
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
  sortedBars = bars;
}
