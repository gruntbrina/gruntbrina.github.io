// main.js

console.log(`yo`);

//Variables List
//Document Page
var startGame = document.getElementById('startGame');

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

//Game Grid - For Position Checking
for (i = 0; i<bgHeight; i+=box.y) {
	for (j=0; j<bgWidth; j+=box.x) {
	paper.rect(j, i, box.x, box.y)
}}

//Top Bar Information
var topBarInformation = paper.rect(topBar.x,topBar.y,bgWidth,box.y)
topBarInformation.attr({
	'fill':'blue'
})
//https://www.google.com/search?q=wooden+planks+pixel+art&tbm=isch&ved=2ahUKEwix9KnJmobtAhWUVX0KHTE4CVoQ2-cCegQIABAA&oq=wooden+planks+pixel+art&gs_lcp=CgNpbWcQAzICCAA6BAgAEEM6BggAEAUQHjoGCAAQCBAeUKECWL-JAWCaigFoBHAAeACAAasBiAHeBJIBAzkuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=bP2xX7GOBZSr9QOx8KTQBQ#imgrc=0UGEc01_akJzDM
var textBarInformation = paper.text(bgWidth/2, bgHeight/11, "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft)
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
					'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
				})
				moveState[0] = 1;
				cannonTimer[0] = setInterval(bombMove0, 20);
				console.log('work0')
				return cannonTimer[0];	
	
			}

			if (box.y<playerPosition.y && playerPosition.y<=box.y*2 && moveState[1] == 0) {
				//Second Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
				})
				moveState[1] = 1;
				cannonTimer[1] = setInterval(bombMove1, 20);
				console.log('work1')
				return cannonTimer[1];

			}

			if (box.y*2<playerPosition.y && playerPosition.y<=box.y*3 && moveState[2] == 0) {
				//Third Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
				})
				moveState[2] = 1;
				cannonTimer[2] = setInterval(bombMove2, 20);
				console.log('work2')	
				return cannonTimer[2];

			}

			if (box.y*3<playerPosition.y && playerPosition.y<=box.y*4 && moveState[3] == 0) {
				//Fourth Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
				})
				moveState[3] = 1;
				cannonTimer[3] = setInterval(bombMove3, 20);
				console.log('work3')	
				return cannonTimer[3];

			}

			if (box.y*4<playerPosition.y && playerPosition.y<=box.y*5 && moveState[4] == 0) {
				//Last Lane
				numBomb = 0;
				textBarInformation.attr({
					'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
				})
				moveState[4] = 1;
				cannonTimer[4] = setInterval(bombMove4, 20);
				console.log('work4')
				return cannonTimer[4];
	
				}
			}
		
		//Condition to take bomb from crate
		if (numBomb == 0 && box.y*2<playerPosition.y && playerPosition.y<=box.y*3) {
			numBomb = 1;
			textBarInformation.attr({
				'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
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
		if (bombPosition[0].x <= bgWidth + box.x/2 && moveState[0] == 1) {
			bombPosition[0].x += cannonSpeed;
			bombList[0].attr({
				'cx': bombPosition[0].x
			});
		} else {
			bombList[0].remove();
			clearInterval(cannonTimer[0]);
			moveState[0] = 0;
			bombPosition[0].x = box.x*2.5;
			bombList[0] = paper.circle(box.x*2.5,topLane.y+box.y/2,box.x/6);
			bombList[0].attr({
				'fill':'black'
			});
			cannon.toFront();
		}
}

function bombMove1() {
		//Second Lane
		if (bombPosition[1].x <= bgWidth + box.x/2 && moveState[1] == 1) {
			bombPosition[1].x += cannonSpeed;
			bombList[1].attr({
				'cx': bombPosition[1].x
			});
		} else {
			bombList[1].remove();
			clearInterval(cannonTimer[1]);
			moveState[1] = 0;
			bombPosition[1].x = box.x*2.5;
			bombList[1] = paper.circle(box.x*2.5,topLane.y+box.y/2+1*box.y,box.x/6);
			bombList[1].attr({
				'fill':'black'
			});
			cannon.toFront();
		}
}

function bombMove2() {
		//Third Lane
		if (bombPosition[2].x <= bgWidth + box.x/2 && moveState[2] == 1) {
			bombPosition[2].x += cannonSpeed;
			bombList[2].attr({
				'cx': bombPosition[2].x
			});
		} else {
			bombList[2].remove();
			clearInterval(cannonTimer[2]);
			moveState[2] = 0;
			bombPosition[2].x = box.x*2.5;
			bombList[2] = paper.circle(box.x*2.5,topLane.y+box.y/2+2*box.y,box.x/6);
			bombList[2].attr({
				'fill':'black'
			});
			cannon.toFront();
		}
}

function bombMove3() {
		//Fourth Lane
		if (bombPosition[3].x <= bgWidth + box.x/2 && moveState[3] == 1) {
			bombPosition[3].x += cannonSpeed;
			bombList[3].attr({
				'cx': bombPosition[3].x
			});
		} else {
			bombList[3].remove();
			clearInterval(cannonTimer[3]);
			moveState[3] = 0;
			bombPosition[3].x = box.x*2.5;
			bombList[3] = paper.circle(box.x*2.5,topLane.y+box.y/2+3*box.y,box.x/6);
			bombList[3].attr({
				'fill':'black'
			});
			cannon.toFront();
		}
}
function bombMove4() {
		//Fifth Lane
		if (bombPosition[4].x <= bgWidth + box.x/2 && moveState[4] == 1) {
			bombPosition[4].x += cannonSpeed;
			bombList[4].attr({
				'cx': bombPosition[4].x
			});
			console.log("Works2")
		} else {
			bombList[4].remove();
			clearInterval(cannonTimer[4]);
			moveState[4] = 0;
			bombPosition[4].x = box.x*2.5;
			bombList[4] = paper.circle(box.x*2.5,topLane.y+box.y/2+4*box.y,box.x/6);
			bombList[4].attr({
				'fill':'black'
			});
			cannon.toFront();
		}
}

//Enemy
for (i=0;i<=4;i++) {
	enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y)
} 

// Lane One Enemies
function enemyMove0 () {
	// Movement of Object
	enemySpawnPosition[0].x -= enemySpeed;
	enemy[0].attr({
		'x': enemySpawnPosition[0].x
	})

			
	// Distance between Cannon & Enemy
	var newCannonX = cannon.attrs.x + 82
	var newEnemyX = enemy[0].attrs.x
	var distCannonEnemy = newCannonX - newEnemyX;
			

	// Distance between Bomb & Enemy
	var newBombX = bombList[0].attrs.cx
	var distBombEnemy = newBombX - newEnemyX;

	// Bomb & Enemy Collision
	if (distBombEnemy >0) {
		enemy[0].remove();
		bombList[0].remove();
		clearInterval(cannonTimer)
		moveState[0] = 0;
		enemySpawnPosition[0].x = bgWidth+box.x/2;
		enemy[0] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[0].x,enemySpawnPosition[0].y,box.x,box.y);
		bombPosition[0].x = box.x*2.5;
		bombList[0] = paper.circle(box.x*2.5,topLane.y+box.y/2,box.x/6);
		bombList[0].attr({
			'fill':'black'
		});	
		cannon.toFront();
		numScore ++;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}

	// Cannon & Enemy
	if (distCannonEnemy > 0) {
		enemy[0].remove();
		//clearInterval(enemyTimer) //Currently: It stops because my enemyTimer stops
		//enemyMoving = 0;
		enemySpawnPosition[0].x = bgWidth+box.x/2
		enemy[0] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[0].x,enemySpawnPosition[0].y,box.x,box.y);
		lifeLeft --;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})

	}

	if (lifeLeft == 0) {
		lifeLeft = 0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
		for (i=0;i<=4;i++) {
		clearInterval(enemyTimer[i]);
		enemy[i].remove();
		enemySpawnPosition[i].x = bgWidth+box.x
		enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y);
		}
		alert("You have scored " + numScore + " points.")
		enemyMoving = 0;
		numScore = 0;
		numBomb =0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}
}

