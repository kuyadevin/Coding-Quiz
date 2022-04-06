// Creating variables
var timeEl =document.querySelector(".Timer");
var questionEl=document.querySelector(".TitleQ");
var choices=Array.from(document.querySelectorAll(".choices"))
var choiceContainer= document.querySelector(".choices-container")
var questionContainer= document.querySelector(".questionContainer")
var currentQuestion={}
var answer=0

var questions =[
    {
        question: "What is the main program we use?",
        choiceA:"HTML",
        choiceB:"CSS",
        choiceC:"Javascript",
        choiceD: "All of the above",
        answer:"All of the above"
    },
    {
        question:"What is used to affect the basic, artistic elements of a webpage?",
        choiceA:"HTML",
        choiceB:"Javascript",
        choiceC:"CSS",
        choiceD:"JQuerey",
        answer:"CSS"

    },
    {
        question:"What tag would tag the word 'shark' in the following array: animals=['shark','duck', 'otter', 'fish']",
        choiceA: "animals[0]",
        choiceB: "animals[1]",
        choiceC: "animals[2]",
        choiceD: "animals[3]",
        answer: "animals[0]",
    },
    {
        question:"What is an example of a Web API?",
        choiceA:"HTML",
        choiceB:"Javascript",
        choiceC:"CSS",
        choiceD:"JQuerey",
        answer:"JQuerey"
    }
]
// Create a varaible for the initial start time for the quiz
var secondsLeft= 60;
// Create the function to start the countdown 
function startTime(){
    var timerInt = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time Remaing:" + secondsLeft;

        if(secondsLeft===0){
            clearInterval(timerInt);
            return alert("Time is up")
        }
}, 1000)
}

startTime();

function questionOne(

)