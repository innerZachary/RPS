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

const scoreboard = document.querySelector('.scoreboard');
console.log(scoreboard.textContent);

choices.forEach((choice) => {
  choice.addEventListener('click', () => {//every time a choice button is clicked a round is played
    //console.log(playRound(computerPlay(), choice.textContent.toLowerCase()));
    scoreboard.textContent = `${playRound(computerPlay(), choice.textContent.toLowerCase())}`;
  });
});
