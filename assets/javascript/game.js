$(document).ready(function(){
  var randomVal = 0;
  var options = [1,2,3,4,5,6,7,8,9,10,11,12];
  var crystalOne = '';
  var total = 0;
  var totalNumber = 0;
  var crystalTwo = '';
  var crystalThree = '';
  var crystalFour = '';
  var wins = 0;
  var losses = 0;
  function randomNum(){
    crystalOne = options[Math.floor(Math.random()*options.length)];
    crystalTwo = options[Math.floor(Math.random()*options.length)];
    crystalThree = options[Math.floor(Math.random()*options.length)];
    crystalFour = options[Math.floor(Math.random()*options.length)];
    }
    randomNum();
function randomNumber() {
randomVal = Math.floor(Math.random() * 102) + 19;
}
randomNumber();
console.log(randomVal)
$('.random-number').text(randomVal);
$('.button-1').on('click', function(){
  totalNumber = total + crystalOne;
  $('.user-number').html(total +=crystalOne);
  if (totalNumber == randomVal){
    wins++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#wins").html("Wins: " + wins);
    $('.random-number').text(randomVal);
    $('.user-number').html(totalNumber);
  }
  if (totalNumber > randomVal){
    losses++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#losses").html("Lossees: " + losses);
    $('.random-number').text(randomVal);
    $('.user-number').html(totalNumber);
  }
});
$('.button-2').on('click', function(){
  totalNumber = total + crystalTwo;
  $('.user-number').html(total +=crystalTwo);
  if (totalNumber == randomVal){
    wins++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#wins").html("Wins: " + wins);
    $('.random-number').text(randomVal);
    $('.user-number').html(totalNumber);
  }
  if (totalNumber > randomVal){
    losses++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#losses").html("Lossees: " + losses);
    $('.random-number').text(randomVal);
    $('.user-number').html(totalNumber);
  }
});
$('.button-3').on('click', function(){
  totalNumber = total + crystalThree;
  $('.user-number').html(total +=crystalThree);
  if (totalNumber == randomVal){
    wins++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#wins").html("Wins: " + wins);
    $('.random-number').text(randomVal);
    $('.user-number').html(totalNumber);
  }
  if (totalNumber > randomVal){
    losses++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#losses").html("Lossees: " + losses);
    $('.random-number').text(randomVal);
    $('.user-number').html(totalNumber);
  }
});
$('.button-4').on('click', function(){
  totalNumber = total + crystalFour;
  $('.user-number').html(total +=crystalFour);
  if (totalNumber == randomVal){
    wins++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#wins").html("Wins: " + wins);
    $('.random-number').text(randomVal);
    $('.user-number').text(totalNumber);
  }
  if (totalNumber >= randomVal){
    losses++;
    randomNumber();
    randomNum();
    totalNumber = 0;
    total = 0;
    $("#losses").html("Lossees: " + losses);
    $('.random-number').text(randomVal);
    $('.user-number').text(totalNumber);
  }
});

});