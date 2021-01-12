// main.js

console.log(`yo`);

var contentBox = document.getElementById('content');
var week7Diary = document.getElementById('wk7Button');
var week8Diary = document.getElementById('wk8Button');
var week9Diary = document.getElementById('wk9Button');
var week10Diary = document.getElementById('wk10Button');
var week11Diary = document.getElementById('wk11Button');
var week12Diary = document.getElementById('wk12Button');
var finalProjectDiary = document.getElementById('finalProjectButton');

week7Diary.addEventListener("click", function(ev){
	contentBox.innerHTML = document.getElementById('Wk7').innerHTML;
})

week8Diary.addEventListener("click", function(ev){
	contentBox.innerHTML = document.getElementById('Wk8').innerHTML;
})

week9Diary.addEventListener("click", function(ev){
	contentBox.innerHTML = document.getElementById('Wk9').innerHTML;
})

week10Diary.addEventListener("click", function(ev){
	contentBox.innerHTML = document.getElementById('Wk10').innerHTML;
})

week11Diary.addEventListener("click", function(ev){
	contentBox.innerHTML = document.getElementById('Wk11').innerHTML;
})

week12Diary.addEventListener("click", function(ev){
	contentBox.innerHTML = document.getElementById('Wk12').innerHTML;
})

finalProjectDiary.addEventListener("click", function(ev){
	contentBox.innerHTML = document.getElementById('finalProjectWriteUp').innerHTML;
})