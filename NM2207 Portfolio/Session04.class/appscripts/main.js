// main.js

console.log(`yo`);

/* assign3: font family for article in RJavaScript */
document.getElementById("articleID").style.fontFamily = "cursive,Charcoal,sans-serif";

/* assign3: center header text using javascript */
document.getElementById("headerID").style.textAlign = "center";


//--------------------------------------------------------------

//ALWAYS MAKE SURE TO DECLARE YOUR VARIABLES! 

var counter, headEl;
var rgbRed, rgbGreen, rgbBlue;
var scaledrgbRed, scaledrgbGreen, scaledrgbBlue;
counter = 0;
headEl = document.getElementById("headerID");

function fOne(){
	//console.log("Hello");
	//document.getElementById("headerID").innerHTML = "Hello";
	counter += 1;
	//counter = counter + 1;
	//counter++;
	//https://www.w3schools.com/js/js_function_closures.asp
	//document.getElementById("headerID").innerHTML = counter;
	//document.getElementById("headerID").innerHTML = "Ok, I have now received " +counter+ " clicks";
	document.getElementById("headerID").innerHTML = "Ok, I have now received " +100*counter+ " clicks";
}

//fOne();
/*Attempt #1:
function scaling(bigValue) {
	var scaleV = 0;
	var sinValue = Math.sin(bigValue);
	xMax = 255;
	xMin = 0;
	var yMax = 1;
	var yMin = -1;
	var percent = (sinValue - yMin) / (yMax - yMin);
	scaleV = percent*(xMax-xMin) + xMin;
	return scaleV;
}

rgbRed = rgbRed + 10;
rgbGreen = rgbGreen + 10;
rgbBlue = rgbBlue + 10;

scaledrgbRed = scaling(rgbRed);
scaledrgbGreen = scaling(rgbGreen);
scaledrgbBlue = scaling(rgbBlue);

rgbRed = 0;
rgbGreen = 0;
rgbBlue = 0;

rgbRed = rgbRed + 50;
rgbGreen = rgbGreen + 50;
rgbBlue = rgbBlue + 50; */

//TRY #2:
/*
var oldMin = 0
var oldMax = 1 
var newMax = 255
var newMin = 0
*/

function fTwo(){
	//console.log("something");
	var sliderValue = document.getElementById("sliderOne").value;
	console.log(sliderValue);
	headEl.style.backgroundColor = "rgb(" + sliderValue*255 + "," + sliderValue*255 + "," + sliderValue*255 + ")";
	//I'm still traumatized by the above line...
	/*Apparently it's too complicated BUT IT WORKS:
	var newValue = (((sliderValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
	//https://stackoverflow.com/questions/929103/convert-a-number-range-to-another-range-maintaining-ratio
	console.log(newValue);
 	headEl.style.backgroundColor = "rgb("+newValue+","+newValue+","+newValue+")"
	*/

	//Attempt #3:
	/*if (document.getElementById("sliderOne").value == 0) {
		headEl.style.backgroundColor = "rgb(0,0,0)";
		console.log("ifworks");
	} else if (document.getElementById("sliderOne").value == 1) {
		headEl.style.backgroundColor = "rgb(255,255,255)"
		console.log("elseifworks");
	} else {
		headEl.style.backgroundColor = "rgb(50,50,50)" 
		console.log("elseworks");
	}*/



	//Multiply to extend the range (Then how to map the numbers from 0 to 1)

	//Question: Why can't I use sliderValue? -> Answered
	//headEl.style.backgroundColor = "rgb(100,100,100)"
	//headEl.style.backgroundColor = "rgb("+rgbRed+","+rgbGreen+","+rgbBlue+")";
}

//Idea: Need to get the value from the slider (Try to use console.log to print value to slider)
//Try to find out the slider value FIRST then use that and work on it

//recap:
//var numberOne; (Declaration)
//var numberTwo = 0; (Decalration + initialization)
//var numberthree; numberThree = 3; (Assignment)