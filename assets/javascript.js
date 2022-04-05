// Creating a variable for the timer
var timeEl =document.querySelector(".Timer");
// Create a varaible for the initial start time for the quiz
var secondsLeft= 60;
// Create the function to start the countdown 
function startTime(){
    var timerInt = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time Remaing:" + secondsLeft;
}, 1000)
}

startTime();