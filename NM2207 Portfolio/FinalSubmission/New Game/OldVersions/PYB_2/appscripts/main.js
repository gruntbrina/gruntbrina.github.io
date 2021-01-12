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

// Cannon Interactions
var cannon = paper.rect(box.x*2,centerLane.y,box.x,box.y)
cannon.attr({
	'fill':'black'
})
	
	//Cannon accepts bomb from player

	//Cannon bomb creation
	function bomb(midx,midy) {
		for (i=0; i<=0; i++) {
			//bombObj = paper.circle(midx,midy,box.x/4);
			bombList[i] = paper.circle(midx,midy,box.x/4);
			//bombObj.attr ({
			bombList[i].attr({
			'fill':'orange'
			});
			//console.log(bomb);
		}	
	}

	function bombMove() {
		for (i=0; i<=0; i++) {
			if (bombPosition.x <= bgWidth + box.x/2) {
				//bgWidth + box.x/2
				bombPosition.x += cannonSpeed;
				//bombObj.attr ({
				bombList[i].attr({
					'cx': bombPosition.x
				});
				//return bombList[i];
			} else {
				bombList[i].remove();
				clearInterval(cannonTimer);
				moveState = 0;
				bombPosition.x = box.x*2.5;
				console.log('work4')
			}
		}
	}

	function bombTimer() {
			if (moveState == 0) {
				bomb(box.x*2.5,centerLane.y+box.x/2);
				moveState = 1;
				console.log('work2')
			} else {
				bombList[i] = bombMove();
				console.log('work3')
			}
	}
 
	//Cannon fires bomb towards enemy
	cannon.node.addEventListener('click', function(ev){
		//Try adding a click counter for the i!
		console.log(moveState);
		if (moveState == 0) {
			cannonTimer = setInterval(bombTimer, 30);
			return cannonTimer; 
			console.log('work')
		} 
		/*else if (moveState == 1) {
			bombPosition.x = box.x*2.5
			moveState = 0
		}*/
	})

// Enemy
var enemySpawnPosition = {
	"x": bgWidth + box.x/2,
	"y": centerLane.y+box.y/2
};
var enemySpeed = 5;
var enemy;
var enemyMoving = 0;

	// Enemy Spawning
	function enemySpawn (midx,midy) {
		enemy = paper.circle(midx,midy,box.x/2)
		enemy.attr({
			'fill':'green'
		})
	}

	// Enemy Movement
	function enemyMove () {
		enemySpawnPosition.x -= enemySpeed;
		enemy.attr({
			'cx': enemySpawnPosition.x
		})
	}

	function enemyMoveTimer () {
		if (enemyMoving == 0) {
			enemySpawn (enemySpawnPosition.x,enemySpawnPosition.y);
			enemyMoving = 1;
		} else {
			enemyMove();
		}
	}

	var randomTime = Math.floor(Math.random()*50)

		enemyTimer = setInterval(enemyMoveTimer, 30)




	// Enemy collides with bomb

	// Enemy collides with cannon
