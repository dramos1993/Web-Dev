const button = document.querySelector('button');
let r = 0;
let g = 0;
let b = 0;

const h1 = document.querySelector('h1')

button.addEventListener('click', function () {


    const newColor = randomColor()

    if ((r + g + b) < 120) {
        h1.style.color = 'white';
    }
    else if ((r + g + b) > 120) {
        h1.style.color = 'black';
    }


    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

})


const randomColor = () => {
    r = Math.floor(Math.random() * 255) + 1
    g = Math.floor(Math.random() * 255) + 1
    b = Math.floor(Math.random() * 255) + 1
    return `rgb(${r},${g},${b})`;
}
