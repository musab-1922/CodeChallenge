const prompt = require('prompt-sync')();
 
// gets speed as input
let speed = prompt("Please enter speed");
// a is the number of points a driver gets when he is above 70km/hr
let a = (speed - 70) / 5;

// if speed is less than 70
if(speed<70){
    console.log ("Ok")
}
// if speed is greater than 70
else 
{
console.log("Points:" + a) ;
}
// if points is greater than 12
if( a > 12){
console.log("License suspended");
}