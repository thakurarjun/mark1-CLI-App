var readlineSync = require("readline-sync");

var score = 0;
var highScore = {
    name: "Jiten", 
    score: 4
}


var name = readlineSync.question("May I have your name please? ");
var welcomeMessage = "Welcome " + name;
console.log(welcomeMessage);

var userAge = readlineSync.question("what is your age? ");
console.log(userAge);



function userQuestion(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("you are absolutely right!");
    score = score + 1;
  } else {
    console.log("you are wrong");
    score = score - 1;
  }
  console.log("your score: " + score);
  console.log("---------")
}
var questions = [
  { question: "who is my favourite superhero?", answer: "captain america" },
  { question: "who is my favourite singer?", answer: "diljit dosanj" },
  {question: "where do I live?", answer: "himachal pradesh"}, 
  {question: "where is my hometown?", answer: "mandi"}, 
  {question: "what is my highest qualificaton?", answer: "msc"}

];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  userQuestion(currentQuestion.question, currentQuestion.answer);
}
function gameOver () {
    if (score === questions.length) {

    console.log("you have got highest " + score + " points!")
} else {
    console.log("you have got " + score + " points!")
}

}
gameOver();
 
function currentUser() {
    if (score >= highScore.score) {
console.log("Congrats you have beaten high score.Now send me your screenshot.")
    } else {
        console.log("Great job ...but you are some points behind")
    }
    console.log("total score " + score)
};
currentUser();