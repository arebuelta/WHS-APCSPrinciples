/* Lab1026 Color Bars
** Anthony Rebuelta
** October 26, 2018
*/

// Global variables
var bars = [];
var sortedBars = [];
var clrBlue = [];

// setup code
function setup(){
var cnv = createCanvas(800, 800);
cnv.position((windowWidth-width)/2, 30);
background(20, 20, 20);
loadBars(255);
getBlue();
myBubbleSort();
}

// draw function that runs objects
function draw(){
fill (255, 255, 255)
background(20, 20, 20);
for (var i = 0; i < bars.length; i++){izz 
	bars[i].run();
	sortedBars[i].run();
	}
}

// bubble sort function that sorts the bars based on their blue value
function myBubbleSort(){
  for (var i = bars.length-1; i >= 1; i--){
	  	/* for loop that checks if the blue value of each bar is in order
		** and swaps them if they are not */
    for (var j = 0; j < bars.length; j++){
      if (clrBlue[j] > clrBlue[j+1]){
      var temp = sortedBars[j];
      sortedBars[j] = sortedBars[j+1];
      sortedBars[j+1] = temp;
      getBlue();
    }
    }
  }
}

// loadBars function that creates bar objects
function loadBars(numBars){
  for (var i = 0; i < numBars; i++){
    var h = 100;
    var w = (800/numBars);
    var loc = createVector((w*i), 100);
	var loc2 = createVector((w*i), 250);
    var col = color(random(255), random(255), random(255));
    bars.push(new ColorBar(loc, w, h, col));
	sortedBars.push(new ColorBar(loc2, w, h, col));
  }
}

// getBlue function that gets the blue value of each bar
function getBlue(){
  for (var i = 0; i < sortedBars.length; i++){
    clrBlue[i] = blue(sortedBars[i].col);
  }
}
