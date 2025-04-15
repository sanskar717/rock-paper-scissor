let userScore = 0;
let compScore = 0;

const chocies = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rnadIdx = Math.floor(Math.random() * 3);
    return options[rnadIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";

}

const showWinner = (userWin, userChoice, compChoice)  => { 
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
      } 
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        // Draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors beats rock
            userWin = compChoice === "paper" ?  false :  true;
        } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
        } else {
        userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};                   


chocies.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
