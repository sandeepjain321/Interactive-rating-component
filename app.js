let container = document.querySelector(".container");
let submitContainer = document.querySelector(".submit-container");
let submitBtn = document.querySelector(".submit");
let ratinginfo = document.querySelector(".rating-info");
let btn = document.querySelector(".button");

submitBtn.onclick = function () {
  submitContainer.classList.add("show");
  container.classList.remove("show");
};

btn.onclick = function () {
  ratinginfo.innerText = `you selected ${btn.innerText} out of 5`;
};
