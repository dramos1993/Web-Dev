const player1 = document.querySelector('#player1');

const player2 = document.querySelector('#player2');

const reset = document.querySelector('#reset')

const score = document.querySelector('h1');

let score1 = 0;
let score2 = 0;


player1.addEventListener('click', function () {

    score1++;
    score.innerText = `${score1} to ${score2}`




})

player2.addEventListener('click', function () {

    score2++;
    score.innerText = `${score1} to ${score2}`

})

reset.addEventListener('click', function () {

    score1 = 0;
    score2 = 0;

    score.innerText = `${score1} to ${score2}`


})
