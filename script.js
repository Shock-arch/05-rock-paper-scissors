// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Get a random move for the computer
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play one round and show the choices on the page
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  let roundResult = "";

  if (playerChoice === computerChoice) {
    roundResult = "It's a tie!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundResult = "You win!";
  } else {
    roundResult = "Computer wins!";
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${roundResult}`;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playRound("Rock");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playRound("Paper");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playRound("Scissors");
});