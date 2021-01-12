
console.log("yo, I'm alive!");

var paper = new Raphael(document.getElementById("mySVGCanvas"));
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
// paper.put(raphObj) - puts Raphel elements back ona paper after it has been paper.clear()'ed
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}
var bg = paper.rect(0,0, pWidth, pHeight);
bg.attr ({
	'fill': 'pink'
})

let raphaelPath;
let pathString = "M "+pWidth/2+","+pHeight/2;

//Drawing Method Function
raphaelPath = paper.path();
raphaelPath.attr ({
	'path': pathString,
	'stroke-width': 10
})

bg.node.addEventListener("click",function(ev) {
	connect(ev);
})

function connect(ev) {
	pathString = pathString + "L" + ev.offsetX+ "," + ev.offsetY
	raphaelPath.attr ({
		'path': pathString + "L" + ev.offsetX+ "," + ev.offsetY
	})
}


/*
bg.node.addEventListener("click",function(ev){
	pathString = pathString + "L" + ev.offsetX+ "," + ev.offsetY
	//ROFL I SOLVED IT BY JUST ADDING A VARIABLE? But I need to use connect...
	raphaelPath.attr ({
		'path': pathString + "L" + ev.offsetX+ "," + ev.offsetY
	})
	console.log("clicked")
})
*/

//Button
var buttonClear = document.getElementById("buttonClear");

buttonClear.addEventListener("click", function(){
	paper.clear();
	paper.put(bg);
	//Bottom is to reset the thing!
	raphaelPath = paper.path(); //This line resets back to when raphael was at original pathString
	raphaelPath.attr({
		'stroke-width':10
	}) //This ensures that it will maintain the size
	paper.put(raphaelPath);
	//Actually, there is no need for the above line, because by doing raphaelPath = paper.path(), you're re-introducing it back in
	pathString = "M "+pWidth/2+","+pHeight/2; //Ensures that the path resets to original
	console.log("why won't you work T_T")
})
