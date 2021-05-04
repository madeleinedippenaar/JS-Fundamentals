'use strict';

let secretNumber = Math.trunc(Math.random()*20 +1);
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //when there is no input number
    if(!guess) {
        displayMessage('No Number 😥');
    }
    //when player wins
    else if(guess === secretNumber){
        displayMessage('Correct!! 🎉🥳');
        document.querySelector('body').style.backgroundColor = "#ffd149";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }
    //when the guess is incorrect
    }else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? `${guess} is too high ⬆️` : `${guess} is too Low ⬇️`); 
            score --;
            document.querySelector('.score').textContent = score;  
        }else {
            displayMessage('GAME OVER TRY AGAIN 😤');
            document.querySelector('.score').textContent = 0;
            const button = document.querySelector('.check')
            button.disabled = true;
        }
        document.querySelector('.guess').value = '';
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#ffa000";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});
