let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const buttons = document.querySelectorAll('.btn');
const choices = ['rock', 'paper', 'scissors'];
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice =
            choices[Math.floor(Math.random() * choices.length)];
        playerChoiceDisplay.textContent =
            playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerChoiceDisplay.textContent =
            computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        const result = playRound(playerChoice, computerChoice);
        document.getElementById('result').innerText = result;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    });
});
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}