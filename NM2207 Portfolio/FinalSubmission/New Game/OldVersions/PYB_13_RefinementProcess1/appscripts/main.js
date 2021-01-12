// main.js

console.log(`yo`);

//Variables List
//Raphael
var paper = new Raphael(document.getElementById("mainGameBackground"));
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}
// Object sizes and positions
var bgWidth = paper.canvas.clientWidth;
var bgHeight = paper.canvas.clientHeight;
var box = {
	'x':82,
	'y':82
};
var topLane = {
	'x': 0,
	'y': box.y
};
var centerLane = {
	'x': 0,
	'y': box.y*3
};
var topBar = {
	'x':0,
	'y':0
};
var bombPosition = [];
for (i=0;i<=4;i++) {
	bombPosition[i] = {
		'x':box.x*2.5, 
		'y':topLane.y+box.x/2
	}
}
var playerPosition = {
	'x':box.x,
	'y':centerLane.y
}
var enemySpawnPosition = [];
for (i=0;i<=4;i++) {
	enemySpawnPosition[i] = {
		"x": bgWidth + box.x,
		"y": topLane.y
	}
}
var translucentWall = {
	'x': bgWidth,
	'y': bgHeight
}
var startInfo = {
	'x': 500,
	'y': 250
}

//Other Variables
//Bomb-related
var moveState = []
for (i=0;i<=4;i++) {
	moveState[i] = 0;
}
var cannonSpeed = 5;
var cannonTimer = [];
for (i=0;i<=4;i++) {
	cannonTimer[i];
}
var bombList = [];
var numBomb = 0;
//Enemy-related
var enemy = [];
var enemySpeed = 5;
var enemyTimer = [];
var enemyMoving = 0;
//Overall Game Related
var numScore = 0;
var lifeLeft = 3;

//Main Game Background
var mainGameBG = paper.image('resources/ship_deck.png',0,0,bgWidth,bgHeight)

/*
//Game Grid - For Position Checking
for (i = 0; i<bgHeight; i+=box.y) {
	for (j=0; j<bgWidth; j+=box.x) {
	paper.rect(j, i, box.x, box.y)
}}
*/

//Top Bar Information
var topBarInformation = paper.rect(topBar.x,topBar.y,bgWidth,box.y)
topBarInformation.attr({
	'fill':'#e6ad74',
	'stroke': '#e6ad74'
});

var textBarInformation = paper.text(bgWidth/2, bgHeight/11, "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft)
textBarInformation.attr({
	'font-size': 50
});

//Player
var player = paper.image('resources/pirate_player.png',playerPosition.x,playerPosition.y,box.x,box.y)

//Player Movements
document.addEventListener("keydown",function(ev){
	if(event.keyCode == 38) {
		if (playerPosition.y >= box.y*2) {
			playerPosition.y -= box.y
			player.attr({
				'y': playerPosition.y
			})
		}
	}

	if (event.keyCode == 40) {
		if (playerPosition.y <= box.y*4) {
			playerPosition.y += box.y
			player.attr({
				'y': playerPosition.y
			})
		}
	}

	if (event.keyCode == 32) {
		
		//Condition to throw bombs
		if (numBomb == 1) {
			if (0<playerPosition.y && playerPosition.y<=box.y && moveState[0] == 0) {
				//First Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
				})
				moveState[0] = 1;
				cannonTimer[0] = setInterval(bombMove0, 20);
				return cannonTimer[0];	
	
			}

			if (box.y<playerPosition.y && playerPosition.y<=box.y*2 && moveState[1] == 0) {
				//Second Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
				})
				moveState[1] = 1;
				cannonTimer[1] = setInterval(bombMove1, 20);
				return cannonTimer[1];

			}

			if (box.y*2<playerPosition.y && playerPosition.y<=box.y*3 && moveState[2] == 0) {
				//Third Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
				})
				moveState[2] = 1;
				cannonTimer[2] = setInterval(bombMove2, 20);
				return cannonTimer[2];

			}

			if (box.y*3<playerPosition.y && playerPosition.y<=box.y*4 && moveState[3] == 0) {
				//Fourth Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
				})
				moveState[3] = 1;
				cannonTimer[3] = setInterval(bombMove3, 20);
				return cannonTimer[3];

			}

			if (box.y*4<playerPosition.y && playerPosition.y<=box.y*5 && moveState[4] == 0) {
				//Last Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
				})
				moveState[4] = 1;
				cannonTimer[4] = setInterval(bombMove4, 20);
				return cannonTimer[4];
	
				}
			}
		
		//Condition to take bomb from crate
		if (numBomb == 0 && box.y*2<playerPosition.y && playerPosition.y<=box.y*3) {
			numBomb = 1;
			textBarInformation.attr({
				'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
			})

			}

		}
}) 

	

//Bomb Crate
var crate = paper.image('resources/Bomb_Crate_New.png',0,centerLane.y,box.x,box.y)

