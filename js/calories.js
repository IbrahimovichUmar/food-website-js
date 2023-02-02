let genderActive = document.querySelectorAll(".calculating__choose-item");
let physicActive = document.querySelectorAll(".calculating__choose-item3");
let constitutionInpts = document.querySelectorAll(
  ".calculating__choose_medium input"
);
let result = document.querySelector("#result");

let userInfo = {
  gender: "woman",
};

genderActive.forEach((item) => {
  item.onclick = () => {
    genderActive.forEach((el) =>
      el.classList.remove("calculating__choose-item_active")
    );
    item.classList.add("calculating__choose-item_active");

    let gen = item.getAttribute("data-g");
    userInfo.gender = gen;
  };
});

// Calculate

getAndSetDataFromInputs(constitutionInpts, userInfo);
physicActive.forEach((item) => {
  item.onclick = () => {
    physicActive.forEach((el) =>
      el.classList.remove("calculating__choose-item_active")
    );
    item.classList.add("calculating__choose-item_active");
    let act = item.getAttribute("data-act");
    userInfo.act = +act;

    if (userInfo.gender === "woman") {
      let BMR =
        447.6 +
        9.2 * userInfo.weight +
        3.1 * userInfo.height -
        4.3 * userInfo.age;

      BMR = BMR * userInfo.act;

      result.innerHTML = isNaN(Math.round(BMR))
        ? "Заполните свою конституцию"
        : Math.round(BMR);
    } else {
      let BMR =
        88.36 +
        13.4 * userInfo.weight +
        4.8 * userInfo.height -
        5.7 * userInfo.age;

      BMR = BMR * userInfo.act;

      result.innerHTML = isNaN(Math.round(BMR))
        ? "Заполните свою конституцию"
        : Math.round(BMR);
    }
  };
});

let dataInputs = document.querySelectorAll(".order__from input");
let data = {};
getAndSetDataFromInputs(dataInputs, data);
function getAndSetDataFromInputs(inputs, obj) {
  inputs.forEach((inp) => {
    inp.oninput = () => {
      obj[inp.id] = inp.value;
    };
  });
}
