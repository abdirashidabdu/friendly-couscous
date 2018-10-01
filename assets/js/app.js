// establish the global variables for the trivia game ... 
var gameTimer = 20;
var score = 0;
var questionNumber = 0;
//--------------------------------------------------------------------------
// "trivia" Array with each question as an object including the correctAnswer function and postAnswer function 
var trivia = [
    {
        question: "Who was the #1 draft pick in 2003?",
       	answerOption1: "Lebron James",
      	answerOption2: "Chris Bosh",
      	answerOption3: "Carmelo Anthony",
      	answerOption4: "Dwayne Wade",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answersArea').html('<h4>The #1 draft pick in 2003 was Lebron James</h4>'+ '<img class="img-thumbnail" src="assets/images/lebron.jpg" />');
        $('imageArea').html('<img src="assets/images/lebron.jpg" />')
        }
      },

    {
        question: "What team holds the record for the most consecutive NBA titles?",
       	answerOption1: "Minneapolis/Los Angeles Lakers",
      	answerOption2: "Chicago Bulls",
      	answerOption3: "Philadelphia/San Francisco/Golden State Warriors",
      	answerOption4: "Boston Celtics",
      	correctAnswer: function(){return this.answerOption4},
        postAnswer: function(){
          $('#answersArea').html('<h4>The Boston Celtics hold the record for the most consecutive NBA titles</h4>'+ '<br>' + '<img src="assets/images/celtics.gif"/>');
        }
      },

    {
        question: "What player scored the most points in one game?",
       	answerOption1: "Wilt Chamberlain",
      	answerOption2: "Kobe Bryant",
      	answerOption3: "Michael Jordan",
      	answerOption4: "David Thompson",
      	correctAnswer: function(){return this.answerOption1},
        postAnswer: function(){
          $('#answersArea').html('<h4>Wilt Chamberlain has the record for the most points scored in a single game leading at 100 points.</h4>'+ '<br>' + '<img src="assets/images/Wilt100.jpg" />');
        }
      },

    {
        question: "Who won the most career NBA championships as player?",
       	answerOption1: "Sam Jones",
      	answerOption2: "Bill Russell",
      	answerOption3: "K. C. Jones",
      	answerOption4: "Tom Heinsohn",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answersArea').html('<h4>Bill Russell has the most career NBA championships leading at 11 championships. </h4>'+'<img src="assets/images/russell.jpg" />');
        }
      },

    {
        question: "Who is the undisputed greatest NBA Player of All Time",
       	answerOption1: "Kobe Bryant",
      	answerOption2: "Michael Jordan",
      	answerOption3: "Lebron James",
      	answerOption4: "Bill Russell",
      	correctAnswer: function(){return this.answerOption2},
        postAnswer: function(){
          $('#answersArea').html('<h4>The most popular opinion (almost fact) is that Michael Jordan is the greatest NBA player of all time.</h4>'+ '<br>' +'<img src="assets/images/jordan.jpg" />');

        }
      },
  ];
    
//------------------------------------------------------------------
// function to end the game "endGame"
function endGame (){
  //use Jquery stop method
  stop();
    //players total score 
    $('#answersArea').html("<h4>Final Score: " + score + "/5" + "</h4>");


    //Try again? 
    $("#answersArea").append("<div class='row'>"+
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='start'>"+"Try Again"+"</button>"+
        "</div>");
    
}
//------------------------------------------------------------------
// if else function to determine if game is over or onto next question 
//function "nextQuestion"
function nextQuestion (){
  clearInterval(showQuestion)
   if (questionNumber==5){
    endGame();
  }  
  else {
  //selects next question from trivia array 
  $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  //insert the answer buttons 
  $("#answersArea").html(
        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        );
  run();
  };
}
//-------------------------------------------------------------------

function afterAnswer (){
  //setInterval to set amount of time before "nextQuestion" 
    //define showQuestion ... interval + nextQuestion
  showQuestion = setInterval(nextQuestion, 5000);
  questionNumber++;
}

function stop(){
  //clearInterval to "stop" timer
  clearInterval(counter);
    }

//--------------------------------------------------------------------
// if else function to check if players answer is correct for each question 
var checkAnswer1 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption1 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
  }else{
  }

  afterAnswer();

}

var checkAnswer2 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption2 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
  }else{
  }
  afterAnswer();

}

var checkAnswer3 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption3 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
  }else{
  }
  afterAnswer();

}

var checkAnswer4 = function(){
  stop();
  trivia[questionNumber].postAnswer();
  if (trivia[questionNumber].answerOption4 == trivia[questionNumber].correctAnswer()) {
    score= score + 1;
    document.getElementById('score').innerHTML = (score)
    
  }else{
  }
  afterAnswer();

}
// ----------------------------------------------------------------
// creating the timer functions

function run(){
  //setInterval to set amount of time for "gameTimer" 
    gameTimer=20;
      counter = setInterval(increment, 1000);
    }
function increment(){
    gameTimer--
    document.getElementById('timer').innerHTML = ('<h6>' + gameTimer + '</h6>')
      if (gameTimer === 0){
        stop();
        afterAnswer();
        trivia[questionNumber].postAnswer();
      }
    }

//----------------------------------------------------------------
//Gets the game started function "startGame"
var startGame = function(){
      score = 0;
      questionNumber = 0;
      run();

   $("#question").html("<h3>" + trivia[questionNumber].question + "</h3>");
  $("#answersArea").html(
    

        
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer1'>" + trivia[questionNumber].answerOption1 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer2'>" + trivia[questionNumber].answerOption2 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer' id='answer3'>" + trivia[questionNumber].answerOption3 + "</button></div>" + 
        "<div class='row'>" + 
          "<button type='button' class='btn btn-secondary btn-lg btn-block answer'id='answer4'>" + trivia[questionNumber].answerOption4 + "</button></div>"
        ); 
}

//------------------------------------------------------
//On clicks 

//on click run function startGame 
$(document).on('click', '#start', function(){
  startGame();
  })

// on click run function checkAnswer for each 
$(document).on('click','#answer1', function(){
  checkAnswer1();
  })

$(document).on('click','#answer2', function(){
  checkAnswer2();
  })

$(document).on('click','#answer3', function(){
  checkAnswer3();
  })

$(document).on('click','#answer4', function(){
  checkAnswer4();
  })