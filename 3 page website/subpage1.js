// Timer Variables
let pomodoroDuration = 25 * 60; // 25 minutes
let shortBreakDuration = 5 * 60; // 5 minutes
let longBreakDuration = 15 * 60; // 15-minute long break in seconds
let timer = pomodoroDuration;
let timerInterval;
let isPaused = true;

// DOM Elements
const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const shortBreakButton = document.getElementById("short-break");
const backgroundButtons = document.querySelectorAll(".background-options button");
const musicButtons = document.querySelectorAll(".music-options button");
const volumeControl = document.getElementById("volume-control");
const noiseButtons = document.querySelectorAll(".background-noise button");

// Sound Variables
const alarmSound = new Audio("audio/alarm.mp3"); // Alarm sound for timer still dont know if it actually works bc i keep reloading before the timer runs out fml
let currentMusic = new Audio();
currentMusic.loop = true;

// Timer Display Update
function updateDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// Timer Functions
function startTimer() {
    if (!isPaused) return; // Prevent multiple intervals
    isPaused = false;

    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            alarmSound.play(); // Play alarm when time is up
            resetTimer();
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timerInterval);
}

function resetTimer() {
    pauseTimer();
    timer = pomodoroDuration; // Reset to 25 minutes
    updateDisplay();
}

function startShortBreak() {
    pauseTimer();
    timer = shortBreakDuration; // Set 5 minutes timer
    updateDisplay();
    startTimer(); // Start short break timer
}

function startLongBreak() {
    pauseTimer(); // Check no timers are running
    timer = longBreakDuration; // Set timer to 15 minutes
    updateDisplay();
    startTimer(); // Start  long break timer
}


// Event Listeners for Timer
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
shortBreakButton.addEventListener("click", startShortBreak);
const longBreakButton = document.getElementById("long-break");
longBreakButton.addEventListener("click", startLongBreak);


// Background Change Logic
backgroundButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const bgFile = button.dataset.bg; // Get the file name from data-bg
        document.body.style.backgroundImage = `url('images/${bgFile}')`; // Set the background image
        document.body.style.backgroundSize = "cover"; // Adjust the size (cover, contain, or specific size)
        document.body.style.backgroundPosition = "center"; // Center the image
        document.body.style.backgroundRepeat = "no-repeat"; // Avoid repeating the image
    });
});


// Music Controls
musicButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const musicFile = button.dataset.music;
        currentMusic.pause();
        currentMusic.src = `audio/${musicFile}`;
        currentMusic.play();
    });
});

volumeControl.addEventListener("input", (e) => {
    currentMusic.volume = e.target.value;
});

// Background Noise Controls
noiseButtons.forEach((button, index) => {
    const volumeSlider = document.getElementById(`volume-noise${index + 1}`);
    const noise = new Audio(`audio/${button.dataset.noise}`);
    noise.loop = true;

    button.addEventListener("click", () => noise.play());
    
    volumeSlider.addEventListener("input", (e) => {
        noise.volume = e.target.value;
    });
});

