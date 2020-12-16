// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")


let ranNum = Math.floor(Math.random() * Math.floor(5))
let ranNum2 = Math.floor(Math.random() * Math.floor(5))
let score = 1

var x = document.getElementById("wamTable").rows[ranNum2].cells;
var y = x[ranNum];
y.innerHTML = "<img id='mole' src='mole.png' onclick='moleThing()'></img>"

timer = false
let highScore = 0;

var whack = new Audio('whack-audio.wav')
var fart = new Audio('fart-03.mp3')

function setTimer() {
fart.load()
fart.play()
timer = true;
score = 1;
var counter = 10;
var countdown = setInterval(function(){
  console.log(counter);
  document.getElementById("timer").innerHTML = "Timer: " + counter
  counter--
  if (counter === 0) {
    clearInterval(countdown);
    timer = false;
    if (score > highScore ){
      highScore = score
      document.getElementById("highScore").innerHTML = "High Score: " + (highScore-1)
    }
    document.getElementById("timer").innerHTML = "Stop!"

  }
  
}, 1000);

}


function moleThing(id) {

  if (timer) {
    whack.load()
    whack.play()
    y.innerHTML = null
    let ranNum = Math.floor(Math.random() * Math.floor(5))
    let ranNum2 = Math.floor(Math.random() * Math.floor(5))
    x = document.getElementById("wamTable").rows[ranNum].cells;
    y = x[ranNum2];
    y.innerHTML = "<img id='mole' src='mole.png' onclick='moleThing()'></img>"
    document.getElementById("score").innerHTML = "Score: " + score
    score++
  }
}


// function checkScore(){

//   if (score > highScore ){
//     return highScore = score;
//   }

// }


// var counter = 10;
// var countdown = setInterval(function(){
//   console.log(counter);
//   counter--
//   if (counter === 0) {
//     document.getElementById("timer").innerHTML = "Stop!"
//     clearInterval(countdown);
//   }
// }, 1000);





