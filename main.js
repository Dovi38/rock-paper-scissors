const computerIcons = document.querySelectorAll(".icon1");
const playerIcons = document.querySelectorAll(".icon");
const container = document.querySelector(".icon-container");
const messageDisplay = document.querySelector(".message");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const text = document.querySelector(".text");
const resetBtn = document.querySelector(".resetBtn");

let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let result = "";
let userChoice = true;

//remove active class from player
const removeActivePlayer = () => {
  playerIcons.forEach((elem) => {
    elem.classList.remove("active");
  });
};
//remove active class from computer
const removeActiveComputer = () => {
  computerIcons.forEach((elem) => {
    elem.classList.remove("active");
  });
};

const resetGame = () => {
  removeActivePlayer();
  removeActiveComputer();
  messageDisplay.innerText = "Let's play again";
  playerScore = 0;
  computerScore = 0;
  playerSelection;
  computerSelection;
  result = "";
  userChoice = true;
  computer.innerText = "Computer score: 0";
  player.innerText = "Player score: 0";
};

//player's clicked icon
const getPlayerChoice = (e, i) => {
  if (userChoice) {
    removeActivePlayer();
    playerIcons[i].classList.add("active");

    let clickedIcon = e.target.classList.value;
    if (clickedIcon.includes("fa-hand-back-fist")) {
      playerSelection = "rock";
    } else if (clickedIcon.includes("paper")) {
      playerSelection = "paper";
    } else if (clickedIcon.includes("fa-hand-scissors")) {
      playerSelection = "scissors";
    }
    console.log({ playerSelection });
    compareScores(playerSelection, computerSelection);
  }
};

const getComputerChoice = () => {
  const iconsArray = ["rock", "paper", "scissors"];
  for (const card of playerIcons) {
    card.addEventListener("click", () => {
      removeActiveComputer();
      let randomNumber = Math.floor(Math.random() * computerIcons.length);
      console.log(randomNumber);
      computerIcons[randomNumber].classList.add("active");
      computerSelection = iconsArray[randomNumber];
      console.log({ computerSelection });
      playRound(computerSelection);
    });
  }
};
getComputerChoice();
const playRound = (playerSelection, computerSelection) => {
  compareScores(playerSelection, computerSelection);
};
const compareScores = (playerSelection, computerSelection) => {
  console.log("1", playerSelection, "2", computerSelection);

  if (playerSelection === computerSelection) {
    result = "The Result is equal. Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    computer.innerText = `Computer score ${computerScore}`;
    result = "The Paper covers the Rock. Computer WON";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    player.innerText = `Player score ${playerScore}`;
    result = "The Scissors can't cut the Rock. Player WON";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    player.innerText = `Player score ${playerScore}`;
    result = "The Paper covers the Rock. Player WON";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    computer.innerText = `Computer score ${computerScore}`;
    result = "The Scissors cuts the Paper. Computer WON";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    computer.innerText = `Computer score ${computerScore}`;
    result = "The Scissors can't cut the Paper. Computer WON";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    player.innerText = `Player score ${playerScore}`;
    result = "The Scissors cuts the Paper. Player WON";
  } else {
    return;
  }
  console.log((messageDisplay.innerText = result));
  messageDisplay.innerText = result;
  return gameEnd();
};

for (let i = 0; i < playerIcons.length; i++) {
  playerIcons[i].addEventListener("click", (e) => getPlayerChoice(e, i));
}
resetBtn.addEventListener("click", resetGame);
const gameEnd = () => {
  if (playerScore === 5) {
    userChoice = false;

    return (messageDisplay.innerText = `Player Beats Computer`);
  } else if (computerScore === 5) {
    userChoice = false;

    return (messageDisplay.innerText = `Computer Won. Let's try again`);
  }
};
//console.log(gameEnd());