//Bomb Creation
for (i=0;i<=4;i++) {
	bombList[i] = paper.circle(box.x*2.5,topLane.y+box.y/2+i*box.y,box.x/6);
	bombList[i].attr({
	'fill':'black'
	});

}


//Cannon Shooter
for (i=0; i<=4; i++) {
	var cannon = paper.image('resources/Cannon_Shooter.png',box.x*2,topLane.y+i*box.y,box.x,box.y)
}

//Bomb Movement (From Cannon)

function bombMove0() {
	//First Lane
	bombMoveDetails(0);
}

function bombMove1() {
	//Second Lane
	bombMoveDetails(1);
}

function bombMove2() {
	//Third Lane
	bombMoveDetails(2);
}

function bombMove3() {
	//Fourth Lane
	bombMoveDetails(3);
}

function bombMove4() {
	//Fifth Lane
	bombMoveDetails(4);
}

//To consolidate all the bombMoves - bombMoves functions are all separated to use the settimeout and setintervals
function bombMoveDetails(i) {
	if (bombPosition[i].x <= bgWidth + box.x/2 && moveState[i] == 1) {
			bombPosition[i].x += cannonSpeed;
			bombList[i].attr({
				'cx': bombPosition[i].x
			});
		} else {
			bombList[i].remove();
			clearInterval(cannonTimer[i]);
			moveState[i] = 0;
			bombPosition[i].x = box.x*2.5;
			bombList[i] = paper.circle(box.x*2.5,topLane.y+box.y/2+i*box.y,box.x/6);
			bombList[i].attr({
				'fill':'black'
			});
			cannon.toFront();
		}
}

//Enemy
for (i=0;i<=4;i++) {
	enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y)
} 


//Need to separate 

// Lane One Enemies
function enemyMove0 () {
	// Movement of Object
	for (j=0;j<=0;j++) {
	enemySpawnPosition[j].x -= enemySpeed;
	enemy[j].attr({
		'x': enemySpawnPosition[j].x
	});
	enemyConditions(j);
	}
}

// Lane Two Enemies
function enemyMove1 () {
	// Movement of Object
	for (j=1;j<=1;j++) {
	enemySpawnPosition[j].x -= enemySpeed;
	enemy[j].attr({
		'x': enemySpawnPosition[j].x
	});
	enemyConditions(j);
	}
}

// Lane Three Enemies
function enemyMove2 () {
	// Movement of Object
	for (j=2;j<=2;j++) {
	enemySpawnPosition[j].x -= enemySpeed;
	enemy[j].attr({
		'x': enemySpawnPosition[j].x
	});
	enemyConditions(j);
	}
}

// Lane Four Enemies
function enemyMove3 () {
	// Movement of Object
	for (j=3;j<=3;j++) {
	enemySpawnPosition[j].x -= enemySpeed;
	enemy[j].attr({
		'x': enemySpawnPosition[j].x
	});
	enemyConditions(j);
	}
}

// Lane Five Enemies
function enemyMove4 () {
	// Movement of Object
	for (j=4;j<=4;j++) {
	enemySpawnPosition[j].x -= enemySpeed;
	enemy[j].attr({
		'x': enemySpawnPosition[j].x
	});
	enemyConditions(j);
	}
}


//Create a function for the collision & gameover conditions to make the code cleaner
function enemyConditions(j) {
	// Distance between Cannon & Enemy
	var newCannonX = cannon.attrs.x + box.x
	var newEnemyX = enemy[j].attrs.x
	var distCannonEnemy = newCannonX - newEnemyX;
			

	// Distance between Bomb & Enemy
	var newBombX = bombList[j].attrs.cx
	var distBombEnemy = newBombX - newEnemyX;

	// Bomb & Enemy Collision
	if (distBombEnemy >0) {
		enemy[j].remove();
		bombList[j].remove();
		clearInterval(cannonTimer);
		moveState[j] = 0;
		enemySpawnPosition[j].x = bgWidth+box.x/2;
		enemy[j] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[j].x,enemySpawnPosition[j].y+j*box.y,box.x,box.y);
		bombPosition[j].x = box.x*2.5;
		bombList[j] = paper.circle(box.x*2.5,topLane.y+box.y/2+j*box.y,box.x/6);
		bombList[j].attr({
			'fill':'black'
		});	
		cannon.toFront();
		numScore ++;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
		})
	}

	// Cannon & Enemy
	if (distCannonEnemy > 0) {
		enemy[j].remove();
		enemySpawnPosition[j].x = bgWidth+box.x/2
		enemy[j] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[j].x,enemySpawnPosition[j].y+j*box.y,box.x,box.y);
		lifeLeft --;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
		})

	}

		if (lifeLeft == 0) {
		lifeLeft = 0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
		})
		for (i=0;i<=4;i++) {
		clearInterval(enemyTimer[i]);
		clearInterval(cannonTimer[i]);
		enemy[i].remove();
		enemySpawnPosition[i].x = bgWidth+box.x
		enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y);
		bombList[i].remove();
		clearInterval(cannonTimer[3]);
		moveState[i] = 0;
		bombPosition[i].x = box.x*2.5;
		bombList[i] = paper.circle(box.x*2.5,topLane.y+box.y/2+i*box.y,box.x/6);
		bombList[i].attr({
			'fill':'black'
		});
		cannon.toFront();
		playerPosition.y = centerLane.y
		player.attr({
			'y': playerPosition.y
		})
		};
		translucentBG = paper.rect(0,0,translucentWall.x,translucentWall.y);
		translucentBG.attr({
			'fill':'grey',
			'fill-opacity':0.8
		});
		startInformation.toFront();
		startInformation.attr({
			'fill':'#e6ad74',
			'fill-opacity':1,
			'stroke-opacity':1
		});
		startInformationTextLine1.toFront();
		startInformationTextLine1.attr({
			'y': bgHeight/2-40,
			'font-size':65,
			'text':'Final Score: ' + numScore
		});
		startInformationTextLine2.toFront();
		startInformationTextLine2.attr({
			'y': bgHeight/2+60,
			'font-size':30,
			'text':'Click here to restart'
		});
		startInformationCover.toFront();
		startInformationCover.attr({
			'fill':'#e6ad74',
			'fill-opacity':0,
			'stroke-opacity':0
		});
		//alert("You have scored " + numScore + " points.")
		enemyMoving = 0;
		numScore = 0;
		numBomb =0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
		});
		return startInformation
	}
}

