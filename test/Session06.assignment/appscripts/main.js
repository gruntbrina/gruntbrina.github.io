console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);
// A "convenience" method for putting graphical objects back on a paper after they have been removed or "cleared"
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}

// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);


//  get a rectangle equal to the size of the paper to raw on

// Create rectangle to fill the paper to use as a background 
var prect = paper.rect(0,0, pWidth, pHeight);
prect.attr({"fill": "#F1ECD6"}); 


// Draw circles where mouse is clicked
//----------------------------------------------------------
//                CREATE NEW OBJECT ON CLICK
//----------------------------------------------------------

var circleRadius = 12;

prect.node.addEventListener('click', function(ev){
	drawCircle(ev, circleRadius);

});

// Task 2.2 slider on aside panel
//  first add slider to index.html with id="slider1"
// HTML range slider to set size of circles to draw when we click
var slider1 = document.getElementById("slider1");

slider1.addEventListener('input', function(ev){
	circleRadius = 2 + 20*slider1.value; 
});

// HTML button to clear canvas of (some) drawings
var clearButton=document.getElementById("clearButton"); 

clearButton.addEventListener('click', function(ev){
	paper.clear();
	paper.put(prect);
	paper.put(circle);
});



//----------------------------------------------------------
//                  Session06 assignment starts here
//----------------------------------------------------------



// Part 1 
//----------------------------------------------------------
//                Add event listeners for the new slider and button
//----------------------------------------------------------
var lightSlider = document.getElementById('lightSlider');

var lightnessValue

lightSlider.addEventListener('click', function(ev){
	var lightnessValue = document.getElementById("lightSlider").value;
	console.log(lightnessValue);
	console.log("lightnessValue Clicked")
})

var recolorButton = document.getElementById('whiteButton');

recolorButton.addEventListener('click', function(ev){
	changeColor()
})



// Part 2 and 3 

//----------------------------------------------------------------------------------------------

//                First, define the circleColor variable we need
//                Then, call the map function three times,
//                and then finally call the hslString function one time.
//                Finally, set the color of the circle using localCircle.attr();
//----------------------------------------------------------------------------------------------

function drawCircle(ev, circleRadius)
{
		// simply draws a circle using the arguments
		//note that it takes in one object and one number

		var localCircle = paper.circle(ev.offsetX, ev.offsetY, circleRadius); //localCircle has a local scope

	//                First, define the circleColor variable we need
		var circleColor = {}

	
	//                Then, call the map function three times,
		console.log(lightSlider.value)

		circleColor.hue = map(ev.offsetX,0,pWidth,0,359);
		circleColor.saturation = map(ev.offsetY,0,pHeight,0,100);
		circleColor.lightness = map(lightSlider.value,0,1,0,100);
	console.log(circleColor.hue,circleColor.saturation,circleColor.lightness)

	//                and then finally call the hslString function one time.

		hslString(circleColor)

	//                Finally, set the color of the circle using localCircle.attr();
		
		localCircle.attr({
			'fill': hslString(circleColor)
		})
		
}



//----------------------------------------------------------------------------------------------
//               No changes to the map function, but you will call it in the drawCircle function. 
//               Map one number into the correct range according to the provided arguments
//               Returns one number
//----------------------------------------------------------------------------------------------

// maps x in  the interval [a,b] into the interval [m, n]
function map(x, a, b, m, n){
    var range = n-m;
    // x is 'proportion' of the way from a to b
    // e.g. if a=10, b=20, and x=15, x is half (.5) of the way from a to b
    var proportion = (x-a)/(b-a); 
    var finalMappedValue = Math.floor(m + proportion*range);

    return (finalMappedValue);
}



//----------------------------------------------------------------------------------------------------------
//                Change the HSL function so that it takes in one argument.
//                Set h,s, and l according to the hue, saturation, lightness properties of the input argument
//                Returns one string
//----------------------------------------------------------------------------------------------------------


//                Change the HSL function so that it takes in one argument.
function hslString(x){
	//Was stuck here for awhile, note to self: Always remember to link up with your properties!
	var h = x.hue;
	var s = x.saturation;
	var l = x.lightness;
	var input = "hsl(" + h.toString() + "," + s.toString() + "," + l.toString() + ")";
	console.log("hsl(" + h.toString() + "," + s.toString() + "," + l.toString() + ")");
	return input;
	
}


// Part 4 Model and Controller
//----------------------------------------------------------
//                changeColor function
//                First, this function will create a list of circles by using document.getElementsByTagName.
//----------------------------------------------------------


function changeColor(){

	//	First, this function will create a list of circles by using document.getElementsByTagName.

	circleList = document.getElementsByTagName('circle');


	//	Now, you can access the fill color of  each circle

	for (i in circleList) //execute the statements in curly braces for each circle in the list 
		{
		if(circleList[i].attributes!=null) {
			var filledValue = circleList[i].style.fill;
			circleList[i].style.fill = 'black';
		}
	};
}

//linked it to the recolor button


// 














