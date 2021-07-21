const player1 = document.querySelector('#p1Button')
const player2 = document.querySelector('#p2Button')

const resetScore = document.querySelector('#reset')

const scoreLimit = document.querySelector('#scorelimit');


const p2Display = document.querySelector('#p2display')
const p1Display = document.querySelector('#p1display')

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;


let isGameOver = false;



player1.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = 'true';
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            player1.disabled = true;
            player2.disabled = true;
        }

        p1Display.textContent = p1Score;

    }

})

player2.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = 'true';
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            player1.disabled = true;
            player2.disabled = true;
        }

        p2Display.textContent = p2Score;

    }

})

scoreLimit.addEventListener('change', function () {

    winningScore = parseInt(this.value)

    reset();


})

resetScore.addEventListener('click', reset)

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;

    isGameOver = false;

    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    player1.disabled = false;
    player2.disabled = false;

}



