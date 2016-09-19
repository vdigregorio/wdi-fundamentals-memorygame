console.log()

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

if (cardOne === cardThree) {
    alert("You have a match!");
} else {
    alert("Sorry, try again.");
}

if (cardTwo === cardFour) {
    alert("You have a match!");
} else {
    alert("Sorry, try again.");
}

var gameBoard = document.getElementById("game-board");
//not sure about for loops, confusing!
