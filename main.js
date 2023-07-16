const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $seconds = document.getElementById("seconds");
/*  */
const $daysOverlay = document.getElementById("days-overlay");
const $hoursOverlay = document.getElementById("hours-overlay");
const $minutesOverlay = document.getElementById("minutes-overlay");
const $secondsOverlay = document.getElementById("seconds-overlay");

let targetDate;
const nowDate = new Date().getTime(); // Obtiene los milisegundos de la fecha y hora actuales

if (localStorage.getItem("target-date")) {
  targetDate =
    localStorage.getItem("target-date") <= nowDate
      ? alert("Terminado, elija una nueva fecha")
      : JSON.parse(localStorage.getItem("target-date"));
} else {
  targetDate = new Date("2023-12-07T00:08:00");
  localStorage.setItem("target-date", JSON.stringify(targetDate.getTime()));
}

/* Carga la información de la fecha apenas carga */
function loadCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    alert("Terminadoo");
    clearInterval(intervalCoutdown);
  } else {
    let seconds = Math.floor(timeRemaining / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    $days.innerText = days;
    $hours.innerText = hours % 24;
    $minutes.innerText = minutes % 60;
    $seconds.innerText = seconds % 60;

    $daysOverlay.innerText = days;
    $hoursOverlay.innerText = hours % 24;
    $minutesOverlay.innerText = minutes % 60;
    $secondsOverlay.innerText = seconds % 60;
  }
}
loadCountdown();

/* Actualiza el tiempo */
function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    alert("Terminadoo");
    clearInterval(intervalCoutdown);
  } else {
    let seconds = Math.floor(timeRemaining / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    updateInterface(days, $days);
    updateInterface(hours, $hours);
    updateInterface(minutes, $minutes);
    updateInterface(seconds, $seconds);
  }
}
/* Actualiza la interfaz */
function updateInterface(value, element) {
  if (parseInt(element.innerText) == value) {
    return;
  } else {
    const elementParentOverlay = element.parentElement.nextElementSibling;
    element.id != "seconds"
      ? (elementParentOverlay.style = "animation-delay: 0s")
      : null;
    element.innerText = value;
    elementParentOverlay.firstElementChild.innerText = value;

    elementParentOverlay.classList.add("active");
    if (element.id != "seconds") {
      setTimeout(() => {
        elementParentOverlay.classList.remove("active");
      }, 950); // La animación dura 1 segundo
    }
  }
}

// Actualiza el tiempo restante cada segundo
const intervalCoutdown = setInterval(updateCountdown, 1000);
