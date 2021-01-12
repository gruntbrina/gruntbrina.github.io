// main.js

console.log(`yo`);

var articleEl = document.getElementById("article");
/*OMG! STUPID! Make sure you have an ID in your index html... this was a nightmare...*/
articleEl.style.color = "red";
articleEl.style.fontFamily = "Montserrat,sans-serif";
articleEl.style.fontWeight = "bold";
/*Took the font from https://fonts.google.com/specimen/Montserrat?sidebar.open=true&selection.family=Montserrat
and I just basically used the CSS code since it works kinda similar*/

var headerOne = document.getElementById("header1");
headerOne.style.textAlign = "center";

var para = document.createElement("p");
var text = document.createTextNode("Practicing the usage of Appendchild and creating an element OUTSIDE html");
para.appendChild(text);
para.innerHTML = "Replacing the previous text with innerHTML: 'Practicing the usage of Appendchild and creating an element OUTSIDE html' ";
document.getElementById("JSPara").appendChild(para);
/*Learn the above using: https://www.w3schools.com/jsref/met_node_appendchild.asp*/
/*Difference between appendChild and innerHTML: https://www.reddit.com/r/learnjavascript/comments/9purbc/difference_between_innerhtml_appendchild_and/*/
/*innerHTML REPLACES text, appendChild ADDS text*/

var specialPara = document.getElementById("JSPara");
specialPara.style.color = "green";
/*Tried to play around to test whether I could change the color of the text*/

console.log(specialPara);

/*Providing Output using Javascript*/
/*No.1*/
console.log(document.getElementById("Literal"));
/*No.2*/
var var1 = document.getElementById("Literal");
/*Literal = Changing text directly*/
var1.innerHTML = "Replacing literally";
/*Assign using another variable*/
var anotherVar = "Replacing using variable";
var var2 = document.getElementById("Variable");
var2.innerHTML = anotherVar;
/*Append using +*/
var appendVar = " (and this is the appended text)"
var2.innerHTML = var2.innerHTML + appendVar
/*Change 2 global style attribute*/
/*Change property using a literal*/
var1.style.color = "salmon";
/*Change property using a variable - I'm not sure how... just going to try*/
var color1 = "blue";
var2.style.color = color1;
/*OMG IT WORKED! HAHAHA*/

document.getElementById("top").style.color = "purple";

document.getElementById("bottom").style.color = "purple";