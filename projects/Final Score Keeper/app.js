const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1display')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2display')
}


function scoreKeeper(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = 'true';
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.disabled = true;
            opponent.disabled = true;
        }
        player.display.textContent = player.score;
    }

}

function reset() {

    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger')
        player.display.textContent = player.score;
        player.button.disabled = false;
    }
    isGameOver = false;
}
const resetScore = document.querySelector('#reset')
const scoreLimit = document.querySelector('#scorelimit');
let winningScore = 3;
let isGameOver = false;

player1.button.addEventListener('click', function () {
    scoreKeeper(player1, player2)
})

player2.button.addEventListener('click', function () {
    scoreKeeper(player2, player1)
})
scoreLimit.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset();
})
resetScore.addEventListener('click', reset)





