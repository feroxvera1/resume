const mike = document.getElementById("mike");
const cactus = document.getElementById("cactus");
const count = document.getElementById("count");
let startTime;
let RAF;
let laps;
var timeInSec = 0;
var timer_interval;
var checkTime = true;
document.addEventListener("keydown", function (event) {
  jump();
  if (cactus.classList != "forward") {
    cactus.classList.add("forward")
  }
  if (checkTime) {
    checkTime = false;
    start_time();
  }
});
function jump() {
  if (mike.classList != "jump") {
    mike.classList.add("jump")
  }
  setTimeout(function () {
    mike.classList.remove("jump")
  }, 300)
}
function start_time() {
  if (timer_interval) {
    clearInterval(timer_interval);
  }
  timer_interval = setInterval(function () {
    timeInSec += 1;

    convertSecondsToTime();
  }, 10);

  timer.classList.add("shadow");
}

function convertSecondsToTime() {
  given_seconds = timeInSec;

  dateObj = new Date(given_seconds * 10);
  minutes = dateObj.getUTCMinutes();
  seconds = dateObj.getSeconds();
  miliSeconds = dateObj.getMilliseconds();

  timeString =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0") +
    ":" +
    (miliSeconds / 10).toString().padStart(2, "0");

  timer.textContent = timeString;
}
let live = setInterval(function () {
  let styles = parseInt(window.getComputedStyle(mike).getPropertyValue('top')); // получаем все стили элемента
  let stylesCactus = parseInt(window.getComputedStyle(cactus).getPropertyValue('left')); // получаем все стили элемента
  // 100px
  //	var mikeTop =parseInt(window.getComputedStyle(mike).getPropertyValue("top"));
  //	var cactusLeft =parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  if (stylesCactus < 50 && stylesCactus > 0 && styles >= 220) {
    window.location.href = 'mikeGameOver.html';
  }
}, 10)