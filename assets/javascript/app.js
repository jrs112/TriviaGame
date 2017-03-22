var timeLeft = 16;
var correct = 0;
var incorrect = 0;
var correctAnswer;
var correctImage;
var questionOne = false;
var questionTwo = false;
var questionThree = false;
var questionFour = false;
var questionFive = false;
var questionSix = false;
var questionSeven = false;
var questionEight = false;
var questionNine = false;
var questionTen = false;



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
    setTimeout(function(){
        $(".content").html("<h2>Which player has scored the most points for the Charlotte Hornets?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton kemba">Kemba Walker</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton gerald">Gerald Wallace</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton dell">Dell Curry</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton muggsy">Muggsy Bogues</button></p>');
    correctAnswer = "Dell Curry!";
    correctImage = "curry.jpg";
    questionOne = true;
    $(".dell").on("click",correctChoice);
    $(".gerald").on("click",wrongChoice);
    $(".kemba").on("click",wrongChoice);
    $(".muggsy").on("click",wrongChoice);
    }, 1000);
}

function secondQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>Which Charlotte Hornets player holds the record for the longest shot in NBA history?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton gerald">Gerald Wallace</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton baron">Baron Davis</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton glen">Glen Rice</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton muggsy">Muggsy Bogues</button></p>');
    correctAnswer = "Baron Davis!";
    correctImage = "baron.jpg";
    questionTwo = true;
    $(".baron").on("click",correctChoice);
    $(".gerald").on("click",wrongChoice);
    $(".glen").on("click",wrongChoice);
    $(".muggsy").on("click",wrongChoice);
    }, 1000);
}

function thirdQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>Who is the Charlotte Hornet's Mascot?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton sir">Sir Purr</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton queen">Queen Bee</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton sting">Mr. Sting</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton hugo">Hugo</button></p>');
    correctAnswer = "Hugo!";
    correctImage = "hugo.jpg";
    questionThree = true;
    $(".hugo").on("click",correctChoice);
    $(".queen").on("click",wrongChoice);
    $(".sting").on("click",wrongChoice);
    $(".sir").on("click",wrongChoice);
    }, 1000);
}

function fourthQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>What is the nickname of the Hornet's arena?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton palace">The Palace</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton hive">The Hive</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton garden">The Garden</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton mj">The House MJ Built</button></p>');
    correctAnswer = "The Hive!";
    correctImage = "hive.jpg";
    questionFour = true;
    $(".hive").on("click",correctChoice);
    $(".palace").on("click",wrongChoice);
    $(".garden").on("click",wrongChoice);
    $(".mj").on("click",wrongChoice);
    }, 1000);
}

function fifthQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>What University did Charlotte Hornet's All Star Kemba Walker win a NCAA National Championship at?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton uconn">UCONN</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton chapel">UNC Chapel Hill</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton charlotte">UNC Charlotte</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton kentucky">University of Kentucky</button></p>');
    correctAnswer = "University of Connecticut!";
    correctImage = "kembawalker.jpg";
    questionFive = true;
    $(".uconn").on("click",correctChoice);
    $(".chapel").on("click",wrongChoice);
    $(".charlotte").on("click",wrongChoice);
    $(".kentucky").on("click",wrongChoice);
    }, 1000);
}

function sixthQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>How many points do the Hornets need to score in order for fans to get 50% off of Papa Johns the next day?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton oneHundredFive">105 Points</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton ninety">90 Points</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton oneHundred">100 Points</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton ninetyFive">95 Points</button></p>');
    correctAnswer = "95 Points!";
    correctImage = "pizzaone.jpg";
    questionSix = true;
    $(".ninetyFive").on("click",correctChoice);
    $(".oneHundredFive").on("click",wrongChoice);
    $(".oneHundred").on("click",wrongChoice);
    $(".ninety").on("click",wrongChoice);
    }, 1000);
}

function seventhQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>Who is the majority owner of the Charlotte Hornets?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton nellie">Nellie</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton michael">Michael Jordan</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton george">George Shinn</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton larry">Larry Brown</button></p>');
    correctAnswer = "Michael Jordan!";
    correctImage = "jordan.jpg";
    questionSeven = true;
    $(".michael").on("click",correctChoice);
    $(".nellie").on("click",wrongChoice);
    $(".george").on("click",wrongChoice);
    $(".larry").on("click",wrongChoice);
    }, 1000);
}

function eigthQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>What is the name of the Charlotte Hornets Cheerleaders?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton queenBees">The Queen Bees</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton theSting">The Sting</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton lady">The Lady Hornets</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton honey">The Honey Bees</button></p>');
    correctAnswer = "The Honey Bees!";
    correctImage = "honey.jpg";
    questionEight = true;
    $(".honey").on("click",correctChoice);
    $(".queenBees").on("click",wrongChoice);
    $(".theSting").on("click",wrongChoice);
    $(".lady").on("click",wrongChoice);
    }, 1000);
}

function ninthQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>What nationality is Nic Batum?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton usa">American</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton canada">Canadian</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton france">French</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton algeria">Algerian</button></p>');
    correctAnswer = "French!";
    correctImage = "french.jpg";
    questionNine = true;
    $(".france").on("click",correctChoice);
    $(".usa").on("click",wrongChoice);
    $(".canada").on("click",wrongChoice);
    $(".algeria").on("click",wrongChoice);
    }, 1000);
}

function tenthQuestion() {
    run();
    setTimeout(function(){
    $(".content").html("<h2>Who is the Charlotte Hornets all-time leader in rebounds?</h2>" +
                        '<p><button type="button" class="btn btn-primary optionButton lj">Larry Johnson</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton al">Al Jefferson</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton anthony">Anthony Mason</button></p>' +
                        '<p><button type="button" class="btn btn-primary optionButton alonzo">Alonzo Morning</button></p>');
    correctAnswer = "Larry Johnson!";
    correctImage = "larry.jpg";
    questionTen = true;
    $(".lj").on("click",correctChoice);
    $(".al").on("click",wrongChoice);
    $(".alonzo").on("click",wrongChoice);
    $(".anthony").on("click",wrongChoice);
    }, 1000);
}


function outOfTime() {
    $(".headers").html("<h2>You ran out of time! The correct answer is " + correctAnswer + "</h2>");
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/mjtime.png" alt="MJ Time Pic">')
    incorrect++;
    timeLeft = 16;
    check();
}

function correctChoice() {
    $(".headers").html("<h2>You are correct! The correct answer is " + correctAnswer + "</h2>");
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/' + correctImage + '"alt="MJ Image">')
    correct++;
    timeLeft = 16;
    check();
}
function wrongChoice() {
    $(".headers").html("<h2>You are incorrect! The correct answer is " + correctAnswer + "</h2>");
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/marvin.jpeg" alt="Marvin Williams">');
    incorrect++;
    timeLeft = 16;
    check();
}
function check() {
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
        else if(questionSix === false) {
            sixthQuestion();
        }
        else if(questionSeven === false) {
            seventhQuestion();
        }
        else if(questionEight === false) {
            eigthQuestion();
        }
        else if(questionNine === false) {
            ninthQuestion();
        }
        else if(questionTen === false) {
            tenthQuestion();
        }
        else {
            results();
    }   }, 1000 * 3);
}
function results() {
    $(".headers").html("<h1>Your Results!</h1>" +
                       "<h2>Correct: " + correct + "</h2>" +
                       "<h2>Incorrect: " + incorrect + "</h2>" +
                       '<p><button type="button" class="btn btn-danger optionButton startOver">Restart</button></p>');
    $(".startOver").on("click",restart);
    clearInterval(clock);
    $(".content").html('<img class="images" src="assets/images/goggles.jpg" alt="Marvin Goggles">')
}

function restart() {
    timeLeft = 16;
    correct = 0;
    incorrect = 0;
    questionOne = false;
    questionTwo = false;
    questionThree = false;
    questionFour = false;
    questionFive = false;
    questionSix = false;
    questionSeven = false;
    questionEight = false;
    questionNine = false;
    questionTen = false;
    firstQuestion();
}

