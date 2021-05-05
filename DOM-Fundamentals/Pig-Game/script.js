"use strict";
const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//starting game conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let playing = true;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle("player--active");
  playerEl1.classList.toggle("player--active");
};

//implementing dice roll functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceRoll = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceRoll}.png`;
    //check for rolled 1
    if (diceRoll !== 1) {
      //display current score
      currentScore += diceRoll;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // switch players
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(currentScore);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.remove("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
        diceEl.classList.add("hidden");
    } else {
        switchPlayer();
    }
  }
});
