let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"]
    const randIdex = Math.floor(Math.random() * 3)
    return option[randIdex];
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();



    if (userChoice === compChoice) {

        msg.innerText = "It's a draw! play Again"
        msg.style.backgroundColor = "#081b31";

    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "You lose!"
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});