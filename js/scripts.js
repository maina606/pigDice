// ****************************Busines Logic *******************************

//
// function dice() {
//   return Math.floor(Math.random()*6) + 1;
// }

var player1 = "";
var player2 = "";

//constructor - blueprint
function dicePlayer(player, tScore, rollScore, score, color){
  this.player = player;
  this.tScore = 0;
  this.rollScore = 0;
  this.score = 0;
  this.color = color;
}

// Instances - of the object
// var player1 = new dicePlayer("player1", score1, tScore1, light blue)
// var player2 =  new dicePlayer("player2", score2, tScore2, dark blue);

//Prototypes
// dicePlayer.prototype.rollTheDamnThing = function() {
//   if (this.rollScore === 1) {
//     this.score = 0;
//     // $('#diceRollPlayer2').toggle();
//     // $('#diceRollPlayer1').toggle();
//   } else {
//     this.score += this.rollScore;
//   }
// }
// dicePlayer.prototype.holdPlease = function() {
//   this.tScore += this.score;
//   this.score = 0;
// }
// dicePlayer.prototype.winner = function() {
//   if (this.tScore >= 100) {
//     alert("Congratulations! The winner is " + this.name + "!");
//   }
// }
score=0;
function roll(){
  for(var i=0; i<=0; i++){
    dice=Math.floor(Math.random()*6) + 1;
    document.getElementById("p1Rolled").innerHTML = "ROLLED: " + " " + dice;
    document.getElementById("diceMaker").innerHTML = dice;
    score = score + dice;
    document.getElementById("p1Total").innerHTML = score;
    if(dice==1){
      $("#diceRollPlayer1").hide();
      $("#diceRollPlayer2").show();
      score=0;
      document.getElementById("p1Scored").innerHTML = "Your score has been reset to 0";
    }

  }
}


score2=0;
function roll2(){
  for(var i=0; i<=0; i++){
    dice=Math.floor(Math.random()*6) + 1;
    document.getElementById("p2Rolled").innerHTML = "ROLLED: " + " " + dice;
    document.getElementById("diceMaker").innerHTML = dice;
    score = score + dice;
    document.getElementById("p2Total").innerHTML = score;
    if(dice==1){
      $("#diceRollPlayer2").hide();
      $("#diceRollPlayer1").show();
      score=0;
      document.getElementById("p2Scored").innerHTML = "Your score has been reset to 0";
    }
  }
}

// ******************************User Interface Logic ******************************


// $(document).ready(function(){
//   $("button#diceRollPlayer1").click(function(event) {
//     event.preventDefault();
//     // var  player1 = dice();
//
//     $("#p1Rolled").append(player1);
//     player1.rollTheDamnThing;
//     $("#p1Total").append("Your current score is: " + roll());
//   });
//
//   $("button#diceRollPlayer2").click(function(event) {
//     event.preventDefault();
//     player2.rollScore = dice();
//     $("#p2Rolled").empty();
//     $("#p2Total").empty();
//     $("#p2Rolled").append("Dice rolled: " + player2.rollScore);
//     player2.rollTheDamnThing();
//     $("#p2Total").append("Your current score is: " + player2.score);
//   });
//
//
//   $("button#hold").click(function(event) {
//     event.preventDefault();
//     if ($("diceRollPlayer1").is(":visible")) {
//       player1.holdPlease();
//       $("#p1Rolled").empty();
//       $("#p1Total").empty();
//       $("#p1Total").append(player1.tScore);
//       $(".p1Scored").empty(); //work on it later
//       $("#diceRollPlayer2").toggle();
//       $("#diceRollPlayer1").toggle();
//       player1.winner();
//   } else {
//     player2.holdPlease();
//     $("#p2Rolled").empty();
//     $("#p2Total").empty();
//     $("#p2Total").append(player2.tScore);
//     $(".p1Scored").empty();//work on it later
//     $("#diceRollPlayer2").toggle();
//     $("#diceRollPlayer1").toggle();
//     player2.winner();
//       }
//     });
//   })

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
