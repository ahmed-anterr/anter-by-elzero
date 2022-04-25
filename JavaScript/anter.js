//Start Mega Menu ..

let megaMenu = document.querySelector(".other-links");
let otherLinks = document.querySelector(".mega");

otherLinks.addEventListener("click", function () {
  megaMenu.classList.remove("hidden");
  megaMenu.classList.add("visible");
  document.onmousedown = () => {
    megaMenu.classList.remove("visible");
    megaMenu.classList.add("hidden");
  };
});

//End Mega Menu ..

// Start Skills ..
let prog = document.querySelectorAll(".prog");
let skillSection = document.querySelector(".skills");
let skillStarted = false;

function progressUp(el) {
  let progress = el.dataset.progress;
  let width = 0;
  let progressGrow = setInterval(() => {
    width++;
    if (width == progress) {
      clearInterval(progressGrow);
    }
    el.style.width = `${width}%`;
    el.setAttribute("progress-num", `${width}%`);
  }, 1500 / parseInt(progress));
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillSection.offsetTop - 100) {
    if (!skillStarted) {
      prog.forEach((el) => progressUp(el));
    }
    skillStarted = true;
  }
});
// End Skills ..

// Start Last Events ..
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

// End Last Events ..

// Start Top Videos ..

let imgs = document.querySelectorAll(".videos .image img");
let links = document.querySelectorAll(".videos ul li");
let txt = document.querySelector(".videos #txt");

links.forEach((li) => {
  li.addEventListener("click", () => {
    txt.innerHTML = "";

    links.forEach((li) => {
      li.classList.remove("active-video");
    });
    li.classList.add("active-video");

    imgs.forEach((img) => {
      img.classList.remove("selected");
      if (li.dataset.match === img.dataset.match) {
        img.classList.add("selected");
        let myTxt = li.firstElementChild.innerHTML;
        txt.append(myTxt);
      }
    });
  });
});

// End Top Videos ..

// Start Stats ..

let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .num");
let statsStarted = false;

function growUp(el) {
  let grow = el.dataset.grow;
  let inet = setInterval(() => {
    el.innerHTML++;
    if (el.innerHTML === grow) {
      clearInterval(inet);
    }
  }, 2000 / grow);
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop - 100) {
    if (!statsStarted) {
      nums.forEach((span) => growUp(span));
    }
    statsStarted = true;
  }
});

// End Stats ..

// Start Scroll To Top ..
let toTop = document.querySelector("#scroll-to-top");
let heightToShow = document.querySelector("#articles");

window.addEventListener("scroll", function () {
  if (window.scrollY >= heightToShow.offsetTop) {
    toTop.style.display = "block";
  } else if (window.scrollY < heightToShow.offsetTop) {
    toTop.style.display = "none";
  }
});

toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// End Scroll To Top ..
