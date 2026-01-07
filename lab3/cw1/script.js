const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let totalSeconds = 0;
let intervalId = null;

function renderTime() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes > 0) {
    timerDisplay.textContent = `${minutes}min ${seconds}s`;
  } else {
    timerDisplay.textContent = `${seconds}s`;
  }
}

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      totalSeconds++;
      renderTime();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

resetBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  totalSeconds = 0;
  renderTime();
});

renderTime();
