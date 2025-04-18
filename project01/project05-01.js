"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Gary Hembree
      Date:   4-8-25

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions

//step 3
let timeID;
//step 4
let questionlist = document.querySelectorAll("div#quiz input")
//step 5

startQuiz.onclick = function() {
   overlay.className = "showquiz";
   timeID = window.setInterval(countdown, 1000)
}
//step 6
function countdown() {
   if (timeLeft == 0){
      clearInterval(timeID);
      let totalCorrect = checkAnswers()

      if (totalCorrect== correctAnswers.lenght) {
         window.alert("Congrat! You get a 100%")
      }
      else {
         window.alert("You answered "+totalCorrect+"/"+correctAnswers.length +" questions")
         timeLeft = quizTime
         quizClock.value = timeLeft;
         overlay.className ="hidequiz";
      }
   }
//part 7
   else {
      timeLeft--;
      quizClock.value = timeLeft
   }
}



/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

