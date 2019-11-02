problems = [
	

{	
question: "Which of these best describes an array?"
,
choices : 
	[ "A data structure that shows a hierarchical behaviour" ,"Container of objects of similar types" , "Arrays are immutable once initialised" , "Array is not a data structure" ],

answer: "Container of objects of similar types"

},

{	
question: "Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence? " ,


choices: [
	"alan turing",
	"jeff bezos",
	"George Boole",
	"charles babbage"
	]
,
answer: 
	"alan turing"
}
,


{	
question: "Who developed Yahoo?" ,
choices: ["Dennis Ritchie & Ken Thompson",
"David Filo & Jerry Yang",
"Vint Cerf & Robert Kahn",
"Salman & Shah Ruh Khan"
]
 ,
answer: "David Filo & Jerry Yang"
}
,
{
question: "When does the ArrayIndexOutOfBoundsException occur?",
choices: ["Compile-time", "Run time" , "Not an error", "Not an exception at all"] ,
answer : "Run time"
}
,

{
question: "Which of the following concepts make extensive use of arrays?",
choices: [" Binary trees", "Scheduling of processes" , "Caching", "Spatial locality"] ,
answer : "Spatial locality"
}

,

{
question: "What is the time complexity to insert a node based on key in a priority queue?",
choices: ["O(nlogn)", "O(logn)" , "O(n)", "O(n^2)"] ,
answer : "O(n)"
}
,
{
question: "What is the advantage of using Linked List over Array?",
choices: ["insertion", "resizing" , "all of the above", "removal"] ,
answer : "all of the above"
}


]




$(function() {
var person = prompt("Please enter your name");
  if(person === ""){
  	window.location.reload();
  }
 else if(person != null ) {
    document.getElementById("enter-name").innerHTML =
    "Hello " + person ;
  }
});

var points = 0 ;
var index = 0;

$(document).ready(function startMC(){  /*display first problem  index = 0*/
var question = problems[index].question;
var firstChoice = problems[index].choices[0] ;
var secondChoice = problems[index].choices[1];
var thirdChoice = problems[index].choices[2];
var fourthChoice = problems[index].choices[3];
document.getElementById("question-display").innerHTML = question;
document.getElementById("choice-a").innerHTML = firstChoice;
document.getElementById("choice-b").innerHTML = secondChoice;
document.getElementById("choice-c").innerHTML = thirdChoice;
document.getElementById("choice-d").innerHTML = fourthChoice;
});

function nextQuestion(){
if(index < problems.length){
var question = problems[index].question;
var firstChoice = problems[index].choices[0] ;
var secondChoice = problems[index].choices[1];
var thirdChoice = problems[index].choices[2];
var fourthChoice = problems[index].choices[3];
document.getElementById("question-display").innerHTML = question;
document.getElementById("choice-a").innerHTML = firstChoice;
document.getElementById("choice-b").innerHTML = secondChoice;
document.getElementById("choice-c").innerHTML = thirdChoice;
document.getElementById("choice-d").innerHTML = fourthChoice;
document.getElementById("question-number").innerHTML = "Question " + (index+1);

}else{
window.alert("Test finished! Final Score: " + points +"/" + problems.length + "\n "+ (points/problems.length)*100 +"%");
window.location.reload();
}

}

	//on button click ... of a,b,c,d  .. check if correct first then -> move index ++


$( ".btn-a" ).click(function() {
var firstChoice = problems[index].choices[0] ;
var correctAnswer = problems[index].answer;
if(firstChoice === correctAnswer){
	points++;
	index++;
	document.getElementById("total-points").innerHTML = points;
	nextQuestion();
}else{
index++;		
nextQuestion();
}
});

$(".btn-b" ).click(function() {
var secondChoice = problems[index].choices[1];
var correctAnswer = problems[index].answer;
if(secondChoice === correctAnswer){
	points++;
	index++;
	document.getElementById("total-points").innerHTML = points;
	nextQuestion();
}else{ //move to next question
index++;		
nextQuestion();
}

});
$( ".btn-c" ).click(function() {
var thirdChoice = problems[index].choices[2];
var correctAnswer = problems[index].answer;
if(thirdChoice === correctAnswer){
	points++;
	index++;
	document.getElementById("total-points").innerHTML = points;
	nextQuestion();
}else{ //move to next question
index++;		
nextQuestion();
}

});
$( ".btn-d" ).click(function() {
var fourthChoice = problems[index].choices[3];
var correctAnswer = problems[index].answer;
if(fourthChoice === correctAnswer){
	points++;
	index++;
	document.getElementById("total-points").innerHTML = points;
	nextQuestion();
}else{ //move to next question
index++;
}
});



//show results of MC!
		

/*
question: "What is part of a database that holds only one type of information?",

choices : 
	[ "report" ,"field" , "record" , "file" ],

answer: "field"
*/