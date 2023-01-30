let products = {
  0: "./img/tabs/elite.jpg",
  1: "./img/tabs/hamburger.jpg",
  2: "./img/tabs/post.jpg",
  3: "./img/tabs/vegy.jpg",
};

let tabChoice = document.querySelectorAll("div[data-type]");
let tabImg = document.querySelector(".tabcontainer .tabcontent");

tabChoice.forEach((item) => {
  item.onclick = () => {
    let key = item.getAttribute("data-type");
    let imgPath = products[key];

    tabImg.style.backgroundImage = `url("${imgPath}")`;

    tabChoice.forEach((el) => el.classList.remove("tabheader__item_active"));
    item.classList.add("tabheader__item_active");
  };
});
