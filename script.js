const decreaseBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
const count = document.getElementById('count')
const randomBtn = document.getElementById('randomBtn');
let counter = 0;

incrementBtn.onclick = () => {
    counter++;
    count.innerHTML = counter;
}
decreaseBtn.onclick = () => {
    counter--;
    if (counter < 0) {
        counter = 0
    }
    count.innerHTML = counter;
}
randomBtn.onclick = () => {
    counter = getRandomInt(1,1000);
    count.innerHTML = counter;
}
resetBtn.onclick = () => {
    counter = 0;
    count.innerHTML = counter;
}
function getRandomInt(min, max){
    min=1;
    max=1000;
    return Math.floor(Math.random() * (max - min + 1) + min);
}