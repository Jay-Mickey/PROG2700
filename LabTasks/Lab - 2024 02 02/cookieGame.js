let score = 0;
let unlockedObjects = [];
const unlockThresholds = { planet: 3, rocket: 7, alien: 15 }; // Thresholds for unlocking objects
let allUnlocked = false; // Flag to check if all objects have been unlocked

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function checkUnlockables() {
    // Checking to see what icons are locked and unlocked based on their respective threshold
    Object.keys(unlockThresholds).forEach(object => {
        if (score >= unlockThresholds[object] && !unlockedObjects.includes(object)) {
            unlockObject(object);
        }
    });
    // Once the cookie is clicked 3 total times, the planet icon is unlocked
    // Once the cookie is clicked 7 total times, the rocket icon is unlocked
    // Once the cookie is clicked 3 total times, the alien icon is unlocked
    // (and the 4th icon is unlocked as a result)
}

function unlockObject(object) {
    // Icon/Emoji hasn't been unlocked yet
    if (!unlockedObjects.includes(object)) {
        // Icon.Emoji is recorded as unlocked
        unlockedObjects.push(object);
        const objElement = document.getElementById(object);
        objElement.classList.add('unlocked');
        // Toggle cookie size when it's clicked
        objElement.onclick = function() {
            this.classList.toggle('enlarged');
        };
        // Show message when an emoji/icon is unlocked
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
    // Once all 3 previous icons are unlocked, the fourth one shows up
    if (unlockedObjects.length == 3 && !allUnlocked) {
        allUnlocked = true;
        fourthEmoji();
    }
}

function fourthEmoji() {
    const objectsDiv = document.getElementById('spaceObjects');
    const newEmoji = document.createElement('div');
    newEmoji.classList.add('space-object', 'unlocked');
    newEmoji.id = 'star';
    newEmoji.innerHTML = '⭐';
    newEmoji.onclick = function() {
        this.classList.toggle('enlarged');
    };
    objectsDiv.appendChild(newEmoji);
}

function increaseSize(object) {
    // When cookie is clicked, it increases in size
    var enlargedIcon = document.getElementById(object);
    enlargedIcon.classList.add('enlarged');
}