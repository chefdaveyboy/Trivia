




// Create questions in an array.  
var quizQuestions = [
    // For each question create an object.
        // Question: "string"
        // Answers: [Array]
        // Correct Answer: Array Index
    {
        question: "What is the U.S.S. Enterprise's registry number?",
        options: ["NCC-1701", "NCC-1071", "NX-01", "NCC-1700"],
        correctAnswer: "NCC-1701",
        // image:
    },
    {
        question: "In the episode Trouble with Tribbles, why did Scotty start a fight with the Klingons?",
        options: ["They called humans Regulan Blood Worms!", "They called Captain Kirk a Denebian Slime Devil!", "They said the Enterprise should be hauled away as garbage!", "Trick Question. The Klingons started the fight!"],
        correctAnswer: "They said the Enterprise should be hauled away as garbage!"
    },
    
    {
        question: "What is Chief Engineer Mr. Scott(aka 'Scotty')'s First Name?",
        options: ["Edward", "Marcus", "Geordi", "Montgomery"],
        correctAnswer: "Montgomery"
    },
    {
        question: "What was Spock's blood type?",
        options: ["X positive", "T negative", "AZ positive", "O negative"],
        correctAnswer: "T negative"
    },
    {
        question: "In the episode 'Arena', Kirk is forced into combat with the Gorn.  He makes gunpowder using 3 elements he finds on the planet.  Which of these is NOT one of those elements?",
        options: ["Dilithium", "Coal", "Potassium Nitrate", "Sulfur"],
        correctAnswer: "Dilithium"
    },
    {
        question: "What is Uhura's Job on the Enterprise?",
        options: ["Chief Engineer", "Communications Officer", "Captain's Yeoman", "Security Officer"],
        correctAnswer: "Communications Officer"
    },
    {
        question: "The actress that played Nurse Chapel(Majel Barrett) was married to William Shatner in real life.",
        options: ["True", "False"],
        correctAnswer: "False",
        
    },

    
];

// Create base variables.
var correctAnswers = 0;

var incorrectAnswers = 0;

var count = 21;

var counter;

var userGuess;

var current = 0;

//Sound effects and music variables.
var backgroundSound = new Audio("assets/music/bridge-background.mp3");
var rightSound = new Audio("assets/music/computer-sound-1.mp3");
var wrongSound = new Audio("assets/music/computer-sound-3.mp3");
var timeSound = new Audio("assets/music/time-left.wav");
var timoutSound = new Audio("assets/music/dah-duh-duh.wav");
var endSound = new Audio("assets/music/ClosingCredits.mp3");

// On click function that begins the quiz.
$("#start-button").on("click", function(){
   //clicking the button hides instructions.
    $("#main-info").hide();
    //Plays sound when button is clicked.
    backgroundSound.play();
    //clicking the button also starts a timer and starts the game.
    counter = setInterval(timer, 1000);
    //runs the game function.
    triviaGame();
    

});
//Timer function
function timer() {
    count--;
    $("#timer").html("Time Left: " + count);
    if (count ===5) {
        timeSound.play();
    }
    if (count ===0) {
        timoutSound.play();
        incorrectAnswers++;
        //hide the displaying divs
        $("#question-div").hide();
        $("#options-div").hide();
        $("#timer").hide();
        //re-establish the correctA variable. 
        var correctA = quizQuestions[current].correctAnswer;
        //creates timewoutMsg div
        var timeoutMsg = $("<div>");
        timeoutMsg.addClass("timeout-msg");
        //displays the text
        $("#information").html(timeoutMsg);
        $(".timeout-msg").text("Uh-oh! You ran out of time.. The correct answer is: " + correctA);
        $(".timeout-msg").append("<br>" + "<br>" + "<img src='assets/images/time-out.webp' width='500px'>");
        //clears the timer.
        clearTimer();
        //after 3 seconds it starts a new question.
        setTimeout(newQuestion, 3000);
        
        };
    //Have it show the time in the HTML    
    
};

function clearTimer() {
    clearInterval(counter);
};

