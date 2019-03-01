var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}


//Prints dice roll to the page
// $(document).ready(function() {
function printNumber(number) {
  var diceMaker = document.getElementById('diceMaker');
  diceMaker.innerHTML = number;
}

$(document).ready(function(){
button.onclick = function() {
  var result = dice.roll();
  printNumber(result);


  event.preventDefault();
};
});
