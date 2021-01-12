//PRE-FUNCTION BLOCK
var counter2; //LINE 1: declaring a variable. Current value = undefined
//counter2 = 5; //LINE 2: initializing a variable. Current value = 5


function foo() {
//FUNCTION BLOCK
	//counter2 = 5;
	counter2 = counter2 + 1;
	//counter2 = 5;
   console.log("Inside the function block: counter2’s value is:" + counter2);

}

//POST-FUNCTION BLOCK
console.log("Post-function block: counter2’s value is:" + counter2);
foo();

counter2 = 5;