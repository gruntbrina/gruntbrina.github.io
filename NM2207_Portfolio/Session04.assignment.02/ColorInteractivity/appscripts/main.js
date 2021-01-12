// main.js

console.log(`yo`);

/* assign3: font family for article in JavaScript */
var art=document.getElementById("articleid").style.fontFamily = "cursive,Charcoal,sans-serif";

/* assign3: center header text using javascript */
var art=document.getElementById("headerid").style.textAlign = "center";

/*
var hue = document.getElementById("hue").value;
var saturation = document.getElementById("saturation").value;
var lightness = document.getElementById("lightness").value;*/
var asideB = document.getElementById("aside");
var article = document.getElementById("articleid");

//asideB.style.backgroundColor = hsl(120,100,50)

function hslString(x,y,z,a) {
	//console.log("hsl("+hue+ "," +saturation+ "," +lightness+ ")");
	var hue = document.getElementById("hue").value;
	var saturation = document.getElementById("saturation").value;
	var lightness = document.getElementById("lightness").value;
	var opacity = document.getElementById("opacity").value;
	asideB.style.backgroundColor = "hsla(" + hue + "," + saturation + "%" + "," + lightness + "%" + "," + opacity + ")";
	console.log("This works");
	console.log(hue);
	console.log(saturation);
	console.log(lightness);
	console.log(opacity);
}


function mouseUp() {
	article.style.opacity = "1";
}

function mouseDown() {
	article.style.opacity = "0";
}

//hslString(1,2,3)

//Below is for part 3
/*
console.log(hue);
console.log(saturation);
console.log(lightness);
*/

//hslString(hue,saturation,lightness)