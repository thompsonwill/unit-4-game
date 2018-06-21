$(document).ready(function() {

//Setting up variables to create our computer's random number function
var minNumber = 0;
var maxNumber = 0;
var randomNumber = 0;


//Creates our random number for the computer's
function randomNumberFromRange(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}



// Puts our random number in the document.
$("#random-number").text(randomNumber);

//Setting up the variables for functionality
var userScore = "";
var userWins = 0;
var userLoss = 0;

//Setting up the crystal's random numbers
var crysMinNum = "";
var crysMaxNum = "";

//Store the random numbers in variables
var crysRandomNum1 = "";
var crysRandomNum2 = "";
var crysRandomNum3 = "";
var crysRandomNum4 = "";

//Generate our crystal's random number
function randomNumberFromRange(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}


//Initialize the game
function initializeGame() {
  userNum = 0;
  userScore = 0;
  minNumber = 9;
  maxNumber = 120;
  randomNumber = randomNumberFromRange(minNumber, maxNumber);
  $("#random-number").text(randomNumber);
  $("#user-score").text(userScore);


  crysMinNum = 1;
  crysMaxNum = 12;
  crysRandomNum1 = randomNumberFromRange(crysMinNum, crysMaxNum);
  crysRandomNum2 = randomNumberFromRange(crysMinNum, crysMaxNum);
  crysRandomNum3 = randomNumberFromRange(crysMinNum, crysMaxNum);
  crysRandomNum4 = randomNumberFromRange(crysMinNum, crysMaxNum);
  console.log("Crystal 1 - " + crysRandomNum1);
  console.log("Crystal 2 - " + crysRandomNum2);
  console.log("Crystal 3 - " + crysRandomNum3);
  console.log("Crystal 4 - " + crysRandomNum4);
}
//Displying the crystals number on the document. Oh boy this is ugly.
//Find out how to make this into a function. It's crazy convoluted right now. 

initializeGame();


$("#crystal1").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum1;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
    $("#gameStatus").text("You Win!");
    userWins ++;
  $("#userWins").text(userWins);
  initializeGame();
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You Lose!");
    initializeGame();
    userLoss++;
    $("#userLoss").text(userLoss);
  }
});

$("#crystal1").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum1;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
    $("#gameStatus").text("You Win!");
    userWins ++;
  $("#userWins").text(userWins);
  initializeGame();
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You Lose!");
    initializeGame();
    userLoss++;
    $("#userLoss").text(userLoss);
  }
});

$("#crystal2").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum2;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
    $("#gameStatus").text("You Win!");
    userWins ++;
  $("#userWins").text(userWins);
  initializeGame();
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You Lose!");
    initializeGame();
    userLoss++;
    $("#userLoss").text(userLoss);
  }
});

$("#crystal3").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum3;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
    $("#gameStatus").text("You Win!");
    userWins ++;
  $("#userWins").text(userWins);
  initializeGame();
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You Lose!");
    initializeGame();
    userLoss++;
    $("#userLoss").text(userLoss);
  }
});

$("#crystal4").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum4;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
    $("#gameStatus").text("You Win!");
    userWins ++;
  $("#userWins").text(userWins);
  initializeGame();
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You Lose!");
    initializeGame();
    userLoss++;
    $("#userLoss").text(userLoss);
  }
});

});