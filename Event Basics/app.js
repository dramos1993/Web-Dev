// document.querySelector('button').addEventListener('click', function (evt) { console.log(evt) })

// const input = document.querySelector('input')
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })

// input.addEventListener('keyup', function () {
//     console.log('KEYUP')
// })

// window.addEventListener('keydown', function (e) {
//     switch (e.code) {
//         case 'ArrowUp':
//             console.log("UP!");
//             break;
//         case 'ArrowDown':
//             console.log("DOWN!");
//             break;
//         case 'ArrowLeft':
//             console.log("Left");
//             break;
//         case 'ArrowRight':
//             console.log("Right");
//             break;
//         default:
//             console.log("IGNORED!");
//     }
// })








const tweetForm = document.querySelector('#tweetForm')

const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // const userNameInput = document.querySelectorAll('input')[0]
    // const tweetInput = document.querySelectorAll('input')[1]
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';

});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`)
    tweetsContainer.append(newTweet)
    //<li><b>Colt</b> - tweet output </li>

}


const lis = document.querySelectorAll('li');

tweetsContainer.addEventListener('click', function (e) {
    e.target.closest('li').remove();

})

// for (let li of lis) {

//     li.addEventListener('click', function () {
//         li.remove();
//     })

// }