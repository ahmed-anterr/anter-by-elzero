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
