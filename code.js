function computerPlay() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    pC = playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();
    cC = computerSelection.substr(0,1).toUpperCase() + computerSelection.substr(1).toLowerCase();

    if (pC == cC) {
        return `Draw! ${pC} (player) ties with ${cC} (computer).`;
    } else if ((pC === "Rock" && cC == "Scissors") || (pC === "Paper" && cC == "Rock") || (pC === "Scissors" && cC == "Paper")) {
        return `You win! ${pC} (player) beats ${cC} (computer).`;
    } else {
        return `You lose! ${pC} (player) loses to ${cC} (computer).`;
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