//The follow are used so that users can start game easily and provide the impression that users are unable to move the character
var translucentBG = paper.rect(0,0,translucentWall.x,translucentWall.y)
translucentBG.attr({
	'fill':'grey',
	'fill-opacity':0.8
}) 

var startInformation = paper.rect(bgWidth/2-startInfo.x/2,bgHeight/2-startInfo.y/2,startInfo.x,startInfo.y)
startInformation.attr({
	'fill':'#e6ad74',
	'stroke-opacity':1
})

var startInformationTextLine1 = paper.text(bgWidth/2,bgHeight/2-30,"Start")
startInformationTextLine1.attr({
	'font-size':150,
})

var startInformationTextLine2 = paper.text(bgWidth/2,bgHeight/2+70,"Press here to start")
startInformationTextLine2.attr({
	'font-size':30,
})


var startInformationCover = paper.rect(bgWidth/2-startInfo.x/2,bgHeight/2-startInfo.y/2,startInfo.x,startInfo.y)
startInformationCover.attr({
	'fill':'#e6ad74',
	'fill-opacity':0,
	'stroke-opacity':0
})


//To start the game
startInformationCover.node.addEventListener('click', function(ev) {
	if (enemyMoving == 0) {
	translucentBG.remove();
	startInformation.attr({
		'fill':'#e6ad74',
		'fill-opacity':0,
		'stroke-opacity':0
	});
	startInformationTextLine1.attr({
		'font-size':0,
	});
	startInformationTextLine2.attr({
		'font-size':0,
	});
	startInformationCover.attr({
		'fill':'#e6ad74',
		'fill-opacity':0,
		'stroke-opacity':0
	});
	//startInformationText.remove();
	//Added to circumvent players from throwing their bombs to kill before clicking start!
	for (i=0;i<=4;i++) {
		if (moveState[i] == 1) {
			bombList[i].remove();
			clearInterval(cannonTimer[3]);
			moveState[i] = 0;
			bombPosition[i].x = box.x*2.5;
			bombList[i] = paper.circle(box.x*2.5,topLane.y+box.y/2+i*box.y,box.x/6);
			bombList[i].attr({
				'fill':'black'
			});
			cannon.toFront();
		}
	}
	numBomb = 0;
	lifeLeft = 3;
	textBarInformation.attr({
		'text': "Bomb: " + numBomb + " | Score: " + numScore + " | " + "Life Left: " + lifeLeft
	})
		setTimeout(function() { enemyTimer[0] = setInterval(enemyMove0, 30) }, timeRandomizer()*timeMultiplier());
		setTimeout(function() { enemyTimer[1] = setInterval(enemyMove1, 30) }, timeRandomizer()*timeMultiplier());
		setTimeout(function() { enemyTimer[2] = setInterval(enemyMove2, 30) }, timeRandomizer()*timeMultiplier());
		setTimeout(function() { enemyTimer[3] = setInterval(enemyMove3, 30) }, timeRandomizer()*timeMultiplier());
		setTimeout(function() { enemyTimer[4] = setInterval(enemyMove4, 30) }, timeRandomizer()*timeMultiplier());
		enemyMoving = 1;
	};
})


//Used to randomise the timing of enemies:
//Actual Time
function timeRandomizer() {
	time = Math.floor(Math.random()*1500);
	return time;
}
//To see which goes first
function timeMultiplier() {
	timeMultiply= Math.random()*5;
	return timeMultiply;
}
