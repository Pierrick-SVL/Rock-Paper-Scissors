let humanScore = 0;
let computerScore = 0;
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const resultsContainer = document.querySelector(".results-container")
const result = document.querySelector("#round-result")
const score = document.querySelector("#score")

function getComputerChoice() {
let choices = ["rock", "paper", "scissors"]
let index = Math.floor(Math.random() * 3);

 return choices[index]
}

paper.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    console.log(result)
    resultsContainer.style.display = "block";
    result.textContent = playRound(humanChoice, computerChoice)
})

rock.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    console.log(result)
     resultsContainer.style.display = "block";
     result.textContent = playRound(humanChoice, computerChoice)
})

scissors.addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    console.log(result)
     resultsContainer.style.display = "block";
     result.textContent = playRound(humanChoice, computerChoice)
})

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

