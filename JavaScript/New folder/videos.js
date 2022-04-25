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
