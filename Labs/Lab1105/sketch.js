/* Lab1101
** Anthony Rebuelta
** November 1, 2018
*/

// global variables
var data;
var barHeight;
// setup code
function setup(){
loadJSON("population.json", gotData); // data variable is assigned json data
}
function gotData(jData){
	data = jData;
	console.log(data.countrydata[0].males); // prints out on console the year from the date in the first data array
}
function draw(){
	for (var i = data.countrydata.length-1; i >= 1; i--){
	  	/* for loop that checks if the value in the array is in order
		** and swaps them if they are not */
    for (var j = 0; j < data.countrydata.length; j++){
			if(data.countrydata[j].males > data.countrydata[j+1].males){
				swap(data.countrydata, j, j+1);
	}
}
function swap(data.countrydata, a, b){
	var old; // variable holding old value of txt2[a]
	old = data.countrydata[a];
	data.countrydata[a] = data.countrydata[b]; // makes txt2[a] equal to txt2[b]
	data.countrydata[b] = old; // makes txt2[b] equal to variable old, which is the old value of txt2[a]
}
