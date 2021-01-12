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
var bomb;
var bombPosition = {
	'x':box.x*2.5,
	'y':centerLane.y+box.x/2
}
var timer;

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

// Player Interactions
var player = paper.circle(box.x/2+box.x,centerLane.y+box.y/2,box.x/2);
player.attr({
	'fill': 'pink',
})

	// Player Movements
	document.addEventListener("keydown",function(ev) {
		console.log(event.keyCode)
		if(event.keyCode == 38) {
			player.attr({
				'cy':moveUp(),
			})
		} else if (event.KeyCode == 40) {
			//Down
		} else if (event.KeyCode == 37) {
			//Left
		} else if (event.KeyCode == 39) {
			//Right
		}
	})

	// Function for movement
		// MoveUp
		function moveUp(){
			var y =+ player.cy
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
	/*
	bomb = paper.circle();
	bomb.attr({
		'cx':bombPosition.x,
		'cy':bombPosition.y,
		'r':box.x/4,
		'fill':'orange'
	});

	function bomb() {
		console.log(bomb)
		bombPosition.y +=10;
		bomb.attr({
			'cx': bombPosition.x, 
			'cy': bombPosition.y});
	}

	function bombMove() {
		bombPo.cy ++;
		console.log(bombNewPos);
		bomb.attr({
			'cy': bomb.cy
		})
		console.log(bomb)
		console.log('working')
	}
	*/	

	moveState = 0;
	bombExists = 0;

	function bomb() {
		bomb = paper.circle(bombPosition.x,bombPosition.y,box.x/4);
		bomb.attr({
		'fill':'orange'
		});
		console.log(bomb);
	}

	function bombMove() {
		bombPosition.x +=5;
		bomb.attr({
			'cx': bombPosition.x
		})
	}

	function bombTimer() {
		if (moveState == 0) {
			bomb();
			moveState = 1;
		} else {
			bombMove();
		}
	}

	//Cannon fires bomb towards enemy
	cannon.node.addEventListener('click', function(ev){
		timer=setInterval(bombTimer, 30);
	})

// Enemy
var enemy = paper.circle(box.x*14,centerLane.y+box.y/2,box.x/2)
enemy.attr({
	'fill':'green'
})

	// Enemy Movement

	// Enemy Spawning

	// Enemy collides with bomb

	// Enemy collides with cannon
