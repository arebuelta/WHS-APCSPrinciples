/* Lab1101
** Anthony Rebuelta
** November 1, 2018
*/

// global variables
var data;
var barHeight;
// function preload that loads json file
function preload(){
	data = loadJSON('weather.json'); // data variable is assigned json data
}
// setup code
function setup(){
console.log(data[1].Date.Year); // prints out on console the year from the date in the first data array
}

