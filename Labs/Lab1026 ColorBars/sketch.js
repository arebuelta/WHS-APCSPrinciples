/* Lab1026 Color Bars
** Anthony Rebuelta
** October 26, 2018
*/
var bars = [];
var sortedBars = [];
var clrBlue = [];

function setup(){
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);
loadBars(255);
getBlue();
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
      if (clrBlue[j] > clrBlue[j+1]){
      var temp = sortedBars[j];
      sortedBars[j] = sortedBars[j+1];
      sortedBars[j+1] = temp;
      console.log('test');
      getBlue();
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

function getBlue(){
  for (var i = 0; i < sortedBars.length; i++){
    clrBlue[i] = blue(sortedBars[i].col);
  }
}
