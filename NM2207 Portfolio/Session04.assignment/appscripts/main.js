/* Input and Events */

console.log("yo");

var colorDisplay = document.getElementById("colorDisplay")

function opacBorder() {
	var hexValue = document.getElementById("userColor").value
	var slider = document.getElementById("mySlider").value
	//Wth I searched everywhere and I can't find a way to just change the border opacity ONLY
	colorDisplay.style.opacity = slider
	colorDisplay.style.backgroundColor = "#" + hexValue
	console.log(hexValue);
	console.log(slider);
}

function hslString(x,y,z) {
	console.log("hsl("+ x + "," + y + "%" + "," + z + "%" + "," + a + ")");
	var hue = document.getElementById("hue").value;
	var saturation = document.getElementById("saturation").value;
	var lightness = document.getElementById("lightness").value;
	colorDisplay.style.backgroundColor = "hsl(" + hue + "," + saturation + "%" + "," + lightness + "%" + ")";
	//Basically I got it from the slider directly, but I want it from the x,y,z
	console.log("This works");
	console.log(hue);
	console.log(saturation);
	console.log(lightness);
}

//hslString(1,2,3,1);

document.getElementById("eventListener").addEventListener("click", function(){document.getElementById("colorSpec").innerHTML = "I told you so, now you've gotta reload";
	console.log("works")})


//https://stackoverflow.com/questions/35667267/addeventlistenerclick-firing-immediately
//Basically, I was wondering why it would immediately call and saw the above site
/*
function eventListenHere() {
	document.getElementById("colorSpec").innerHTML = "I told you so, now you've gotta reload";
	console.log("works")
}


function test() {
	console.log("whydoesitselfcall")
}
*/