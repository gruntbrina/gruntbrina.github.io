

/*----------------------------------------------------------
//MODEL: game area, component, user
------------------------------------------------------------
*/
var paper = new Raphael(document.getElementById("mySVGCanvas"));

//store game info such as how many frames or seconds have passed, clear game at the end and reset it
//note that the start function is also used to reset the game.
var myGameArea = {
	frameNo : undefined,
    start : function() {
        this.frameNo = 0;
        console.log("Page is loaded");
        this.timer = setInterval(updateGameArea, 500);

    },
    stop : function() {
        //clear this.interval
        clearInterval(this.timer) //It clears the interval itself
  
    },    
    clear : function() {
        paper.clear();
    }
}
//store component info and component functions to create and update pieces, and listen to events. component is in the global scope.
function component(width, height, color, x, y) {
    var rectangl = {}
    rectangl.width = width;
    rectangl.height = height;
  
    rectangl.x = x;
    rectangl.y = y; 
    rectangl.shape = paper.rect()   
    rectangl.shape.attr({x:rectangl.x, y:rectangl.y, width:rectangl.width, height:rectangl.height,fill: color});
    rectangl.update = function() {
        rectangl.shape.attr({x:rectangl.x, y:rectangl.y, width:rectangl.width, height:rectangl.height,fill: color});
    }
    rectangl.shape.node.addEventListener("click",user.updateScore);
    return rectangl;
     
}
var green;

//store user info and user update functions. user variable is the global scope. note that the user name is updated each time the game starts
var user = {
	name: undefined,
	score: 0,
	updateScore : function()
	{
		    user.score +=1;
			console.log("User score is now "+ user.score);
		}

	
}



/*----------------------------------------------------------
//VIEW: draw a piece, update a piece
------------------------------------------------------------
*/

function drawPiece(){
    //creates a new component of random height, scaled to a given range :)
        x = paper.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        green = component(10, height, "green", x, 0);
        console.log(green);
 
}

function updatePiece(){
    //moves the component in the x direction
        green.x -= 10;
        green.update();
}



/*----------------------------------------------------------
//CONTROLLER: Event listeners, start game, update game check end game
------------------------------------------------------------
*/

var nextButt = document.getElementById("nextButt");
nextButt.addEventListener("click",updateGameArea);

function startGame() {
    //when the page is loaded, what should happen?
    myGameArea.start();
    user.name = window.prompt("Enter your name");

}


function checkEndGame(){
    //at the end of 10 frames (could also be set to 10000 milliseconds), the game ends. 
    if (myGameArea.frameNo >=10) {
        myGameArea.clear();
        myGameArea.stop();
        myGameArea.frameNo = 0;
        window.alert(user.name + "'s score is " + user.score)
    }
}


function updateGameArea() {
    if (myGameArea.frameNo == 0) {
        drawPiece();
        updatePiece();
        myGameArea.start();
    } else {
        updatePiece();
    }
    myGameArea.frameNo += 1;
    console.log("frameNo is "+ myGameArea.frameNo);
    //if its the first frame, draw the piece. if it's the second or any other frame, update the piece.
    checkEndGame();
}

