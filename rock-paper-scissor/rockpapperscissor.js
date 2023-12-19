const score = JSON.parse(localStorage.getItem('score')) || { 
    Wins:0,
    Tie :0,
    Losses:0
};
    updateScore();

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r') {
        playGame('Rock');
    }else if (event.key === 'p') {
        playGame('Paper');
    }else if (event.key === 's') {
        playGame('Scissor');
    }
})

function playGame(playerMove) {
const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
        result = 'You lose';
    }
    else if (computerMove === 'Paper') {
        result = 'Congrats buddy You win';
    }
    else if (computerMove === 'Scissor') {
        result = 'it\'s Tie';
    }  
    }

    if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
        result = 'Congrats buddy You win'
        }
        else if (computerMove === 'Paper') {
            result = 'it\'s Tie';
        }
        else if (computerMove === 'Scissor') {
            result = 'You lose'
        }
    }

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
        result = 'it\'s Tie';
        }
        else if (computerMove === 'Paper') {
        result = 'You lose';
        }
        else if (computerMove === 'Scissor') {
        result = 'Congrats buddy You win';
        }
    }
    if (result === 'Congrats buddy You win') {
        score.Wins += 1;
    }
    else if (result === 'You lose') {
        score.Losses += 1;
    }
    else if (result === 'it\'s Tie') {
        score.Tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You picked
        <img src="images/${playerMove}.png" class="thatsit">
        Computer picked
        <img src="images/${computerMove}.png" class="thatsit">`

    updateScore();
}

function updateScore() {
    document.querySelector ('.js-score').innerHTML = `Wins: ${score.Wins}. Ties: ${score.Tie}. Losses: ${score.Losses}.`
}


function pickComputerMove () {
    const randomMove = Math.random();

    let computerMove = '';

    if (randomMove >= 0 && randomMove < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomMove >= 2 / 3 && randomMove < 1) {
        computerMove = 'Scissor';
    }
    return computerMove;
}