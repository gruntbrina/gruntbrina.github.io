// This allows you to print the now playing key to the screen. You will want to call this everytime a key is pressed. 
// Input argument is the piano key corresponding to a keydown event
// There is no return value, but it sets the innerHTML of something. Can you find out what?
function setplayNote(playedKey)
{
  //for some odd reason, could not figure this out! Must relook! - Referred to week 8 ver! :)
  //Ok nvm, for the above: Because my function was called without input, so playedKey = null, therefore there was no data-note because there is no reference! :P
  console.log("setplayNote is triggered!");
  var keyNow = playedKey.getAttribute('data-note');
  console.log(keyNow);
  
  var pianoKeyText = document.getElementById("nowplayingNote");
  //Add the " quotation to nowPlayingNote" so that you can obtain the string value! (I think bc without, I could not replace the innerHTML)
  pianoKeyText.innerHTML = keyNow

}
//

//create a variable to check the hint status.




//Part 1: Show hints
//The window should listen for any keydown events. Add that eventlistener here. What functions should it call?

window.addEventListener('keydown',function(ev){
  //console.log("test")
  console.log(ev.keyCode);
  if (ev.keyCode == 32) {
    showHints(ev);
    console.log(ev.keyCode)
    //https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar
  } else {
    playNote(ev);
  }
})

//Part 2: Show the note that's playing

// This allows you to show hints if the space bar is pressed the first time, and remove the hints when the space bar is pressed the second time.
var hintsOn = 0;
// No input argument, but it is called if the keydown is a spacebar.
// There is no return value, but it changes the opacity of all the elements of the hints class
function showHints()
{
  console.log("showHints is triggered!");

  //first, create a list of all elements which have the class name "hints"
  hints = document.getElementsByClassName('hints');
  console.log(hints) //17 

  if (hintsOn == 0) {
    for (i=0;i<17;i++) {
      hints[i].style.opacity = 1;
    }
    hintsOn = 1;
  } else {
    for(i=0;i<17;i++) {
    hints[i].style.opacity = 0;
    hintsOn = 0;
    }
  }
}
//Explanation: You'll need to put hintsOn = 1 outside the loop! Because when you call the function, although you only called it ONCE, the loop works until it stops meeting the condition!
//So if you have a loop, and you put hintsOn = 1 inside, it will change every alternate loop! Because your first loop says "hintsOn = 1" so when the loop checks again, it will go to the "hintsOn = 1" condition


/*
  for (i=0;i<17;i++){
    if(hintsOn == 0) {
      hints[i].style.opacity = 1;
    } else {
        hints[i].style.opacity = 0;
      }
    }
  }
*/
  //check the status variable in an if-then condition
  
  //next, for each element in the list, set its opacity to 1
  
  //set the status variable
//Part 3: Play Note

    
//This allows you to play the audio. You will want to call this everytime a key is pressed. 
//Input argument is the event variable from the event listener
// There is no output, but it plays audio and calls setplayNote
function playNote(e){
  console.log("playNote is triggered! e.keyCode is "+ e.keyCode);

  var pianoKeyID = 'k' + e.keyCode

  var pianoKeyInput = document.getElementById(pianoKeyID)

  if(pianoKeyInput != null){
     pianoKeyInput.currentTime=0;
     pianoKeyInput.play();
     setplayNote(pianoKeyInput);
  }



    //keycode is a number eg 65. but what are the ids of the audio elements in index.html like?
    

    //use getAttribute() to get the attribute of an HTML element, e.g. the note which is being played.
      
    //If the pressed key is on your synthesizer, then call setplayNote
  }