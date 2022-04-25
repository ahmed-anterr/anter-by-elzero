let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function secFunc() {
  sec.setAttribute("data", sec.getAttribute("data") - 1);
  sec.innerHTML = sec.getAttribute("data");
  if (
    min.getAttribute("data") >= "0" &&
    hour.getAttribute("data") >= "0" &&
    day.getAttribute("data") >= "0"
  ) {
    if (sec.getAttribute("data") === "0") {
      sec.setAttribute("data", "60");
      min.setAttribute("data", min.getAttribute("data") - 1);
    }
  } else {
    min.setAttribute("data", "0");
  }
}
function minFunc() {
  min.innerHTML = min.getAttribute("data");
  if (hour.getAttribute("data") >= "0" && day.getAttribute("data") >= "0") {
    if (min.getAttribute("data") === "0") {
      min.setAttribute("data", "60");
      hour.setAttribute("data", hour.getAttribute("data") - 1);
    }
  } else {
    hour.setAttribute("data", "0");
  }
}
function hourFunc() {
  hour.innerHTML = hour.getAttribute("data");
  if (day.getAttribute("data") >= "0") {
    if (hour.getAttribute("data") === "0") {
      hour.setAttribute("data", "24");
      day.setAttribute("data", day.getAttribute("data") - 1);
    }
  } else {
    day.setAttribute("data", "0");
  }
}
function dayFunc() {
  day.innerHTML = day.getAttribute("data");
}

function concatFunc() {
  secFunc();
  minFunc();
  hourFunc();
  dayFunc();
  if (
    sec.innerHTML === "0" &&
    min.innerHTML === "0" &&
    hour.innerHTML === "0" &&
    day.innerHTML === "0"
  ) {
    clearInterval(secCount);
  }
}

let secCount = setInterval(concatFunc, 1000);