// Lane Two Enemies
function enemyMove1 () {
	// Movement of Object
	enemySpawnPosition[1].x -= enemySpeed;
	enemy[1].attr({
		'x': enemySpawnPosition[1].x
	})

			
	// Distance between Cannon & Enemy
	var newCannonX = cannon.attrs.x + 82
	var newEnemyX = enemy[1].attrs.x
	var distCannonEnemy = newCannonX - newEnemyX;
			

	// Distance between Bomb & Enemy
	var newBombX = bombList[1].attrs.cx
	var distBombEnemy = newBombX - newEnemyX;

	// Bomb & Enemy Collision
	if (distBombEnemy >0) {
		enemy[1].remove();
		bombList[1].remove();
		clearInterval(cannonTimer)
		moveState[1] = 0;
		enemySpawnPosition[1].x = bgWidth+box.x/2;
		enemy[1] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[1].x,enemySpawnPosition[1].y+1*box.y,box.x,box.y);
		bombPosition[1].x = box.x*2.5;
		bombList[1] = paper.circle(box.x*2.5,topLane.y+box.y/2+box.y,box.x/6);
		bombList[1].attr({
			'fill':'black'
		});	
		cannon.toFront();
		numScore ++;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}

	// Cannon & Enemy
	if (distCannonEnemy > 0) {
		enemy[1].remove();
		//clearInterval(enemyTimer) //Currently: It stops because my enemyTimer stops
		//enemyMoving = 0;
		enemySpawnPosition[1].x = bgWidth+box.x/2
		enemy[1] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[1].x,enemySpawnPosition[1].y+1*box.y,box.x,box.y);
		lifeLeft --;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})

	}

	if (lifeLeft == 0) {
		lifeLeft = 0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
		clearInterval(enemyTimer[1]);
		//clearInterval(enemyTimerTwo);
		//clearInterval(enemyTimerThree);
		enemy[1].remove();
		enemySpawnPosition[1].x = bgWidth+box.x
		for (i=0;i<=4;i++) {
		clearInterval(enemyTimer[i]);
		enemy[i].remove();
		enemySpawnPosition[i].x = bgWidth+box.x
		enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y);
		}
		alert("You have scored " + numScore + " points.")
		enemyMoving = 0;
		numScore = 0;
		numBomb =0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}
}

