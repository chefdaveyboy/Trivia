// Create base variables.
var correctAnswers = 0;

var incorrectAnswers = 0;

var question = 0;

var count = 16;

var counter;

var userGuess;


// Create questions in an array.  
var quizQuestions = [
    // For each question create an object.
        // Question: "string"
        // Answers: [Array]
        // Correct Answer: Array Index
    {
        question: "What is the U.S.S. Enterprise's registry number?",
        options: ["NCC-1701", "NCC-1071", "NX-01", "NCC-1700"],
        correctAnswer: "NCC-1701"
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
];


// On click function that begins the quiz.
$("#start-button").on("click", function(){
   //clicking the button hides instructions.
    $("#main-info").hide();
    //clicking the button also starts a 30 second timer and starts the game.
    counter = setInterval(timer, 1000);
    //runs the game function.
    triviaGame();
    

})
//Timer function
function timer() {
    count--;
    $("#timer").html("Time Left: " + count);
    if (count ===0) {
        incorrectAnswers++;
        $("#question-div").hide();
        $("#options-div").hide();
        $("#timer").hide();
        var correctAnswer = quizQuestions[0].correctAnswer;
        var timeoutMsg = $("<div>");
        timeoutMsg.addClass("timeout-msg");
        $("#information").html(timeoutMsg);
        $(".timeout-msg").text("Uh-oh! You ran out of time.. The correct answer is: " + correctAnswer);
        clearTimer();
        }
    //Have it show the time in the HTML    
    
}

function clearTimer() {
    clearInterval(counter);
}

// Create the Game Function.
function triviaGame() {
    //shows the current question.
    $("#question-div").text(quizQuestions[0].question);
    question++;
    //create a variable for the answer options.
    var optionsArr = quizQuestions[0].options;
    
   
    //Loop through the option array.
    for (i =0; i < optionsArr.length; i++) {
        var button = $("<button>");
        //create a button for every option in the array.
        button.text(optionsArr[i]);
        //give buttons data- attribute
        button.attr("data-guess", optionsArr[i]);
        //add class to buttons
        $(button).addClass("button-guess");
        //display the options as buttons in the html.
        $("#options-div").append(button);
       console.log(optionsArr[i]);
    }
    //create an on click event for the answer buttons.
    $("#options-div").on("click", ".button-guess", function() {
        var userGuess = $(this).data("guess");
        var correctAnswer = quizQuestions[0].correctAnswer;
        console.log(correctAnswer);
        console.log(userGuess);
        if( userGuess === correctAnswer) {
            correctAnswers++;
            $("#question-div").hide();
            $("#options-div").hide();
            $("#timer").hide();
            var correctMsg = $("<div>");
            correctMsg.addClass("correct-msg");
            $("#information").html(correctMsg);
            $(".correct-msg").text("Congratulations! The correct answer is: " + correctAnswer);
            clearTimer();
            console.log("Right Answer!");
            
        }
        else {
            incorrectAnswers++;
            $("#question-div").hide();
            $("#options-div").hide();
            $("#timer").hide();
            var wrongMsg = $("<div>");
            wrongMsg.addClass("wrong-msg");
            $("#information").html(wrongMsg);
            $(".wrong-msg").text("Wrong! The correct answer is: " + correctAnswer);
            clearTimer();
            console.log("Wrong Answer!");
        }
    })
}

function newQuestion () {
    $
}


        





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


