let colors = ['blue', 'purple', 'green', 'red', 'pink', 'yellow'];
let button = document.getElementById('button');

button.addEventListener('click', function(){
    let random = colors[Math.floor(Math.random() * colors.length)];
    let container = document.getElementById('container');

    container.style.background = random;
})
