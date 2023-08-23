const time = document.querySelector("#time");
const date = document.querySelector("#date");

const getTime = function () {
  let now = new Date();
  let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  let minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let seconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  time.textContent = `${hours}:${minutes}:${seconds}`;
};
const getDate = function () {
  let now = new Date();
  let day = now.getDay() < 10 ? "0" + now.getDay() : now.getDay();
  let month =
    now.getMonth() < 10 ? "0" + Number(now.getMonth() + 1) : now.getMonth();
  let year = now.getFullYear();
  date.textContent = `${day}:${month}:${year}`;
};

setInterval(getTime, 1000);
setInterval(getDate, 1000);
