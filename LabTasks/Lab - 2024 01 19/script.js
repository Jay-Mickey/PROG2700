// Lab work (January 19th, 2024)

// Access the div with the id 'output'
const outputDiv = document.getElementById('homeOrNot');

// Log a message to the console
console.log("Here's where I'm currently am in the world right now.");


// Deciding what message location
var currentLocation = "Halifax";
var date_month = 1;
var date_day = 5;
var inCostaRica = false;

// If-Else Statement 1 - Check if date is between Jan 19 and Feb 19
if (date_month == 1) {
    if (date_day >= 19)     inCostaRica = true;
}
else if (date_month == 2) {
    if (date_day <= 19)     inCostaRica = true;
}

// If-Else Statement 2 - Explain current location depending on date
var message = (inCostaRica) ? "Sorry, I'm travelling in Costa Rica!" : "Right now, I'm home in Halifax.";
console.log(message);


// Display message on page
outputDiv.innerText = "Hi there.\n" + message;