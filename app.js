// Select DOM elements
const stopwatchEl = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

// Declare variables
let millisecond = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopwatchInterval;

// Format time function
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// Stopwatch function
function stopwatch() {
    millisecond++;
  if(millisecond === 100){
    millisecond = 0;
    seconds++
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
}
  stopwatchEl.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(millisecond)}`;
}

// Event listeners
// startBtn.addEventListener('click', function() {
//   stopwatchInterval = setInterval(stopwatch, 10);
//   startBtn.disabled = true;
// });

startBtn.addEventListener('click', function() {
  stopwatchInterval = setInterval(stopwatch, 10);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', function() {
  clearInterval(stopwatchInterval);
  startBtn.disabled = false;
});

resetBtn.addEventListener('click', function() {
  clearInterval(stopwatchInterval);
  millisecond = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  stopwatchEl.textContent = '00:00:00:00';
  startBtn.disabled = false;
});


// // Select DOM elements
// const stopwatchEl = document.querySelector('.stopwatch');
// const startBtn = document.querySelector('.start-btn');
// const stopBtn = document.querySelector('.stop-btn');
// const resetBtn = document.querySelector('.reset-btn');

// // Declare variables
// let millisecond = 0;
// let seconds = 0;
// let minutes = 0;
// let hours = 0;
// let stopwatchInterval;

// // Format time function
// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

 // Stopwatch function
// function stopwatch() {
//   millisecond++;
//   if (millisecond === 100) {
//     millisecond = 0;
//     seconds++;
//     if (seconds === 60) {
//       seconds = 0;
//       minutes++;
//       if (minutes === 60) {
//         minutes = 0;
//         hours++;
//       }
//     }
//   }
//   stopwatchEl.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(millisecond)}`;
// }

// // Event listeners
// startBtn.addEventListener('click', function() {
//   stopwatchInterval = setInterval(stopwatch, 10);
//   startBtn.disabled = true;
// });

// stopBtn.addEventListener('click', function() {
//   clearInterval(stopwatchInterval);
//   startBtn.disabled = false;
// });

// resetBtn.addEventListener('click', function() {
//   clearInterval(stopwatchInterval);
//   millisecond = 0;
//   seconds = 0;
//   minutes = 0;
//   hours = 0;
//   stopwatchEl.textContent = '00:00:00:00';
//   startBtn.disabled = false;
// });