// Lane Three Enemies
function enemyMove2 () {
	// Movement of Object
	enemySpawnPosition[2].x -= enemySpeed;
	enemy[2].attr({
		'x': enemySpawnPosition[2].x
	})

			
	// Distance between Cannon & Enemy
	var newCannonX = cannon.attrs.x + 82
	var newEnemyX = enemy[2].attrs.x
	var distCannonEnemy = newCannonX - newEnemyX;
			

	// Distance between Bomb & Enemy
	var newBombX = bombList[2].attrs.cx
	var distBombEnemy = newBombX - newEnemyX;

	// Bomb & Enemy Collision
	if (distBombEnemy >0) {
		enemy[2].remove();
		bombList[2].remove();
		clearInterval(cannonTimer[2])
		moveState[2] = 0;
		enemySpawnPosition[2].x = bgWidth+box.x/2;
		enemy[2] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[2].x,enemySpawnPosition[2].y+2*box.y,box.x,box.y);
		bombPosition[2].x = box.x*2.5;
		bombList[2] = paper.circle(box.x*2.5,topLane.y+box.y/2+2*box.y,box.x/6);
		bombList[2].attr({
			'fill':'black'
		});	
		cannon.toFront();
		numScore ++;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}

	// Cannon & Enemy
	if (distCannonEnemy > 0) {
		enemy[2].remove();
		//clearInterval(enemyTimer) //Currently: It stops because my enemyTimer stops
		//enemyMoving = 0;
		enemySpawnPosition[2].x = bgWidth+box.x/2
		enemy[2] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[2].x,enemySpawnPosition[2].y+2*box.y,box.x,box.y);
		lifeLeft --;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})

	}

	if (lifeLeft == 0) {
		lifeLeft = 0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
		for (i=0;i<=4;i++) {
		clearInterval(enemyTimer[i]);
		enemy[i].remove();
		enemySpawnPosition[i].x = bgWidth+box.x
		enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y);
		}
		alert("You have scored " + numScore + " points.")
		enemyMoving = 0;
		numScore = 0;
		numBomb =0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}
}

