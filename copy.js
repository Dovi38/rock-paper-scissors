let playScore = 0;
let compScore = 0;

const computerPlay = () => {
  const choiceArray = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * choiceArray.length);
  let computerChoice = choiceArray[randomNumber];
  //return can be choiceArray[randomNumber]
  return computerChoice;
};
//console.log(computerPlay());

const playRound = (playerSelection, computerSelection) => {
  //console.log("1", playerSelection, "2", computerSelection);
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    playScore += 1; //playScore++
    return "Paper covers rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playScore += 1;
    return "Rock crushes scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playScore += 1;
    return "paper covers rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore += 1;
    return "scissors cuts paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore += 1;
    return "rock crushes scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playScore += 1;
    return "scissors cuts paper";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose what to throw").toLocaleLowerCase();
    const computerSelection = computerPlay();
    console.log("1", playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    //this section loop running 5 times
  }
  if (playScore > compScore) {
    return "You beat the computer. You won";
  } else if (playScore < compScore) {
    return "computer won";
  } else {
    return "You tied to computer";
  }
};
console.log(game());
