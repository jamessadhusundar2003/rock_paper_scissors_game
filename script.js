
function toggleTheme() {
    if (document.querySelector(".theme-button").innerText === "DARK") {
        document.body.classList.add("dark-theme");
        document.querySelector(".theme-button").innerText = "LIGHT";
    } else {
        document.body.classList.remove("dark-theme");
        document.querySelector(".theme-button").innerText = "DARK";
    }
}

const resultDisplay = document.querySelector(".result-display")
const scoreDisplay = document.querySelector(".score-display")

const gameScore = JSON.parse(localStorage.getItem("Game score")) || {
    player : 0,
    computer : 0
}

function playGame(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3);

    if (playerChoice === "rock" && computerChoice === 0) {
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
        resultDisplay.innerText = "Tie! Both chose Rock.";
    } else if (playerChoice === "rock" && computerChoice === 1) {
        gameScore.computer++;
        resultDisplay.innerText = "You lose! Paper covers Rock.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else if (playerChoice === "rock" && computerChoice === 2) {
        gameScore.player++;
        resultDisplay.innerText = "You win! Rock crushes Scissors.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else if (playerChoice === "paper" && computerChoice === 0) {
        gameScore.player++
        resultDisplay.innerText = "You win! Paper covers Rock.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else if (playerChoice === "paper" && computerChoice === 1) {
        resultDisplay.innerText = "Tie! Both chose Paper.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else if (playerChoice === "paper" && computerChoice === 2) {
        gameScore.computer++;
        resultDisplay.innerText = "You lose! Scissors cut Paper.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else if (playerChoice === "scissors" && computerChoice === 0) {
        gameScore.computer++;
        resultDisplay.innerText = "You lose! Rock crushes Scissors.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else if (playerChoice === "scissors" && computerChoice === 1) {
        gameScore.player++;
        resultDisplay.innerText = "You win! Scissors cut Paper.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else if (playerChoice === "scissors" && computerChoice === 2) {
        resultDisplay.innerText = "Tie! Both chose Scissors.";
        scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
    } else {
        alert("Something went wrong!")
    }

    localStorage.setItem("Game score", JSON.stringify(gameScore));
}

function resetScore() {
    gameScore.player = 0;
    gameScore.computer = 0;
    localStorage.removeItem("Game score");
    resultDisplay.innerText = "Score has been reset!";
    scoreDisplay.innerText = `You : ${gameScore.player} | Computer : ${gameScore.computer}`;
}