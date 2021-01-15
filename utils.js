// export function computerThrow(rockPaperScissors) {
//     if (rockPaperScissors === 1) {
//         return 'scissors';
//     } else if (rockPaperScissors === 0) {
//         return 'paper';
//     } else if (rockPaperScissors === 2) {
//         return 'rock';
//     }

// }
let Wins = 0;
let Loss = 0; 
let Tie = 0; 


export function getGameOutcome(gameOutcome, secretMessage) {
    if (gameOutcome === 'win') {
        Wins++;
        secretMessage.textContent = 'Great Job! You Win!';
    } else if (gameOutcome === 'loss') {
        Loss++;
        secretMessage.textContent = 'Darn it, you lost!'; 
    } else {
        Tie++;
        secretMessage.textContent = 'Its a tie!';
    }
    return [Wins, Loss, Tie];
}

export function randomThrow(rockPaperScissors) {
    if (rockPaperScissors === 1) {
        return 'scissors';
    } else if (rockPaperScissors === 0) {
        return 'paper';
    } else if(rockPaperScissors === -1) {
        return 'rock';
    }

}


export function doesUserWin(player, computer) {
    if (player === computer) return 'draw'
    if (player === 'rock' && computer === 'paper') return 'lose'
    if (player === 'scissors' && computer === 'rock') return 'lose'
    if (player === 'paper' && computer === 'scissors') return 'lose'
    else return 'win' 
}
    
