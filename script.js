function makeBubble() {
  var cluter = "";

  for (i = 1; i <= 102; i++) {
    let rn = Math.floor(Math.random() * 10);
    cluter += `<div class='bubble'>${rn}</div>`;
  }
  document.querySelector("#pbtom").innerHTML = cluter;
}

var timer = 60;
function runTimer() {
  var timerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#pbtom").innerHTML = `<h1>Game Over</h1>`;
      
    }
  }, 1000);
}

var hitrn = 0;

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtom").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runTimer();
getNewHit();
