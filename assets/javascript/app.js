// Create base variables.
var correctAnswers = 0;

var incorrectAnswers = 0;

var question = 0;





// Create questions in an array.  
var quizQuestions = [
    // For each question create an object.
        // Question: "string"
        // Answers: [Array]
        // Correct Answer: Array Index
    {
        question: "What is the U.S.S. Enterprise's registry number?",
        options: ["NCC-1701", "NCC-1071", "NX-01", "NCC-1700"],
        correctAnswer: 0
    },
    {
        question: "In the episode Trouble with Tribbles, why did Scotty start a fight with the Klingons?",
        options: ["They called humans Regulan Blood Worms!", "They called Captain Kirk a Denebian Slime Devil!", "They said the Enterprise should be hauled away as garbage!", "Trick Question. The Klingons started the fight!"],
        correctAnswer: 2
    },
    {
        question: "",
        options: [""],
        correctAnswer: ""
    }
]
    
        

// On click function that begins the quiz.
    //clicking the button also starts a 30 second timer.
    //clicking the button also hides the instructions and replaces it with the question.

//Have it show the time in the HTML

// Create the Game Function.
    //On click events for the answer buttons.
    //if correct answer is clicked +1 to the correct answer variable.
    //if incorrect answer is clicked +1 to incorrect answer variable.
    //if time expires +1 to incorrect answer variable.

    //when a button is clicked or time expires:
        //show correct answer and if the player got it right. (show for about 3-5 seconds).
        //move on the the next question and reset the timer.


//write the updated score to the HTML.
//After running through the entire array.  The game is finished.


