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
