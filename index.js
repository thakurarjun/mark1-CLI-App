const readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;
var highScore = {
    name: "Jiten", 
    score: 4
}

var name = readlineSync.question("May I have your name please? ");
var welcomeMessage = "Welcome " + name;
console.log(chalk.black.bgYellow(welcomeMessage));

var userAge = readlineSync.question("what is your age? ");
console.log(userAge);



function userQuestion(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log(chalk.green.bold("you are absolutely right!"));
    score = score + 1;
  } else {
    console.log(chalk.red.bold("you are wrong"));
    score = score - 1;
  }
  console.log(chalk.yellow("your score: " + score));
  console.log("---------")
}
var questions = [
  { question: chalk.whiteBright.underline.bgBlue("who is my favourite superhero?"), answer: "captain america" },
  { question: chalk.whiteBright.underline.bgBlue("who is my favourite singer?"), answer: "diljit dosanj" },
  {question: chalk.whiteBright.underline.bgBlue("where do I live?"), answer: "himachal pradesh"}, 
  {question: chalk.whiteBright.underline.bgBlue("where is my hometown?"), answer: "mandi"}, 
  {question: chalk.whiteBright.underline.bgBlue("what is my highest qualificaton?"), answer: "msc"}

];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  userQuestion(currentQuestion.question, currentQuestion.answer);
}
function gameOver () {
    if (score === questions.length) {

    console.log(chalk.green.bold("you have got highest " + score + " points!"))
} else {
    console.log(chalk.red.bold("you have got " + score + " points!")) 
}

}
gameOver();
 
function currentUser() {
    if (score >= highScore.score) {
console.log(chalk.blue.bold("Congrats you have beaten high score.Now send me your screenshot. "))
    } else {
        console.log(chalk.red.bold("Great job ...but you are some points behind"))
    }
    console.log(chalk.yellow("total score " + score))
};
currentUser();