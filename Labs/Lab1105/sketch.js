/* Lab1101
** Anthony Rebuelta
** November 1, 2018
*/

// global variables
var data;
var barHeight;
var males = [];
var x = 0;
y = 0;
// setup code
function setup(){
	var cnv = createCanvas(800, 800);
	cnv.position((windowWidth-width)/2, 30);
	background(20, 20, 20);
	loadJSON("population.json", gotData); // data variable is assigned json data
}
function gotData(jData){
	data = jData;
}
function draw(){
	fill (255, 255, 255)
	background(20, 20, 20);
	if (data){
		if (y < 1){
			for (var i = 0; i < data.countrydata.length; i++){
				males[i] = data.countrydata[i]
			}
			y = y+1;
		}
		for (var i = males.length-1; i >= 1; i--){
			for (var j = 0; j < males.length-1; j++){
				if (males[j].males > males[j+1].males){
					swap(males, j, j+1)
				}
			}
		}
		// can remove
			if (x < males.length){
				for (var i = 0; i < males.length; i++){
					console.log(males[i])
					x = x+males.length;
				}
			}
		// can remove
		}
	}

	function swap(males, a, b){
		var old; // variable holding old value of txt2[a]
		old = males[a];
		males[a] = males[b]; // makes txt2[a] equal to txt2[b]
		males[b] = old; // makes txt2[b] equal to variable old, which is the old value of txt2[a]
	}

	function match(){
		for (var i = 0; i > data.countrydata.length; i++){

		}
	}
