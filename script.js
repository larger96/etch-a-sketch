const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

let htmlStyles = window.getComputedStyle(document.querySelector('html'));
let squaresNum = parseInt(htmlStyles.getPropertyValue('--squaresNum'));

function squared(x) {
    let result = x * x;
    return result;
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } 
    return color;
}

function createGrid(squaresNum) {
    for (i = 0; i < squared(squaresNum); i++) {
        let div = document.createElement('div');
        div.classList.add('content');
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = getRandomColor();
        });
        container.appendChild(div);
    }
};

btn.addEventListener('click', () => {
    let squaresNum = prompt('How many squares?');
    document.documentElement.style.setProperty('--squaresNum', squaresNum);
    container.innerHTML = ' ';
    createGrid(squaresNum);
});


createGrid(squaresNum);