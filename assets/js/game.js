$(document).ready(function() {

//Initialize the game
function initializeGame() {
      userNum = "";
      userScore = "";
      var minNumber = 9;
      var maxNumber = 120;
      var randomNumber = randomNumberFromRange(minNumber, maxNumber);
      $("#random-number").text(randomNumber);
    }

//Setting up variables to create our computer's random number function
var minNumber = 9;
var maxNumber = 120;
var randomNumber = randomNumberFromRange(minNumber, maxNumber);


//Creates our random number for the computer's
function randomNumberFromRange(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(randomNumber);

// Puts our random number in the document.
$("#random-number").text(randomNumber);

//Setting up the variables for functionality
var userScore = 0;
var youWin = false;
var userWins = 0;
var userLoss = 0;

//Displying the crystals number on the document. Oh boy this is ugly.
//Find out how to make this into a function. It's crazy convoluted right now. 

$("#crystal1").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum1;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
  $("#gameStatus").text("You win!");
  youWin = true;
  if (youWin === true){
    userWins ++;
  $("#userWins").text(userWins);
}
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You lose!");
    initializeGame();
  }
});


$("#crystal2").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum2;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
  $("#gameStatus").text("You win!");
  youWin = true;
  if (youWin === true){
    userWins ++;
  $("#userWins").text(userWins);
}
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You lose!");
    initializeGame();
  }
});


$("#crystal3").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum3;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
  $("#gameStatus").text("You win!");
  youWin = true;
  if (youWin === true){
    userWins ++;
  $("#userWins").text(userWins);
}
}
  //Checks if you have lost
  if (userScore > randomNumber) {
    $("#gameStatus").text("You lose!");
    initializeGame();
  }
});


$("#crystal4").on("click", function() {
  //Checks userScore and adds the current value of the crystal
  userScore = userScore + crysRandomNum4;
  $("#user-score").text(userScore);
  //Checking if you win and adds your win to the scoreboard
  if (userScore === randomNumber) {
  $("#gameStatus").text("You win!");
  youWin = true;
  if (youWin === true){
    userWins ++;
  $("#userWins").text(userWins);
}
}
  //Checks if you have lost and adds a loss to userLoss variable
  if (userScore > randomNumber) {
    userLoss ++;
    $("#gameStatus").text("You lose!");
    $("#userLoss").text(userLoss);
  }
});


//Setting up the crystal's random numbers
var crysMinNum = 1;
var crysMaxNum = 12;

//Store the random numbers in variables
var crysRandomNum1 = randomNumberFromRange(crysMinNum, crysMaxNum);
var crysRandomNum2 = randomNumberFromRange(crysMinNum, crysMaxNum);
var crysRandomNum3 = randomNumberFromRange(crysMinNum, crysMaxNum);
var crysRandomNum4 = randomNumberFromRange(crysMinNum, crysMaxNum);

//Generate our crystal's random number
function randomNumberFromRange(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Store the random numbers in variables
console.log(crysRandomNum1);
console.log(crysRandomNum2);
console.log(crysRandomNum3);
console.log(crysRandomNum4);
});