var birthdate = new Date("1999-06-17"); // Your birthdate

// Calculate the time remaining until the next birthday
function calculateCountdown() {
    var now = new Date();
    var nextBirthday = new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    if (now > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    var timeRemaining = nextBirthday - now;
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var countdownMessage = "There are " + weeks + " weeks, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds until my next birthday!";
    document.getElementById("countdown").innerHTML = countdownMessage;
  }

  // Call the function initially
  calculateCountdown();

  // Update the countdown every second
  setInterval(calculateCountdown, 1000);