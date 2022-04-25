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