// Lane Four Enemies
function enemyMove3 () {
	// Movement of Object
	enemySpawnPosition[3].x -= enemySpeed;
	enemy[3].attr({
		'x': enemySpawnPosition[3].x
	})

			
	// Distance between Cannon & Enemy
	var newCannonX = cannon.attrs.x + 82
	var newEnemyX = enemy[3].attrs.x
	var distCannonEnemy = newCannonX - newEnemyX;
			

	// Distance between Bomb & Enemy
	var newBombX = bombList[3].attrs.cx
	var distBombEnemy = newBombX - newEnemyX;

	// Bomb & Enemy Collision
	if (distBombEnemy >0) {
		enemy[3].remove();
		bombList[3].remove();
		clearInterval(cannonTimer)
		moveState[3] = 0;
		enemySpawnPosition[3].x = bgWidth+box.x/2;
		enemy[3] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[3].x,enemySpawnPosition[3].y+3*box.y,box.x,box.y);
		bombPosition[3].x = box.x*2.5;
		bombList[3] = paper.circle(box.x*2.5,topLane.y+box.y/2+3*box.y,box.x/6);
		bombList[3].attr({
			'fill':'black'
		});	
		cannon.toFront();
		numScore ++;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}

	// Cannon & Enemy
	if (distCannonEnemy > 0) {
		enemy[3].remove();
		//clearInterval(enemyTimer) //Currently: It stops because my enemyTimer stops
		//enemyMoving = 0;
		enemySpawnPosition[3].x = bgWidth+box.x/2
		enemy[3] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[3].x,enemySpawnPosition[3].y+3*box.y,box.x,box.y);
		lifeLeft --;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})

	}

	if (lifeLeft == 0) {
		lifeLeft = 0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
		for (i=0;i<=4;i++) {
		clearInterval(enemyTimer[i]);
		enemy[i].remove();
		enemySpawnPosition[i].x = bgWidth+box.x
		enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y);
		}
		alert("You have scored " + numScore + " points.")
		enemyMoving = 0;
		numScore = 0;
		numBomb =0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}
}

// Lane Five Enemies
function enemyMove4 () {
	// Movement of Object
	enemySpawnPosition[4].x -= enemySpeed;
	enemy[4].attr({
		'x': enemySpawnPosition[4].x
	})

			
	// Distance between Cannon & Enemy
	var newCannonX = cannon.attrs.x + 82
	var newEnemyX = enemy[4].attrs.x
	var distCannonEnemy = newCannonX - newEnemyX;
			

	// Distance between Bomb & Enemy
	var newBombX = bombList[4].attrs.cx
	var distBombEnemy = newBombX - newEnemyX;

	// Bomb & Enemy Collision
	if (distBombEnemy >0) {
		enemy[4].remove();
		bombList[4].remove();
		clearInterval(cannonTimer)
		moveState[4] = 0;
		enemySpawnPosition[4].x = bgWidth+box.x/2;
		enemy[4] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[4].x,enemySpawnPosition[4].y+4*box.y,box.x,box.y);
		bombPosition[4].x = box.x*2.5;
		bombList[4] = paper.circle(box.x*2.5,topLane.y+box.y/2+4*box.y,box.x/6);
		bombList[4].attr({
			'fill':'black'
		});	
		cannon.toFront();
		numScore ++;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}

	// Cannon & Enemy
	if (distCannonEnemy > 0) {
		enemy[4].remove();
		//clearInterval(enemyTimer) //Currently: It stops because my enemyTimer stops
		//enemyMoving = 0;
		enemySpawnPosition[4].x = bgWidth+box.x/2
		enemy[4] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[4].x,enemySpawnPosition[4].y+4*box.y,box.x,box.y);
		lifeLeft --;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})

	}

	if (lifeLeft == 0) {
		lifeLeft = 0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
		for (i=0;i<=4;i++) {
		clearInterval(enemyTimer[i]);
		enemy[i].remove();
		enemySpawnPosition[i].x = bgWidth+box.x
		enemy[i] = paper.image('resources/enemy_pirate.png',enemySpawnPosition[i].x,enemySpawnPosition[i].y+i*box.y,box.x,box.y);
		}
		alert("You have scored " + numScore + " points.")
		enemyMoving = 0;
		numScore = 0;
		numBomb =0;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})
	}
}



startGame.addEventListener('click', function(ev) {
		if (enemyMoving == 0) {
		numBomb = 0;
		lifeLeft = 3;
		textBarInformation.attr({
			'text': "Bomb: " + numBomb + "; Score: " + numScore + " ; " + "Life Left: " + lifeLeft
		})

		setTimeout(function() { enemyTimer[0] = setInterval(enemyMove0, 30) }, 0);
		setTimeout(function() { enemyTimer[1] = setInterval(enemyMove1, 30) }, 500);
		setTimeout(function() { enemyTimer[2] = setInterval(enemyMove2, 30) }, 1500);
		setTimeout(function() { enemyTimer[3] = setInterval(enemyMove3, 30) }, 2000);
		setTimeout(function() { enemyTimer[4] = setInterval(enemyMove4, 30) }, 2500);
		enemyMoving = 1;
	};
})


//Used to randomise the timing of enemies:
function timeRandomizer() {
	time = Math.floor(Math.random()*10000);
	console.log(time);
}
