/* 
** Bubble Sort
** Anthony Rebuelta
** October 22 2018
*/

// Global variables
var words = [];
var txt1;
var txt2;
var x;
function preLoad(){
	txt1 = loadStrings('words.txt');
	txt2 = loadStrings('words.txt');
}
// setup code
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  preLoad();
  x = 1;
}
// draw function that runs objects
function draw(){
  fill (255, 255, 255)
  background(20, 20, 20);
  fill(255, 255, 255);
  textSize(30);
  text("Original:", 25, 50);
  text(txt1, 140, 50);
  for (var i = txt2.length-1; i >= 1; i--){
	  for (var j = 0; j < txt2.length; j++){
		  if (txt2[j] > txt2[j+1]){
			  swap(txt2, j, j+1);
		  }
	  }
  }
  fill(255, 255, 255);
  text("Rearranged:", 0, 550);
  text(txt2, 170, 550);
}
function swap(txt2, a, b){
	var old;
	old = txt2[a];
	txt2[a] = txt2[b]	
	txt2[b] = old;
}