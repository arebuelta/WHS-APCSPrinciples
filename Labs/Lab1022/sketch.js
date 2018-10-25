/*
** Bubble Sort
** Anthony Rebuelta
** October 22 2018
*/

// Global variables
var txt1; // variable holding original set of words
var txt2; // variable holding organized set of words using bubble sort
var txt3; // variable holding organized set of words using select sort
// preload code that receives words from text file
function preLoad(){
	txt1 = loadStrings('words.txt');
	txt2 = loadStrings('words.txt');
	txt3 = loadStrings('words.txt');
}
// setup code
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  preLoad(); // calls preLoad
	selectSort();
	console.log(txt3);
}
// draw function that runs objects
function draw(){
  fill (255, 255, 255)
  background(20, 20, 20);
  fill(255, 255, 255);
	// writes text stating original text
  textSize(30);
  text("Original:", 25, 50);
  text(txt1, 140, 50);
	// for loop that goes through all words
  for (var i = txt2.length-1; i >= 1; i--){
		/* for loop that checks if each word is in alphabetical order
		** and swaps them if they are not */
	  for (var j = 0; j < txt2.length; j++){
		  if (txt2[j] > txt2[j+1]){
			  swap(txt2, j, j+1);
		  }
	  }
  }
	// writes text stating text in alphabetical order
  fill(255, 255, 255);
  text("Rearranged: ", 0, 550);
  text(txt2, 170, 550);
}
// swap function that swaps words
function swap(txt2, a, b){
	var old; // variable holding old value of txt2[a]
	old = txt2[a];
	txt2[a] = txt2[b]; // makes txt2[a] equal to txt2[b]
	txt2[b] = old; // makes txt2[b] equal to variable old, which is the old value of txt2[a]
}

function selectSort(){
	for (var j = 0; j < txt3.length-1; j++){
		var iMin = j;
		for (var i = j+1; i < txt3.length; i++){
			if (txt3[i] < txt3[j]){
				iMin = i;
			}
		}
		if (iMin != j){
			swap(txt3, txt[j], txt[iMin]);
		}
	}
}
