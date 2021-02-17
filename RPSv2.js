//second version played in the browser window
function computerPlay() { //return random chance rps
  let choice = Math.random() * 100;
  if (choice < 33) {
    return "rock";
  } else if (choice < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(computerSelection, playerSelection) { //Contains the logic for RPS and creates round messages
  let lose = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`
  let win = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}!`
  let draw = `You draw! Both players chose ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
  if (playerSelection == 'rock') {
    if (computerSelection == 'paper') {
      return lose;
    } else if (computerSelection == 'scissors') {
      return win;
    } else {
      return draw;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      return lose;
    } else if (computerSelection == 'rock') {
      return win;
    } else {
      return draw;
    }
  } else {
    if (computerSelection == 'rock') {
      return lose;
    } else if (computerSelection == 'paper') {
      return win;
    } else {
      return draw;
    }
  }
}

const choices = document.querySelectorAll('.choices');
// choices.forEach(choice => console.log(choice.textContent));

const message = document.querySelector('.message');
console.log(message.textContent);

const scoreboard = document.querySelector('.scoreboard');
//scoreboard.textContent = "The score is Human: 0, Computer 0";

const winMessage = document.createElement('h3');
winMessage.textContent = "You Won! Click to play again!";

const loseMessage = document.createElement('h3');
loseMessage.textContent = "You Lose! Click to give it another go!"

choices.forEach((choice) => {
  choice.addEventListener('click', () => {//every time a choice button is clicked a round is played
    //console.log(playRound(computerPlay(), choice.textContent.toLowerCase()));
    let result = `${playRound(computerPlay(), choice.textContent.toLowerCase())}`
    message.textContent = result;
    if (result[4] == 'w') {
      score[0]++;
    } else if (result[4] == 'l') {
      score[1]++;
    }
    scoreboard.textContent = `The score is Human: ${score[0]} Computer: ${score[1]}`
    if (score[0] > 4) {
      message.appendChild(winMessage);
      score = [0, 0];//doesnt work
    } else if (score[1] > 4) {
      message.appendChild(loseMessage);
      score = [0,0];//doesnt work
    }
  });
});

const score = [0, 0];
