
console.log("yo, I'm alive!");

var paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
var dimX = paper.canvas.clientWidth;
var dimY = paper.canvas.clientHeight;

// set tick and tock locations
var bg = paper.rect(0,0,dimX,dimY);
bg.attr ({
	'fill': 'pink'
})
//testing whether the above works

//Draw tick/tock text
var tick = paper.text(dimX/4,dimY/4,"Tick");
tick.attr({
	'font-size': 30
})
var tock = paper.text(dimX*3/4,dimY/4,"Tock");
tock.attr({
	'font-size': 30
})

//--------------------------------------------------
// function to draw needle pointing to a location
function drawNeedle(a,b,c,d) {
	var pathString = ("M" + a + "," + b + "L" + c + "," + d);
	console.log(pathString)
	return pathString
}

// Create the needle
var needle = paper.path();
var pathString = "M" + dimX/2 + "," + dimY/2 + "L" + dimX/4 + "," + dimY*1.15/4

//initial path
needle.attr ({
	//'path': ("M " + dimX/2 + "," + dimY/2 + " L" + dimX/4 + "," + dimY*1.15/4)
	//'path': drawNeedle(dimX/2,dimY/2,dimX/4,dimY*1.15/4)
	'path': pathString
})

// Create a variable to keep track of the state of the needle
var needleTick = 0;

// switch state of needle on click
bg.node.addEventListener("click", function() {
	//console.log('Step 1')
	if (needleTick == 0) {
		needle.attr ({
			'path': drawNeedle(dimX/2,dimY/2,dimX*3/4,dimY*1.15/4)
		});
		needleTick = 1;
		//console.log('clicked')
	}
	else {
		needle.attr ({
			'path': drawNeedle(dimX/2,dimY/2,dimX/4,dimY*1.15/4)
		});
		needleTick = 0;
		//console.log('clocked')
	}
})

