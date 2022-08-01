//Building the coding quiz with 15 True or False questions, giving the user 1:30 of time to complete.
//list of variables that will change with user input using jquery ar first.
var questions = document.getElementsByClassName(".questions");
var startTime = document.getElementById("#quizTime");
var startButton = document.getElementsByClassName(".letsPlay");

//the variable below will include the questions to be asked(10)in total.
var knowledge = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
//Questions: listed below as individual variables.
var q1 = "1. Git has five different branch types in total.";
var q2 = "2. \"git init\", \"git status\", and \"git report\" are all Git commands.";
var q3 = "3. All HTML TAGS require opening and closing tags.";
var q4 = "4. All CSS stylesheets require a standalone file linked to an index.html file.";
var q5 = "5. There are 3 ways to write a function in Javascript.";
var q6 = "6. Attributes are properties added to HTML tags that change the way the tag behaves or displays.";
var q7 = "7. There are 3 methods for incorporating CSS into HTML.";
var q8 = "8. The five primitive data types in Javascript are Number, String, Symbol, Undefined, and Null.";
var q9 = "9. In Javascript Undefined, Undeclared, and Null are all the same.";
var q10 = "10. The DOM stands for Document Object Model.";

//answer Key: 
//1(T)2(f)3(f)4(f)5(t)6(t)7(t)8(f)9(f)10(t)
q1 = true;
q2 = false;
q3 = false;
q4 = false;
q5 = true;
q6 = true;
q7 = true;
q8 = false;
q9 = false;
q10 = true;

var highscore;
var timesUp;
// prompt(" Time's Up! Enter your initials "); use this in the quiz time function or the game ending function. 

//list of empty variables to be filled by user input.
var isWrong = false;
var timer = 6;
var timesOut = "00";
var userWins;
var userLoses;

// var quizTime = "";


//     // Use this to decrement time for deduction on wrong answer
//     if (timer === 60) {
//       timer--;
//       this.timer -= 1;
//     if (this.timer < 0) {
//         this.timer = 0;    
//     }
//     }
//   });
  
// startButton.addEventListener("click", startGame);
// element.addEventListener("click", function() {
//     document.getElementById(".letsPlay").quizTime = true;
//     return;
//   }); 


//This function is the 60 second timer
// var quizTime = setInterval(function() {
//     document.getElementById('timer').hidden = false;
//     timer--;
//     if (timer === 0) {
//         clearInterval( timer >=0);  
//         document.getElementById('timer').innerHTML = "Finished!";
//         return;
//         }
    
// }, 1000);



//This will start the game timer and populate the questions.
function startGame() {
    document.getElementById('timer').hidden = false;
    setInterval(function() {
        timer-- ;    

        if (timer === 0)        
    }, 1000)
};

//This function will load the page code - needs refrnce to 2 
// function init() {
//     userWins();
//     userLoses();
// };
