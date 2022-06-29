/*Add your JavaScript here*/

var jessScore = 0; //Store Jess' score
var ceceScore = 0; //Store Cece's score

var questionCount = 0; //Store number of answers clicked on

//Store HTML elements using the DOM
var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");

//Listen for click on answer buttons and call the function if clicked
q1a1.addEventListener("click", jess);
q1a2.addEventListener("click", cece);

q2a1.addEventListener("click", cece);
q2a2.addEventListener("click", jess);

q3a1.addEventListener("click", cece);
q3a2.addEventListener("click", jess);

q4a1.addEventListener("click", jess);
q4a2.addEventListener("click", cece);

q5a1.addEventListener("click", jess);
q5a2.addEventListener("click", cece);

q6a1.addEventListener("click", cece);
q6a2.addEventListener("click", jess);

q7a1.addEventListener("click", jess);
q7a2.addEventListener("click", cece);

// Listen for click on restart button and call function if clicked
restart.addEventListener("click", restartQuiz);

//track jess score and check if quiz is complete
function jess() {
  jessScore += 1
  questionCount += 1

  console.log("questionCount = " + questionCount + " jessScore = " + jessScore);

  if (questionCount == 7) {
  console.log("The quiz is done!");
  updateResult();
}
  
}

//track cece score and check if quiz is complete
function cece() {
  ceceScore += 1
  questionCount += 1

  console.log("questionCount = " + questionCount + " ceceCount = " + ceceScore);

  if (questionCount == 7) {
  console.log("The quiz is done!");
  updateResult();
}
  
}

// update quiz result and put inside scores
function updateResult() {
  displayResult.addEventListener("click", display);
}


function display() {
  if (jessScore >= 4) {
    result.innerHTML = "You are Jess!";
    console.log("You are a Jess!")
  } else if (ceceScore >= 4) {
    result.innerHTML = "You are Cece!";
    console.log("You are Cece!")
  }
}

//restart quiz
function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  jessScore = 0;
  ceceScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "jessScore = " + jessScore + "\t" + "ceceScore = " + ceceScore);
  enableQuestions();
}

//disable buttons
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);

q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", disableQ6);

q7a1.addEventListener("click", disableQ7);
q7a2.addEventListener("click", disableQ7);

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
}

function disableQ4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
}

function disableQ5() {
  q5a1.disabled = true;
  q5a2.disabled = true;
}

function disableQ6() {
  q6a1.disabled = true;
  q6a2.disabled = true;
}

function disableQ7() {
  q7a1.disabled = true;
  q7a2.disabled = true;
}

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  q6a1.disabled = false;
  q6a2.disabled = false;
  q7a1.disabled = false;
  q7a2.disabled = false;
}