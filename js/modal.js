let modalWindow = document.querySelector(".modal");
let modalBg = document.querySelector(".modal__bg");
let openBtns = document.querySelectorAll("#modal__btns");
let closeBtns = document.querySelectorAll(".modal__close");

openBtns.forEach((btnOpen) => {
  btnOpen.onclick = () => {
    modalWindow.style.display = "flex";
    modalBg.style.display = "block";

    setTimeout(() => {
      modalWindow.style.opacity = "1";
      modalBg.style.opacity = "1";
      modalWindow.style.scale = "1";
      modalWindow.style.rotate = "0deg";
    }, 200);
  };
});

closeBtns.forEach((btnClose) => {
  btnClose.onclick = () => {
    modalWindow.style.display = "none";

    setTimeout(() => {
      modalWindow.style.opacity = "0";
      modalBg.style.opacity = "0";
      modalWindow.style.scale = ".2";
      modalWindow.style.rotate = "360deg";
    }, 200);
  };
});
