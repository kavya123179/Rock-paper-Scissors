// Code for getting the user's button choice
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;
//setting the button choice to a variable string and then jump to the play function
function playRock() {
  play("rock")
}
function playPaper() {
  play("paper")
}
function playScissors () {
  play("scissors")
}

//play function starts here
//Run the computer choice -getComputerPlay- function and print the computer and human choices to the screen
function play(humanPlay) {
  computerPlay = getComputerPlay();
  document.getElementById('computer').innerHTML = "<p>The bot played <strong>" + computerPlay + "</strong>.</p>";
 
 //Comparing the two choices to see who wins the round
 if (humanPlay === 'rock') {
   document.getElementById('upicked').innerHTML = "<p>You picked: <strong>" + humanPlay + "</strong>.</p>";
    if(computerPlay === 'rock') {
      document.getElementById('score').innerHTML = "<p>You tied.</p>";
    } else if (computerPlay === 'paper') {
      document.getElementById('score').innerHTML = "<p>You lose.</p>";
    } else if (computerPlay === 'scissors') {
      document.getElementById('score').innerHTML = "<p>You win!</p>";
    }
  } else if (humanPlay === 'paper') {
      document.getElementById('upicked').innerHTML = "<p>You picked: <strong>" + humanPlay + "</strong>.</p>";
    if(computerPlay === 'rock') {
      document.getElementById('score').innerHTML = "<p>You win!</p>";
    } else if (computerPlay === 'paper') {
      document.getElementById('score').innerHTML = "<p>You tied.</p>";
    } else if (computerPlay === 'scissors') {
      document.getElementById('score').innerHTML = "<p>You lose.</p>";
    }  
  } else if (humanPlay === 'scissors') {
      document.getElementById('upicked').innerHTML = "<p>You picked: <strong>" + humanPlay + "</strong>.</p>";
    if(computerPlay === 'rock') {
      document.getElementById('score').innerHTML = "<p>You lose.</p>";
    } else if (computerPlay === 'paper') {
      document.getElementById('score').innerHTML = "<p>You win!</p>";
    } else if (computerPlay === 'scissors') {
      document.getElementById('score').innerHTML = "<p>You tied.</p>";
    }  
  }
}
//function to get the random choice for the computer's turn
function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}

