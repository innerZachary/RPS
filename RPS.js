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

function getPlayerChoice() { //forces player to choose correct selection, html and buttons would probably work better!
  let answer = prompt('Rock, Paper, or Scissors?').toLowerCase();
  if (answer == 'rock' || answer == 'paper' || answer == 'scissors') {
    return answer;
  } else {
    alert('Please choose only Rock, Paper, or Scissors! You thought you could fool me bitch?')
    return getPlayerChoice();
  }
}

function playRound (computerSelection, playerSelection) {
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
//playRound(computerPlay(), getPlayerChoice());

function game() {
  let score = [0, 0];
  while (score[0] < 5 && score[1] < 5) {
    let holder = playRound(computerPlay(), getPlayerChoice());
    // console.clear();
    console.log(holder);
    if (holder[4] == 'w') {
      score[0]++;
    } else if (holder[4] == 'l') {
      score[1]++;
    }
    console.log(`The score is Human: ${score[0]}, Computer: ${score[1]}`);
    // console.log('Play the next round!')
  }
  if (score[0] == 5) {
    console.log('YOU WON!!!!');
  } else {
    console.log('Better luck next time!');
  }

}