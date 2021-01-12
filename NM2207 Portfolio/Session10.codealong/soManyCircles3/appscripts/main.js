
//console.log("yo, I'm alive!");
let paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
let dimX = paper.width;
let dimY = paper.height;
var timer;
var time = 0;
var frameRate = 5;
var gameDuration = 10*1000;
var numClicks = 0;

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
for(i = 0;i<5;i++)
{
    imaginCircleList[i]= { 
    xCoord: scaling(Math.random()),
    yCoord: scaling(Math.random()),
    radius: Math.floor(50*Math.random()),
    colour: 'red'};
}
//create an object with all the properties of the dot.
//create real circles using a for loop on a list
//repetition, can use for loops
var circleList = [];
for(i=0;i<5;i++)
{
       circleList[i] = paper.circle(imaginCircleList[i].xCoord,imaginCircleList[i].yCoord,imaginCircleList[i].radius);
   colorString= "rgb("+scalingRGB(imaginCircleList[i].xCoord)+","+ scalingRGB(imaginCircleList[i].yCoord)+",50"+")";
   console.log(colorString);
   circleList[i].attr({
            fill: colorString,
            stroke: "blue",
            "stroke-width": 3
    });
   circleList[i].node.oddClick =0; //based on what we discussed last week
   circleList[i].xRate = 10; 
   circleList[i].yRate = 5;
   circleList[i].node.addEventListener("click",function(ev){colorSwitcher(ev)});
}

//circle mover
var circleMover = function(){
    for(i =0;i<5;i++)
    {
        var newX = circleList[i].getBBox().cx + circleList[i].xRate;
        var newY = circleList[i].getBBox().cy + circleList[i].yRate;
        //if dot touches the xlimit, change direction
        if(newX>=350)
        {
            circleList[i].xRate = -circleList[i].xRate;
            newX = circleList[i].getBBox().cx + circleList[i].xRate;
        }
        if(newY>=350)
        {
            circleList[i].yRate = -circleList[i].yRate;
            newY = circleList[i].getBBox().cy + circleList[i].yRate;
        }
        if(newX<=50)
        {
            circleList[i].xRate = -circleList[i].xRate;
            newX = circleList[i].getBBox().cx + circleList[i].xRate;
        }
        if(newY<=50)
        {
            circleList[i].yRate = -circleList[i].yRate;
            newY = circleList[i].getBBox().cy + circleList[i].yRate;
        }
        circleList[i].attr({"cx":newX , "cy":newY})
    }

    
    if(Date.now() - timeStart >=10000)
    {   
        clearInterval(timer);
        window.alert("Your score is " + numClicks);
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
var startButt = document.getElementById("startGame");
startButt.addEventListener("click",function(ev){
    //start animation when button is clicked
    timer = setInterval(circleMover,1000);
    timeStart = Date.now();
    console.log("game started at" + timeStart)
});

//add eventlistener to track clicks
//dot.node.addEventListener("click",function(){

//numClicks+=1;

//})