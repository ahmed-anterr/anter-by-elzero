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
