let humanScore = 0;
let computerScore = 0;
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const resultsContainer = document.querySelector(".results-container")
const computerResult = document.querySelector("#computer-choice")
const result = document.querySelector("#round-result")
const score = document.querySelector("#score")

function getComputerChoice() {
let choices = ["rock", "paper", "scissors"]
let index = Math.floor(Math.random() * 3);

 return choices[index]
}

paper.addEventListener("click", () => {

      if (humanScore === 5 || computerScore === 5) {
    return;
  }
  
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    console.log(result)
    resultsContainer.style.display = "block";
    computerResult.textContent = `Computer choice: ${computerChoice}`;
    result.textContent = playRound(humanChoice, computerChoice);
       score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

       if (humanScore === 5 ) {
         result.textContent = "You are the winner !";
       } else if (computerScore === 5) {
        result.textContent = "Game over...Computer is the winner !"
       } 
})

rock.addEventListener("click", () => {

    if (humanScore === 5 || computerScore === 5) {
    return;
  }

    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    console.log(result)
     resultsContainer.style.display = "block";
      computerResult.textContent = `Computer choice: ${computerChoice}`;
     result.textContent = playRound(humanChoice, computerChoice);
     score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

     
       if (humanScore === 5 ) {
         result.textContent = "You are the winner !";
       } else if (computerScore === 5) {
        result.textContent = "Game over...Computer is the winner !";
       } 
})

scissors.addEventListener("click", () => {

      if (humanScore === 5 || computerScore === 5) {
    return;
  }
  
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    console.log(result)
     resultsContainer.style.display = "block";
      computerResult.textContent = `Computer choice: ${computerChoice}`;
     result.textContent = playRound(humanChoice, computerChoice);
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

        
       if (humanScore === 5 ) {
         result.textContent = "You are the winner !";
       } else if (computerScore === 5) {
        result.textContent = "Game over...Computer is the winner !"
       }
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

