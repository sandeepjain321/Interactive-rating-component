let container = document.querySelector(".container");
let submitContainer = document.querySelector(".submit-container");
let submitBtn = document.querySelector(".submit");
let ratinginfo = document.querySelector(".rating-info");
let btn = document.querySelector(".button");

// mazahir

let currentRatingValue = 0;
const ratingContainer = document.querySelector(".ratings");
const allButtons = document.querySelectorAll(".button");

// to remove the active class from all the button
function removeActiveState() {
  allButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

// adding the active class to clicked rating button after removing the previous ratings and updating the thank-you text
ratingContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.classList.contains("button")) return;
  removeActiveState();
  currentRatingValue = target.innerText;
  target.classList.add("active");
  ratinginfo.innerText = `You selected ${currentRatingValue} out of ${allButtons.length}`;
});

// if user submits without giving rating then it alert's the user to give rating
submitBtn.addEventListener("click", function () {
  if (currentRatingValue === 0) {
    alert("Give rating before submitting!");
    return;
  }

  submitContainer.classList.add("show");
  container.classList.remove("show");
});

// mazahir

// submitBtn.onclick = function () {
//   submitContainer.classList.add("show");
//   container.classList.remove("show");
// };

// btn.onclick = function () {
//   ratinginfo.innerText = `you selected ${btn.innerText} out of 5`;
// };
