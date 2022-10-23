const computerIcons = document.querySelectorAll(".icon1");
console.log(computerIcons);
const playerIcons = document.querySelectorAll(".icon");
console.log(playerIcons);
const container = document.querySelector(".icon-container");
const messageDisplay = document.querySelector(".message");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const text = document.querySelector(".text");
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
//this is game javascript. I don't know how to take results from player function and computer function and put into playGame function. If i invoke getComputerChoice inside playGame function works before player choice was made. Second JS file copy.js its just example of rock, paper, scissors simple version.
//player's clicked icon
const getPlayerChoice = (e) => {
  let clickedIcon = e.target.classList.value;
  //console.log(clickedIcon);
  if (clickedIcon.includes("fa-hand-back-fist")) {
    playerSelection = "rock";
  } else if (clickedIcon.includes("paper")) {
    playerSelection = "paper";
  } else if (clickedIcon.includes("fa-hand-scissors")) {
    playerSelection = "scissors";
  }
  console.log({ playerSelection });
  return playerSelection;
};
//looping through player icons and adding event listener on icon
for (let i = 0; i < playerIcons.length; i++) {
  playerIcons[i].addEventListener("click", getPlayerChoice);
}

//removes and adds active class on player icon
const removeActivePlayer = () => {
  for (const icon of playerIcons) {
    icon.addEventListener("click", () => {
      playerIcons.forEach((elem) => {
        elem.classList.remove("active");
      });
      icon.classList.add("active");
    });
  }
};

//computer choice from random number.adds active class
const getComputerChoice = () => {
  const iconsArray = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * computerIcons.length);
  console.log(randomNumber);
  computerIcons[randomNumber].classList.add("active");
  computerSelection = iconsArray[randomNumber];
  console.log({ computerSelection });
  return computerSelection;
};

//remove active class from computer icons.When Player clicks Icon it removes active class from computer icons and invoked computerChoice adds active class.
const removeActiveComputer = () => {
  for (const card of playerIcons) {
    card.addEventListener("click", () => {
      computerIcons.forEach((el) => {
        el.classList.remove("active");
      });
      getComputerChoice();
    });
  }
};
//listening when player clicks icon, removes active from computer and adds new class active again with invoking computerChoice
const compareScores = (playerSelection, computerSelection) => {
  console.log("1", playerSelection, "2", computerSelection);
  let result;
  if (playerSelection === computerSelection) {
    result = "result is equal. Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    computer.innerText = `Computer score ${computerScore}`;
    result = "Paper covers rock.Computer WON";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    player.innerText = `Player score ${playerScore}`;
    result = "scissors can't cut rock. You WON";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    player.innerText = `Player score ${playerScore}`;
    result = "Paper covers rock.Computer WON";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    computer.innerText = `Computer score ${computerScore}`;
    result = "Scissors cuts paper.Computer WON";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    computer.innerText = `Computer score ${computerScore}`;
    result = "Scissors can not cut the paper.Computer WON";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    player.innerText = `Player score ${playerScore}`;
    result = "Scissors cuts the paper. You WON";
  } else {
    return;
  }
  return (messageDisplay.innerText = result);
};
//in this function need to get result from getPlayerChoice and getComputerChoice
const playGame = () => {
  //for (let i = 0; i < 5; i++) {
  removeActiveComputer();
  const choice1 = "rock"; //need assign player choice

  const choice2 = "paper"; //ned assign computer choice
  compareScores(choice1, choice2);
  //}
};
console.log(playGame());

const startGame = () => {
  removeActivePlayer();
};
startGame();
