const clock = document.getElementById("clock");
const days = document.getElementById("date");

function showClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weeks = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const week = weeks[date.getDay()];

  clock.innerHTML = `${hour}:${minute}:${seconds}`;
  days.innerHTML = `${month}월 ${day}일 ${week}`;
}

showClock();
setInterval(showClock, 1000);
