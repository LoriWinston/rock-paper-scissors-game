export const playerRules = { 
    'Paper' : {
        'Rock' : 'win',
        'Scissors' : 'lose', 
        'Paper' : 'tie'
    },
    'Rock' : {
        'Paper' : 'lose', 
        'Scissors' : 'win',
        'Rock' : 'tie'
    },
    'Scissors' : {
        'Paper' : 'win',
        'Rock' : 'lose', 
        'Scissors' : 'tie'
    }
};
export const playerOption = {
    0: 'Paper',
    1: 'Scissors',
    2: 'Rock',
};