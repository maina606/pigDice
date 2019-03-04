// ****************************Busines Logic *******************************
var player1 = player1;
var player2 = player2;

function dice() {
  return Math.floor(Math.random()*6) + 1;
}

//constructor - blueprint
function dicePlayer(player, rollScore, score, tScore, color){
  this.player = player;
  this.rollScore = rollScore;
  this.score = 0;
  this.tScore = 0;
  this.color = color;
}

// Instances - of the object
// var player1 = new dicePlayer("player1", score1, tScore1, light blue);
// var player2 =  new dicePlayer("player2", score2, tScore2, dark blue);

//Prototypes
dicePlayer.prototype.rollTheDamnThing = function() {
  if (this.rollScore === 1) {
    this.score = 0;
    $('#diceRollPlayer2').toggle();
    $('#diceRollPlayer1').toggle();
  } else {
    this.score += this.rollScore;
  }
}
dicePlayer.prototype.holdPlease = function() {
  this.tScore += this.score;
  this.score = 0;
}
dicePlayer.prototype.winner = function() {
  if (this.tScore >= 100) {
    alert("Congratulations! The winner is " + this.name + "!");
  }
}
/* ************************* Algorithm ****************************

if (dicePlayer1 = true && roll = 1){
  then: alert('Sorry, you rolled a 1, thus back to 0');
  Reset score = 0;
} else {
  dicePlayer1:
      color theme = dark blue;
      print the rolled numbers on the Chart score;
      Update the total score;
}

if(dicePlayer1 = true && roll(for(i=2;i=6;i++)) ){   (as in roll bwn 2 and 6)
    then:
      color theme = light blue;
      print the rolled numbers on the Chart score;
      Update the total score;
} else {
    (dicePlayer2 = true && roll(for(i=2;i=6;i++)) )
    color theme = dark blue;
    print the rolled numbers on the Chart score;
    Update the total score;
}

if(dicePlayer1 && hold button = true){
  then: dicePlayer2 = true;
} else {
    dicePlayer2 = false;
}

*/

// ******************************User Interface Logic ******************************
/*
function dice() {
  return Math.floor(Math.random()*6) + 1;
}

$(document).ready(function(){
 $("#diceRollPlayer1").click(function() {
 var result = dice();

 //Prints dice roll to the page
 function printNumber(number) {
   var diceMaker = document.getElementById("diceMaker");
   diceMaker.innerHTML = number;
 }

 printNumber(result);
 document.getElementById("p1Scored").innerHTML= result;


 event.preventDefault();
   });
 });
*/

$(document).ready(function(event){
  $("#diceRollPlayer1").click(function(event) {
    event.preventDefault();
    player1.rollScore = dice();
    $("#p1Rolled").empty()
    $("#p1Total").empty()
    $("#p1Rolled").append("Dice rolled: " + player1.rollScore);
    player1.rollTheDamnThing();
    $("#p1Total").append("Your current score is: " + player1.score);
  });
  $("#diceRollPlayer2").click(function() {
    event.preventDefault();
    player2.rollScore = rollScore();
    $("#p2Rolled").empty()
    $("#p2Total").empty()
    $("#p2Rolled").append("Dice rolled: " + player2.rollScore);
    player2.rollTheDamnThing();
    $("#p1Total").append("Your current score is: " + player2.score);
  });
  $(hold).click(function(event) {
  event.preventDefault();
  if ($("#diceRollPlayer1").is(':visible')) {
    player1.holdPlease();
    $("#p1Rolled").empty();
    $("#p1Total").empty();
    $("#p1Total").append("Total Score for "+player1.name+" is: " + player1.tScore);
    $(".tScore").empty();
    $('#diceRollPlayer2').toggle();
    $('#diceRollPlayer1').toggle();
    player1.winner();
  } else {
    player2.holdPlease();
    $("#p2Rolled").empty();
    $("#p1Total").empty();
    $("#p1Total").append("Total Score for "+player2.name+" is: " + player2.tScore);
    $(".tScore").empty();
    $("#diceRollPlayer2").toggle();
    $("#diceRollPlayer1").toggle();
    player2.winner();
  }
});
});
