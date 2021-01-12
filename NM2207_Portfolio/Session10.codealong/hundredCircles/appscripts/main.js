
//console.log("yo, I'm alive!");
let paper = new Raphael(document.getElementById("centerDiv"));
// Find get paper dimensions
let dimX = paper.width;
let dimY = paper.height;
// Just create a nice black background
var bgRect = paper.rect(0,0,dimX, dimY);
bgRect.attr({"fill": "black"});

///distance calculator

let distance = function(x1,y1,x2,y2){
    let diffX = x2-x1;
    let diffY = y2-y1;
    return Math.sqrt(diffX*diffX + diffY*diffY)
}
console.log(distance(2,2,3,4));

var scaling = function(smallValue){
    rMax = 350;
    rMin = 50;

    //y is sin function range
    var yMax = 1;
    var yMin = 0;

    var percent = (smallValue - yMin) / (yMax - yMin);
    scaleV = percent * (rMax - rMin) + rMin;
    //return a value between 0 and 255
    //console.log(scaleV);
    return scaleV;
};

//scale RGB using the coordinates
var scalingRGB = function(coordValue){
    rMax = 255;
    rMin = 0;

    //range is the range of x and y values
    var dimMax = 350;
    var dimMin = 50;

    var percent = (coordValue - dimMin) / (dimMax - dimMin);
    scaleV = percent * (rMax - rMin) + rMin;
    //return a value between 0 and 255
    //console.log(scaleV);
    return scaleV;
};

//console.log(map(5,1,10,1,100));

//--------------------------------

var imaginCircleList = [];
for(i = 0;i<100;i++)
{
    imaginCircleList[i]= { 
    xCoord: dimX/2,
    yCoord: dimY/2,
    radius: 10
    //Math.floor(20*Math.random())
	};
}
//create an object with all the properties of the dot.
//create real circles using a for loop on a list
//repetition, can use for loops
var circleList = [];
for(i=0;i<100;i++)
{
       circleList[i] = paper.circle(imaginCircleList[i].xCoord,imaginCircleList[i].yCoord,imaginCircleList[i].radius);
   colorString= "rgb("+Math.floor(256*Math.random())+","+ Math.floor(256*Math.random()) + "," + Math.floor(256*Math.random())+")";
   //console.log(colorString);
   circleList[i].attr({
            fill: colorString
    });
   circleList[i].node.oddClick =0; //based on what we discussed last week
   circleList[i].xRate = Math.floor(50*Math.random()); 
   circleList[i].yRate = Math.floor(50*Math.random());
}

//circle mover
var circleMover = function(){
    for(i =0;i<100;i++)
    {
        var newX = circleList[i].getBBox().cx + circleList[i].xRate;
        var newY = circleList[i].getBBox().cy + circleList[i].yRate;
        //if dot touches the xlimit, change direction
        if(newX>dimX)
        {
            circleList[i].xRate = -circleList[i].xRate;
            newX = circleList[i].getBBox().cx + circleList[i].xRate;
        }
        if(newY>dimY)
        {
            circleList[i].yRate = -circleList[i].yRate;
            newY = circleList[i].getBBox().cy + circleList[i].yRate;
        }
        if(newX<1)
        {
            circleList[i].xRate = -circleList[i].xRate;
            newX = circleList[i].getBBox().cx + circleList[i].xRate;
        }
        if(newY<1)
        {
            circleList[i].yRate = -circleList[i].yRate;
            newY = circleList[i].getBBox().cy + circleList[i].yRate;
        }
        circleList[i].attr({"cx":newX , "cy":newY})
    }

    
    if(Date.now() - timeStart >=10000)
    {   
        clearInterval(timer);
        window.alert("End of animation!");
    }
    



};
// start the animation


//how many milliseconds since the page was loaded


//start button should be pressed
//animation should start
//after ten seconds animation should stop
//during ten seconds, clicks on the dot should be counted

//start button
//dot
//timer for animation
//alert window

//variables for the game

//eventlisteners
var timer;
var timeStart = 0;

timer = setInterval(circleMover,30);
timeStart = Date.now();
//console.log("game started at" + timeStart)


//Adding event listeners:

//State variable
var mouseState = {};
// Check whether the mouse is down
mouseState.pushed = 0;
// Wherever my mouse is at any point of time, ev.offset and ev.offsetY for the event variable for mousemove
mouseState.X = 0;
mouseState.Y = 0;


document.getElementById("centerDiv").addEventListener("mousedown",function(ev){
	mouseState.pushed = 1;
	//console.log("Mouse is down and mouseState.pushed is "+ mouseState.pushed)
	for (i=0;i<100;i++)
	{
		//check dist. between center of circleList[i] and mouseState.x & mouseState.y //You can also use ev.offsetX & ev.offsetY
		console.log(circleList[i].attrs.cx,circleList[i].attrs.cy);
		console.log(mouseState.X,mouseState.Y);
		var dist = distance(circleList[i].attrs.cx,circleList[i].attrs.cy,mouseState.X,mouseState.Y);

		//if < 100, change to white using attr
		if (dist<100)
		{
			circleList[i].attr({'fill':'white'});
		}

		//else do nothing
	}
});
document.getElementById("centerDiv").addEventListener("mouseup",function(ev){
	mouseState.pushed = 1;
	//console.log("Mouse is up and mouseState.pushed is "+ mouseState.pushed)
	for (i=0;i<100;i++)
	{
		if (circleList[i].attrs.fill == "white")
		{
			colorString= "rgb("+Math.floor(256*Math.random())+","+ Math.floor(256*Math.random()) + "," + Math.floor(256*Math.random())+")"
			circleList[i].attr({
				fill:colorString
				//Alternatively, you can use the random string!
			})
		}
	}
});
document.getElementById("centerDiv").addEventListener("mousemove",function(ev){
	mouseState.X = ev.offsetX;
	mouseState.Y = ev.offsetY;
	//console.log(mouseState);
});

//Try out on your own ^
