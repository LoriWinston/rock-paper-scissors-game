let Wins = 0;
let Loss = 0; 
let Tie = 0; 

export function getGameOutcome(gameOutcome, secretMessage) {
    console.log(gameOutcome);
    if (gameOutcome === 'win') {
        Wins++;
        secretMessage.textContent = 'Great Job! You Win!';
    } else if (gameOutcome === 'lose') {
        Loss++;
        secretMessage.textContent = 'Darn it, you lost!'; 
    } else if (gameOutcome === 'tie') {
        console.log(gameOutcome);
        Tie++;
        secretMessage.textContent = 'Its a tie!';
    }
    return [Wins, Loss, Tie];
}