// Create the Game Function.
function triviaGame() {
    //shows the current question.
    $("#question-div").text(quizQuestions[current].question);
    
    //create a variable for the answer options.
    
    var optionsArr = quizQuestions[current].options;
    
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
        $("#options-div").show();
        console.log(optionsArr[i]);
    };
    
    //create an on click event for the answer buttons.
    // .off fixes the problem of question/answer increase.
    $("#options-div").off("click").on("click", ".button-guess", function() {
        //refers to the button that was clicked
        var userGuess = $(this).data("guess");
        //finds the correct answer of the [current] correct answer and sets it to var correctA
        var correctA = quizQuestions[current].correctAnswer;
        console.log(correctA);
        console.log(userGuess);
        if( userGuess === correctA) {
            rightSound.play();
            //update the correct answer variable
            correctAnswers++;
            //hide current info on display
            $("#question-div").hide();
            $("#options-div").hide();
            $("#timer").hide();
            //create a div
            var correctMsg = $("<div>");
            correctMsg.addClass("correct-msg");
            //display congratulations screen
            $("#information").html(correctMsg);
            $(".correct-msg").text("Congratulations! The correct answer is: " + correctA);
            $(".correct-msg").append("<br>" + "<br>" + "<img src='assets/images/Happy.webp' width='500px'>");
            clearTimer();
            //show correct answer and if the player got it right. (show for 3 seconds).
            setTimeout(newQuestion, 3000);
            
            
        }
        else if(userGuess != correctA) {
            wrongSound.play();
            //update the correct answer variable
            incorrectAnswers++;
            //hide current info on display
            $("#question-div").hide();
            $("#options-div").hide();
            $("#timer").hide();
            //create a div
            var wrongMsg = $("<div>");
            wrongMsg.addClass("wrong-msg");
            //display congratulations screen
            $("#information").html(wrongMsg);
            $(".wrong-msg").text("Wrong! The correct answer is: " + correctA);
            $(".wrong-msg").append("<br>" + "<br>" + "<img src='assets/images/Wrong.webp' width='500px'>");
            clearTimer();
            //show correct answer and if the player got it right. (show for 3 seconds).
            setTimeout(newQuestion, 3000);
            
            
        };
    });

    
};

 
        
//move on the the next question and reset the timer.        
function newQuestion () {
    current++;
    
    if (current === quizQuestions.length) {
        backgroundSound.pause();
        endSound.play();
        clearDiv();
        clearTimer();
        //write the updated score to the HTML.
        $("#scoreboard").text("Correct Answers: " + correctAnswers);
        $("#scoreboard").append("<br>" + "Incorrect Answers: " + incorrectAnswers);
        $("#scoreboard").append("<br>" + "Thanks for playing! If you got less than 5 right, you definitely need to watch more Star Trek.  If you got more more than 5 right, you are a true Trekker!  Celebrate by grabbing a Romulan Ale and watching some Star Trek!");
        $("#scoreboard").append("<br>" + "<br>" + "Top 10 Star Trek Episodes: " + "<a href='https://www.youtube.com/watch?v=Fmn4FXXnIc4&list=PLN-VkgdpDxSK467YsydEHx1XZcuoQhTJX' target='_blank'>YOUTUBE</a>")
        $("#scoreboard").append("<br>" + "<br>" + "<img src='assets/images/ent-zoom.webp' width='500px'>");
        // var restartButton = ("<button>");
        // $(restartButton).addClass("restart-button");
        // $(".restart-button").text("Restart");
        // $("#scoreboard").append("<br>" + "<br>" + restartButton);
        
    }
    else {
        count=21;
        clearDiv();
        $("#timer").show();
        $("#question-div").show();
        $("#options-div").show();    
        counter=setInterval(timer, 1000);
        triviaGame();
    }
    


    
    
};

function clearDiv () {
    $(".correct-msg").hide();
    $(".wrong-msg").hide();
    $(".timeout-msg").hide();
    $("#options-div").each(function() {
        $(this).text("");
        });
    
};




        







   






