let before = document.querySelector(".before");
let after = document.querySelector(".after");
let after_container = document.querySelector(".img-container-after");
let before_container = document.querySelector(".img-container-before");
let container = document.querySelector(".container");
let slider = document.querySelector(".slider");

const slide = (e) => {
  let xPos = e.layerX;
  let size = container.offsetWidth;
  after_container.style.width = xPos + "px";
  slider.style.left = xPos + "px";

  if (xPos < 50) {
    after_container.style.width = 0;
    slider.style.left = 0;
  }
  if (xPos > size - 30) {
    after_container.style.width = size + "px";
    slider.style.left = size + "px";
  }
};
container.addEventListener("mousemove", slide);
