let clockHour = document.getElementsByClassName("time-cover")[0];
let clockMinutes = document.getElementsByClassName("time-cover")[1];
let clockSeconds = document.getElementsByClassName("time-cover")[2];

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  clockHour.innerHTML = hours;
  clockMinutes.innerHTML = minutes;
  clockSeconds.innerHTML = seconds;
}, 10);
