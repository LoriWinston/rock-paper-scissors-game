import { getGameOutcome } from './utils.js'; 
import { playerRules, playerOption } from './the-rules.js';

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');
const tieSpan = document.getElementById('ties');
const Button = document.getElementById('playButton');
const secretMessage = document.getElementById('secretBox');

// console.log(winSpan, lossSpan, totalSpan, Button, secretMessage, tieSpan);

// initialize state
let wins = 0; 
let tie = 0; 
let loss = 0; 


// set event listeners to update state and DOM
Button.addEventListener('click', () => {
    // console.log('im in the button');
    const computerThrow = Math.ceil(Math.random() * 2);
    // console.log(computerThrow);
    let computerPlayer = playerOption[computerThrow];
    // console.log(computerPlayer);
    const userPlayer = document.querySelector('input[type="radio"]:checked');
    // console.log(userPlayer['value']);
    const gameOutcome = playerRules[userPlayer.value][computerPlayer]; 
    // console.log(gameOutcome);
    [wins, tie, loss] = getGameOutcome(gameOutcome, secretMessage);

    // console.log(playerRules[userPlayer.value]);

    totalSpan.textContent = wins + loss + tie;
    winSpan.textContent = wins; 
    lossSpan.textContent = loss;
    tieSpan.textContent = tie; 
});
