document.addEventListener('DOMContentLoaded', function () {
    // Variables for all the interactive elements
    const choices = document.querySelectorAll('.choice');
    const winsDisplay = document.getElementById('wins');
    const lossDisplay = document.getElementById('loss');
    const drawDisplay = document.getElementById('draw');
    const playerChoiceDisplay = document.querySelector('.player-choice');
    const computerChoiceDisplay = document.querySelector('.computer-choice');
    const gameResultDisplay = document.querySelector('.game-result');
    const resetButton = document.querySelector('.reset-btn');

    // Initial score count
    let wins = 0;
    let losses = 0;
    let draws = 0;

    // Function to get a random choice for the computer
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissor'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    // Function to get the result of the game
    function getResult(player, computer) {
        if (player === computer) {
            return 'Draw';
        } else if (
            (player === 'rock' && computer === 'scissor') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissor' && computer === 'paper')
        ) {
            return 'Win';
        } else {
            return 'Loss';
        }
    }

    // Event listeners for all the choices (rock, scissors, and paper)
    choices.forEach(choice => {
        choice.addEventListener('click', function () {
            const playerChoice = this.dataset.choice;
            const computerChoice = getComputerChoice();
            playerChoiceDisplay.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
            computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

            const result = getResult(playerChoice, computerChoice);
            gameResultDisplay.textContent = result;

            // Update win, loss, and draw counts
            if (result === 'Win') {
                wins++;
                winsDisplay.textContent = wins;
            } else if (result === 'Loss') {
                losses++;
                lossDisplay.textContent = losses;
            } else {
                draws++;
                drawDisplay.textContent = draws;
            }
        });
    });

    // Event listener for the reset button
    resetButton.addEventListener('click', function () {
        wins = 0;
        losses = 0;
        draws = 0;
        winsDisplay.textContent = wins;
        lossDisplay.textContent = losses;
        drawDisplay.textContent = draws;
        playerChoiceDisplay.textContent = '';
        computerChoiceDisplay.textContent = '';
        gameResultDisplay.textContent = '';
    });
});