document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.innerText = 'Start Interaction';
    document.querySelector('.intro').appendChild(button);

    button.addEventListener('click', function() {
        // Ask for the user's name and age
        let userName = prompt("What's your name?");
        let userAge = prompt("How old are you?");

        if (userName && userAge) {
            // Display a personalized greeting in an alert
            alert(`Hello, ${userName}! You are ${userAge} years old. Welcome to our website!`);
        } else {
            alert("Please provide both your name and age.");
        }
    });
});
