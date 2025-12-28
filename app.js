let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
let choices = ["rock", "paper", "scissors"]
let index = Math.floor(Math.random() * 3);

 return choices[index]
}

let computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);

function getHumanChoice() {
    let userChoice = prompt("Quel est ton choix");

    return userChoice;
}

let humanSelection = getHumanChoice();
console.log("Human chose:", humanSelection);

function playRound(humanChoice, computerChoice) {
humanChoice = (humanChoice || "").toLowerCase();

if (humanChoice === computerChoice) {
    return "It's a draw";
} else if (humanChoice === "rock" && computerChoice === "scissors") {
humanScore++

return "You win!";

} else if (humanChoice === "paper" && computerChoice === "rock") {
humanScore++

return "You win!";

} else if (humanChoice === "scissors" && computerChoice === "paper") {
humanScore++
return "You win!";
} else {
    computerScore++
    return "You loose !"
}
}

console.log(playRound(humanSelection, computerSelection))
console.log(`Scores → Human: ${humanScore}, Computer: ${computerScore}`);

function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
humanChoice = (humanChoice || "").toLowerCase();

if (humanChoice === computerChoice) {
    return "It's a draw";
} else if (humanChoice === "rock" && computerChoice === "scissors") {
humanScore++

return "You win!";

} else if (humanChoice === "paper" && computerChoice === "rock") {
humanScore++

return "You win!";

} else if (humanChoice === "scissors" && computerChoice === "paper") {
humanScore++
return "You win!";
} else {
    computerScore++
    return "You loose !"
}
}

let computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);
let humanSelection = getHumanChoice();
console.log("Human chose:", humanSelection);
console.log(playRound(humanSelection, computerSelection))
console.log(`Scores → Human: ${humanScore}, Computer: ${computerScore}`);

computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);
humanSelection = getHumanChoice();
console.log("Human chose:", humanSelection);
console.log(playRound(humanSelection, computerSelection))
console.log(`Scores → Human: ${humanScore}, Computer: ${computerScore}`);

computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);
humanSelection = getHumanChoice();
console.log("Human chose:", humanSelection);
console.log(playRound(humanSelection, computerSelection))
console.log(`Scores → Human: ${humanScore}, Computer: ${computerScore}`);

computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);
humanSelection = getHumanChoice();
console.log("Human chose:", humanSelection);
console.log(playRound(humanSelection, computerSelection))
console.log(`Scores → Human: ${humanScore}, Computer: ${computerScore}`);

computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection);
humanSelection = getHumanChoice();
console.log("Human chose:", humanSelection);
console.log(playRound(humanSelection, computerSelection))
console.log(`Scores → Human: ${humanScore}, Computer: ${computerScore}`);

}

playGame();