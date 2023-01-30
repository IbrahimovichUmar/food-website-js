let slides = document.querySelectorAll(".offer__slide");
let prev = document.querySelector(".offer__slider-prev");
let next = document.querySelector(".offer__slider-next");
let slideIndex = 0;

function showSlides(n) {
  // if (n >= slides.length - 1) {
  //   slideIndex = -1;
  // }

  slides.forEach((slide) => {
    slide.classList.add("hide");
  });
  slides[n].classList.remove("hide");
  slides[n].classList.add("show", "fade");
}
showSlides(slideIndex);

next.onclick = () => {
  if (slideIndex >= slides.length - 1) {
    slideIndex = -1;
  }
  slideIndex++;
  showSlides(slideIndex);
};
prev.onclick = () => {
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  slideIndex--;
  showSlides(slideIndex);
};
