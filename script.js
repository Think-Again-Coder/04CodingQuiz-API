//Building the coding quiz with 15 True or False questions, giving the user 1:30 of time to complete.
//list of variables that will change with user input using jquery at first.
var questions = document.querySelector("#questions");
var startTime = document.querySelector("#quizTime");
var startButton = document.querySelector("#letsPlay");

//Create an ARRAY of Objects to scroll through questions. 
//create a for loop to cycle through them. 


var highscore;
var timesUp;
// prompt(" Time's Up! Enter your initials "); use this in the quiz time function or the game ending function. 

//list of empty variables to be filled by user input.
var isWrong = false;
var timer = 6;
var timesOut;
var userWins;
var userLoses;

// Object created to cycle through the questions.

var questions = [
    {
      question: "Git has five different branch types in total.",
      choices: ["True", "False"],
      answerChoice: 0,
    },
    {
      question: "\"git init\", \"git status\", and \"git report\" are all Git commands. ",
      choices: ["True", "False"],
      answerChoice: 1,
    },
    {
      question: "All HTML TAGS require opening and closing tags. ",
      choices: ["True", "False"],
      answerChoice: 0,
    },
    {
        question: "All CSS stylesheets require a standalone file linked to an index.html file.",
        choices: ["True", "False"],
        answerChoice: 0,
    },
    {
        question: "There are 3 different ways to write a function in Javascript.",
        choices: ["True", "False"],
        answerChoice: 0,
    },
    {
        question: "The five primitive data types in Javascript are Number, String, Symbol, Undefined, and Null.",
        choices: ["True", "False"],
        answerChoice: 0,
    },
    {
      question: "In Javascript Undefined, Undeclared, and Null are all the same.",
      choices: ["True", "False"],
      answerChoice: 0
    },
    {
      question: "The DOM stands for Document Object Model.",
      choices: ['True', 'False'],
      answerChoice: 0
    }];
  

    //This will start the game timer and populate the questions.
function startGame() {
     
    setInterval(function() {
        timer-- ;    
        document.getElementById('timer').textContent = timer;
        if (timer === 0) {}       
    }, 1000)
};

// Update timer 
startButton.addEventListener("click", startGame);
element.addEventListener("click", function() {
    document.getElementById(".letsPlay").quizTime = true;
    return;
  }); 
    
    // function quizTime = 
