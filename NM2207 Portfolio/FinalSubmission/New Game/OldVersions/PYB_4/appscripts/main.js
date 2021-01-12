// main.js

console.log(`yo`);

// Variables
var paper = new Raphael(document.getElementById("mainGameBackground"));
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}
var bgWidth = paper.canvas.clientWidth;
var bgHeight = paper.canvas.clientHeight;
var box = {
	'x': 82,
	'y': 82
};
var centerLane = {
	'x': 0,
	'y' : box.y*2 + box.y/2
};
var cannonSpeed = 5;
var bombPosition = {
	'x':box.x*2.5,
	'y':centerLane.y+box.x/2
}
var cannonTimer;
var enemyTimer;
var moveState = 0;
var bombList = [];

// MainGameBackground
var gameMainBG = paper.image('resources/ship_deck.png',0,0,bgWidth,bgHeight)
gameMainBG.attr ({
	//'fill':'white',
})

/*
// Game Grid - For Checking
for (i = 0; i<bgHeight; i+=box.y) {
	for (j=0; j<bgWidth; j+=box.x) {
	paper.rect(j, i, box.x, box.y)
}}
*/
var playerPosition = {
	'x':box.x/2+box.x,
	'y':centerLane.y+box.y/2
}

// Player Interactions
var player = paper.circle(playerPosition.x,playerPosition.y,box.x/2);
player.attr({
	'fill': 'pink',
})

	// Player Movements
	document.addEventListener("keydown",function(ev) {
		console.log(event.keyCode)
		if(event.keyCode == 38) {
			playerPosition.y -= box.y
			player.attr({
				'cy': playerPosition.y
			})
			console.log('works')
		}
		if (event.keyCode == 40) {
			playerPosition.y += box.y
			player.attr({
				'cy': playerPosition.y
			})
		}
		if (event.keyCode == 37) {
			playerPosition.x -= box.x
			player.attr({
				'cx': playerPosition.x
			})
		}
		if (event.keyCode == 39) {
			playerPosition.x += box.x
			player.attr({
				'cx': playerPosition.x
			})
			console.log('works')
		}
	})

	// Function for movement
		// MoveUp
		function moveUp(){
			playerPosition.x += 1
			player.attr({
				'cx': playerPosition.x
			})
		}

		function moveDown(){
			playerPosition.x -= 1
			player.attr({
				'cx': playerPosition.x
			})
		}

		function moveLeft(){
			playerPosition.y -= 1
			player.attr({
				'cy': playerPosition.y
			})
		}

		function moveRight(){
			playerPosition.y += 1
			player.attr({
				'cy': playerPosition.y
			})
			console.log('works')
		}
	

// Bomb Crate Interactions
var crate = paper.rect(0,centerLane.y,box.x,box.y)
crate.attr ({
	'fill': 'blue'
})

	//Gives player bomb

// Cannon bomb creation
for (i=0; i<=0; i++) {
bombList[i] = paper.circle(box.x*2.5,centerLane.y+box.x/2,box.x/4);
bombList[i].attr({
	'fill':'orange'
});
}

// Cannon Interactions

var cannon = paper.rect(box.x*2,centerLane.y,box.x,box.y)
cannon.attr({
	'fill':'black'
})


	
	//Cannon accepts bomb from player

	//Cannon bomb movement

	function bombMove() {
		for (i=0; i<=0; i++) {
			if (bombPosition.x <= bgWidth + box.x/2) {
				bombPosition.x += cannonSpeed;
				bombList[i].attr({
					'cx': bombPosition.x
				});
				console.log('moving')
			} else {
				bombList[i].remove();
				clearInterval(cannonTimer);
				moveState = 0;
				bombPosition.x = box.x*2.5;
				bombList[i] = paper.circle(box.x*2.5,centerLane.y+box.x/2,box.x/4);
				bombList[i].attr({
					'fill':'orange'
				});
				cannon.toFront();
				console.log('work4')
			}
		}
	}

	function bombTimer() {
		bombList[i] = bombMove();
		console.log('work3')
	}
 
	//Cannon fires bomb towards enemy
	cannon.node.addEventListener('click', function(ev){
		if (moveState == 0) {
			moveState = 1;
			cannonTimer = setInterval(bombTimer, 20);
			return cannonTimer;
			console.log('work')
		} 
	})

// Enemy

var enemySpawnPosition = {
	"x": bgWidth + box.x/2,
	"y": centerLane.y+box.y/2
};

var enemySpeed = 5;
var enemy = [];
var enemyMoving = 0;
var startGame = document.getElementById('startGame');

	// Enemy Spawning

for (i=0;i<=0;i++) {
	enemy[i] = paper.circle(enemySpawnPosition.x,enemySpawnPosition.y,box.x/2)
	enemy[i].attr({
		'fill': 'green'
})
}

function enemyMove () {
	for (i=0;i<=0;i++) {
			enemySpawnPosition.x -= enemySpeed;
			enemy[i].attr({
				'cx': enemySpawnPosition.x
			})
			// Cannon & Enemy
			var newCannonX = cannon.attrs.x + 82
			var newEnemyX = enemy[i].attrs.cx - box.x/2
			var distCannonEnemy = newCannonX - newEnemyX;
			//console.log(distCannonEnemy);
			
			// Bomb & Enemy
			var newBombX = bombList[i].attrs.cx
			var distBombEnemy = newBombX - newEnemyX;

			if (distBombEnemy >=0) {
				enemy[i].remove();
				bombList[i].remove();
				clearInterval(enemyTimer);
				clearInterval(cannonTimer)
				enemyMoving = 0;
				moveState = 0;
				enemySpawnPosition.x = bgWidth+box.x/2;
				enemy[i] = paper.circle(enemySpawnPosition.x,enemySpawnPosition.y,box.x/2);
				enemy[i].attr({
					'fill': 'green'
				});
				bombPosition.x = box.x*2.5;
				bombList[i] = paper.circle(box.x*2.5,centerLane.y+box.x/2,box.x/4);
				bombList[i].attr({
					'fill':'orange'
				});
				cannon.toFront();
			}

			if (distCannonEnemy >= 0) {
				enemy[i].remove();
				clearInterval(enemyTimer) //Currently: It stops because my enemyTimer stops
				enemyMoving = 0;
				enemySpawnPosition.x = bgWidth+box.x/2
				enemy[i] = paper.circle(enemySpawnPosition.x,enemySpawnPosition.y,box.x/2)
				enemy[i].attr({	
					'fill': 'green'
				})	
			}

		}
	}

startGame.addEventListener('click', function(ev) {
		if (enemyMoving == 0) {
		enemyTimer = setInterval(enemyMove, 40);
		enemyMoving = 1;
	};
})





//Try to do: Slightly what is beyond in class (Like explain how)
