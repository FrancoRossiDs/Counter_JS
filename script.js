// Get references to HTML elements using their IDs
const decreaseBtn = document.getElementById('decrementBtn');
const resetBtn = document.getElementById('resetBtn');
const incrementBtn = document.getElementById('incrementBtn');
const count = document.getElementById('count');
const randomBtn = document.getElementById('randomBtn');

// Initialize a counter variable
let counter = 0;

// Event handler for the "Increase" button
incrementBtn.onclick = () => {
    // Increment the counter and update the displayed count
    counter++;
    count.innerHTML = counter;
}

// Event handler for the "Decrease" button
decreaseBtn.onclick = () => {
    // Decrement the counter (not below 0) and update the displayed count
    counter--;
    if (counter < 0) {
        counter = 0;
    }
    count.innerHTML = counter;
}

// Event handler for the "Random" button
randomBtn.onclick = () => {
    // Generate a random number between 1 and 1000 and update the displayed count
    counter = getRandomInt(1, 1000);
    count.innerHTML = counter;
}

// Event handler for the "Reset" button
resetBtn.onclick = () => {
    // Reset the counter to 0 and update the displayed count
    counter = 0;
    count.innerHTML = counter;
}

// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = 1;
    max = 1000;
    return Math.floor(Math.random() * (max - min + 1) + min);
}
