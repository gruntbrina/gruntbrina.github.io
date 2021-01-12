// main.js

console.log(`yo`);

/* assign3: font family for article in RJavaScript */
document.getElementById("articleID").style.fontFamily = "cursive,Charcoal,sans-serif";

/* assign3: center header text using javascript */
document.getElementById("headerID").style.textAlign = "center";


//--------------------------------------------------------------

var counter;
counter = 0

function fOne(){
	//console.log("Hello");
	//document.getElementById("headerID").innerHTML = "Hello";
	counter += 1;
	//https://www.w3schools.com/js/js_function_closures.asp
	//document.getElementById("headerID").innerHTML = counter;
	//document.getElementById("headerID").innerHTML = "Ok, I have now received " +counter+ " clicks";
	document.getElementById("headerID").innerHTML = "Ok, I have now received " +100*counter+ " clicks";
}

//fOne();