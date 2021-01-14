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
    