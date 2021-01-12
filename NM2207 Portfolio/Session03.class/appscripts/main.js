// main.js

console.log("yo"); //Just to see if your js loads

var distance; //calculate
var speed; //input
var time; //input

var speedEl = document.getElementById("nav");
speed = speedEl.innerHTML;

var timeEl = document.getElementById("aside");
time = timeEl.innerHTML;

var distEl = document.getElementById("article");
distance = speed * time; // 10* 20 = 200
distEl.innerHTML = distance; //innerHTML is what is inside the element
//What you calculate on the right, what you use to calculate on the left


speedEl.style.color = "red";
speedEl.style.backgroundColor ="green";
speedEl.style.height = "2000px";
speedEl.style.margin = "10px";
speedEl.style.padding = "10px";
speedEl.style.overflow = "scroll";

/*
//function declaration
function myFunction(p1, p2) { 
// this function takes in two ARGUMENTS, but any number of arguments are possible
var prod = p1*p2; // this variable is declared inside the function so it does not exist once the function call ends
console.log(prod);// The function prints the product of p1 and p2 to the console
}

//function call
myFunction(5,6);
var a = 5;
var b = 6;
myFunction(a,b);
*/

/*
//function declaration 2 + Why no need to declare prodValue as a new variable?)
function myFunction(p1, p2) { //Same as var myFunction = function(p1,p2)
	// this function takes in two ARGUMENTS, but any number of arguments are possible
	var prod = p1*p2; // this variable is declared inside the function so it does not exist once the function call ends
 	return prod;   // The function returns the product of p1 and p2
};
//function call

prodValue = myFunction(5,6);

var a = 5;
var b = 6;
alsoValue = myFunction(a,b);
//what will be printed?
console.log("prodValue + alsoValue"); // prodValue + alsoValue
//When you print the above, you expect it to come out as text
//what will be printed?
console.log(prodValue + alsoValue); // 60
//what will be printed?
console.log("prodValue + alsoValue" + prodValue + alsoValue); //prodValue + alsoValue 60
//What happens when you add string with a number...? It will convert your number into TEXT FIRST)
//OHHH Ok I understand! If look at the bottom, if you add 2 numbers first, it will add until you push in a string then it will change to a text

//what will be printed?
console.log("prodValue + alsoValue" + " " + prodValue + " " + alsoValue); //prodValue + alsoValue 30 30

console.log(prodValue + alsoValue + "Hello")

//for troubleshooting, you can also check via "console.log(prodValue)" & "console.log(alsoValue)" to see if you get the right value
*/

/*E.G:
var z = 10; (It's a number)
var z = "10"; (This is a string text)*/

function sumMaker(x,y) {
	console.log("Output of Step 3.1.3 is : I am in the function");
}

var x = 5;
var y = 10;

sumMaker(x,y);

//Step 3.1.1:
/*
var sumMaker = function() {

}
*/
//Extra:
/* Add: console.log("sumMaker is running...");
this will let you know if it is working*/
//Step 3.1.2:
/*
var sumMaker = function () {
	console.log("sumMaker is running...");
}
sumMaker();
*/
//Step 3.1.3:
/*
var sumMaker = function (x,y) {
	console.log("sumMaker is running...");
}
sumMaker();
*/
//Read up: https://stackoverflow.com/questions/11107823/what-happens-if-i-dont-pass-a-parameter-in-a-javascript-function

function sumMaker2(a,b) {
	console.log("Output of Step 3.2.2 is: The difference between 7 and 100 is 93");
	return(a-b);
}

var a = 100;
var b = 7;

var difference = sumMaker2(a,b);
var statement = "Output of Step 3.2.2 is: The difference between " + y + " and " + x + " is " + difference;
console.log(statement);

var mainEl = document.getElementById('article');
mainEl.innerHTML = statement;

//step 3.2.1: Step 1
/*
var sunMaker 2 = function(a,b) {
	console.log("sunMaker is running...");
	return a-b;
}

var result = sunmaker2(x,y);
*/
/* How to construct a sentence?
function sumMaker2(a,b) {
	console.log("Output of Step 3.2.2 is: The difference between 7 and 100 is 93");
	return(a-b);
}

var a = 100;
var b = 7;

var difference = sumMaker2(a,b);
var statement = "Output of Step 3.2.2 is: The difference between" + y + " and " + x + " is " + result);
*/