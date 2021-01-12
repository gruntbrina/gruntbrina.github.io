
console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);

// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.width;
var pHeight = paper.height;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

// Just create a nice black background
var bgRect = paper.rect(0,0,pWidth, pHeight);
bgRect.attr({"fill": "black"});

// A dot for us to play with
let k_dotSize=50;
var dot = paper.circle(pWidth/2, pHeight/2, k_dotSize);
dot.attr({"fill": "green"});

//-------------------
// load time
//-------------------
var loadTime=Date.now()
console.log("load time is " + loadTime/1000);

//HTML5 audio elements
var myFooter=document.getElementById("myFooter");

//HTML5 audio element
var aBackgroundSnd = new Audio ("resources/342566__inspectorj__sewer-soundscape-a.wav");


var aBumpSnd = new Audio ("resources/67408__noisecollector__vibrabonk.wav");



//-------------------

let k_gameDuration=5;
let k_speed=2


// Add some properties to dot just to keep track of it's "state"
dot.xpos=pWidth/2;
dot.ypos=pHeight/2;

dot.xrate=(Math.random()-.5)*k_speed;
dot.yrate=(Math.random()-.5)*k_speed;;

// our drawing routine, will use as a callback for the interval timer
var draw = function(){
    myFooter.innerHTML="Time: " + (Date.now()-starttime)/1000

    // Update the position where we want our dot to be
    dot.xpos += dot.xrate;
    dot.ypos += dot.yrate;

    // Now actually move the dot using our 'state' variables
    dot.attr({'cx': dot.xpos, 'cy': dot.ypos});

    //---------------------------------------------

    // When dots hit the wall, reverse direction 
    if (dot.xpos > pWidth) {
        dot.xrate = -dot.xrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    }
    if (dot.ypos > pHeight) {
        dot.yrate = - dot.yrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    };
    if (dot.xpos < 0) {
        dot.xrate = -dot.xrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    }
    if (dot.ypos < 0) {
        dot.yrate = - dot.yrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    };

    // Stop game after a certain time
    if ((Date.now()-starttime)/1000 > k_gameDuration)
        endGame();

}

// call draw() periodically
// Start the timer with a button (instead of as program loads) so that sound models have time to load before we try play or set their parameters in the draw() function.
var toggle="off";
var timer;


document.getElementById("startButtonID").addEventListener('click', function(ev){
    if (toggle=="off"){
        timer=setInterval(draw, 20);


        toggle="on";

        aBackgroundSnd.play();
        aBackgroundSnd.volume=.2;
        aBackgroundSnd.loop=true;

        starttime = Date.now();

    } else {
        toggle="off"
        aBackgroundSnd.pause();
        endGame();
    }
})

//-------------------
// Reset all variables, report click count, clear the timer reposition object
let endGame=function(){
    myFooter.innerHTML="Time: " + 0
    clearInterval(timer);
        // Let the user know how they fared
    confirm("Your total amount of clicks are " + numClicks);
    numClicks = 0;
    toggle="off";

        //reset dot
    dot.xpos=pWidth/2;
    dot.ypos=pHeight/2;
    dot.xrate=(Math.random()-.5)*k_speed;
    dot.yrate=(Math.random()-.5)*k_speed;

    dot.attr({
        'cx' : dot.xpos, 
        'cy' : dot.ypos
    })
}


//-------------------
/* Add a way to count the number of clicks
*/

//Step #1: Find the object that you wish to click => Circle

//Step #2: AddEventListen with a click event

//Step #3: Function should +1 click per click to numClicks
var numClicks = 0;

dot.node.addEventListener('click',function(){
    numClicks++;
    console.log(numClicks);
})


//-------------------
/* Change difficulty level depending on radio button selection */

//Easy
var easy = document.getElementById('easyButt');
easy.addEventListener('click',function(){
    dot.attr({
        'r': k_dotSize
    });
    k_speed = 2
    dot.xrate=(Math.random()-.5)*k_speed;
    dot.yrate=(Math.random()-.5)*k_speed;
})

//Hard
var hard = document.getElementById('hardButt');
hard.addEventListener('click',function(){
    dot.attr({
        'r': k_dotSize/2
    });
    k_speed = 20;
    //In order to record the change in speed, need to input the xrate, yrate functions!
    dot.xrate=(Math.random()-.5)*k_speed;
    dot.yrate=(Math.random()-.5)*k_speed;
})

