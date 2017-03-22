var timeLeft = 5;
var correct = 0;
var wrong = 0;
var correctAnswer;
var questionOne = false;
var questionTwo = false;
var questionThree = false;
var questionFour = false;
var questionFive = false;



$(".startButton").on("click", firstQuestion);



function run() {
   clock = setInterval(decrement, 1000);
}

function decrement() {

    timeLeft--;

    $(".headers").html("<h3>Time Left: " + timeLeft + "</h3>");

    if (timeLeft === 0) {
        outOfTime();
    }

}
function firstQuestion() {
    run();
    $(".content").html("<h2>Which player has scored the most points for the Charlotte Hornets?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton kemba">Kemba Walker</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton gerald">Gerald Wallace</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton dell">Dell Curry</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton muggsy">Muggsy Bogues</button></p>');
    correctAnswer = "Dell Curry!";
    questionOne = true;
    $(".dell").on("click",correctChoice);
    $(".gerald").on("click",wrongChoice);
    $(".kemba").on("click",wrongChoice);
    $(".muggsy").on("click",wrongChoice);


}

function secondQuestion() {
    run();
    $(".content").html("<h2>Which Charlotte Hornets player holds the record for the longest shot in NBA history?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton gerald">Gerald Wallace</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton baron">Baron Davis</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton glen">Glen Rice</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton muggsy">Muggsy Bogues</button></p>');
    correctAnswer = "Baron Davis!";
    questionTwo = true;
    $(".baron").on("click",correctChoice);
    $(".gerald").on("click",wrongChoice);
    $(".glen").on("click",wrongChoice);
    $(".muggsy").on("click",wrongChoice);


}

function thirdQuestion() {
    run();
    $(".content").html("<h2>Who is the Charlotte Hornet's Mascot?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton sir">Sir Purr</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton queen">Queen Bee</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton sting">Mr. Sting</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton hugo">Hugo</button></p>');
    correctAnswer = "Hugo!";
    questionThree = true;
    $(".hugo").on("click",correctChoice);
    $(".queen").on("click",wrongChoice);
    $(".sting").on("click",wrongChoice);
    $(".sir").on("click",wrongChoice);


}

function fourthQuestion() {
    run();
    $(".content").html("<h2>What is the nickname of the Hornet's arena?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton palace">The Palace</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton hive">The Hive</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton garden">The Garden</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton mj">The House MJ Built</button></p>');
    correctAnswer = "The Hive!";
    questionFour = true;
    $(".hive").on("click",correctChoice);
    $(".palace").on("click",wrongChoice);
    $(".garden").on("click",wrongChoice);
    $(".mj").on("click",wrongChoice);


}

function fifthQuestion() {
    run();
    $(".content").html("<h2>What University did Charlotte Hornet's All Star Kemba Walker win a NCAA National Championship at?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton uconn">University of Connecticut</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton chapel">UNC Chapel Hill</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton charlotte">UNC Charlotte</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton kentucky">University of Kentucky</button></p>');
    correctAnswer = "University of Connecticut!";
    questionFive = true;
    $(".uconn").on("click",correctChoice);
    $(".chapel").on("click",wrongChoice);
    $(".charlotte").on("click",wrongChoice);
    $(".kentucky").on("click",wrongChoice);


}


function outOfTime() {
    $(".headers").html("<h3>You ran out of time! The correct answer is " + correctAnswer + "</h3>");
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/mjtime.png" alt="MJ Time Pic">')
    wrong++;
    timeLeft = 15;
    setTimeout(function(){
        if (questionTwo === false) {
            secondQuestion();
        }
        else if(questionThree === false) {
            thirdQuestion();
        }
        else if(questionFour === false) {
            fourthQuestion();
        }
        else if(questionFive === false) {
            fifthQuestion();
        }
        else {
            results();
    }   }, 1000 * 3);

}

function correctChoice() {
    $(".headers").html("<h3>You are correct! The correct answer is " + correctAnswer + "</h3>");
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/kembawalker.jpg" alt="Kemba Walker">')
    correct++;
    timeLeft = 15;
    setTimeout(function(){
        if (questionTwo === false) {
            secondQuestion();
        }
        else if(questionThree === false) {
            thirdQuestion();
        }
        else if(questionFour === false) {
            fourthQuestion();
        }
        else if(questionFive === false) {
            fifthQuestion();
        }
        else {
            results();
    }   }, 1000 * 3);
}

function wrongChoice() {
    $(".headers").html("<h3>You are incorrect! The correct answer is " + correctAnswer + "</h3>");
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/marvin.jpeg" alt="Marvin Williams">');
    wrong++;
    timeLeft = 15;
    setTimeout(function(){
        if (questionTwo === false) {
            secondQuestion();
        }
        else if(questionThree === false) {
            thirdQuestion();
        }
        else if(questionFour === false) {
            fourthQuestion();
        }
        else if(questionFive === false) {
            fifthQuestion();
        }
        else {
            results();
    }   }, 1000 * 3);
}

function results() {
    $(".headers").html("<h2>Your Results!</h2>" +
                       "<h3>Correct: " + correct + "</h3>" +
                       "<h3>Incorrect: " + wrong + "</h3>" +
                       '<p><button type="button" class="btn btn-danger optionButton startOver">Restart</button></p>');
    $(".startOver").on("click",restart);
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/goggles.jpg" alt="Marvin Goggles">')
}

function restart() {
    timeLeft = 15;
    correct = 0;
    wrong = 0;
    questionOne = false;
    questionTwo = false;
    questionThree = false;
    questionFour = false;
    questionFive = false;
    firstQuestion();
}