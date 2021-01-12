// Code and Draw (review)

console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);
// paper.put(raphObj) - puts Raphel elements back ona paper after it has been paper.clear()'ed
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}


// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;
var mouseIsDown = false;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

//------------------------------------//


var background = paper.rect(0,0,pWidth,pHeight);
background.attr({
	fill:"grey",
	stroke:"green",
	"stroke-width": 5
})

var dot = paper.circle(25,25,20);
dot.attr({
	fill:"red",
	stroke:"black",
	"stroke-width": 2
})


dot.node.addEventListener("mousedown",function(){
	//console.log("mousedown")
	mouseIsDown = true;
})

dot.node.addEventListener("mouseup",function(){
	//console.log("mouseup")
	mouseIsDown = false;
})

dot.node.addEventListener("mousemove",function(ev){
	//console.log("mousemove")
	if (mouseIsDown == true) {
		console.log(ev.offsetX + "," + ev.offsetY);
		dot.attr({
			"cx": ev.offsetX,
			"cy": ev.offsetY
		})
	}
})

// I still need to add in a code to recognise mouseup OUTSIDE of the background

/*
background.node.addEventListener("mousemove",function(ev){
	//console.log("mousemove")
	if (mouseIsDown == true) {
		console.log(ev.offsetX + "," + ev.offsetY);
		dot.attr({
			"cx": ev.offsetX,
			"cy": ev.offsetY
		})
	}
})
*/

background.node.addEventListener("mouseup",function(){
	//console.log("mouseup")
	mouseIsDown = false;
})

background.node.addEventListener("mousedown",function(){
	//console.log("mousedown")
	mouseIsDown = true;
})

//--------//
/* My pathetic attempt ROFL IM DED I over-thinked it...
//Part 2
//2.1 Create variable called circleRadius to size circles we draw

var circleRadius = paper.circle(pWidth/2, pWidth/2, 50);

//2.2 Draw circles on the paper when mouse clicks are made

background.node.addEventListener("mousemove",function(ev){
	//console.log("mousemove")
	if (mouseIsDown == true) {
		console.log(ev.offsetX + "," + ev.offsetY);
		circleRadius.attr({
			"cx": ev.offsetX,
			"cy": ev.offsetY,
			fill: "blue",
			stroke: "black",
			"stroke-width": 5
		})
	}
})
*/

//THIS IS OVER COMPLICATED AGAIN HAHA

//When it is outside, it will load immediately (It won't change anymore) So that's why you put it in the function
//SO THIS INCORRECT FOR THIS SCENARIO: var circleRadius = document.getElementById("circleRadSize").value;

var circleRadius = 20;

function circleRadiusVal() {
	var circleRadius = document.getElementById("circleRadSize").value;
	console.log(circleRadius);
	var newCircleValue = (((circleRadius - 0) * (100 - 10)) / (1 - 0)) + 10;
	console.log(newCircleValue);
	return newCircleValue
}

background.node.addEventListener('click', function(ev){
	var circleRadius = circleRadiusVal();
	//Instead of the above you can use...
	//var circleRadius = (circleRadius*100) + 10;
	paper.circle(ev.offsetX,ev.offsetY,circleRadius);
	//paper.circle is used to create
})

function clearButt() {
	paper.clear();
	paper.put(background);
	paper.put(dot)
}
//Eventually move everything to javascript for event listener instead of onchange in the HTML
//https://www.w3schools.com/jsref/dom_obj_event.asp