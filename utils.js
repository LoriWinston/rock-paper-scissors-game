export function randomThrow(rockPaperScissors) {
    if (rockPaperScissors === 1) {
        return 'scissors';
    } else if (rockPaperScissors === 0) {
        return 'paper';
    } else if(rockPaperScissors === -1) {
        return 'rock';
    }

}
