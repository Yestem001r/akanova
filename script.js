// pricing
const buttons = document.querySelectorAll(".pricing-buttons button")
const contents = document.querySelectorAll(".pricing-content-point")

buttons.forEach((button, i)=> {
    button.addEventListener("click", function() {
        buttons.forEach((button)=> {
            button.classList.remove("active")
        })
        contents.forEach((content)=> {
            content.classList.remove("active")
        })
        button.classList.add("active")
        contents[i].classList.add("active")
    })
})


// Reviews
let rev = 0;
carousel(rev);
 
function previousReview() {
    rev = rev - 1;
    carousel(rev);
}
 
function nextReview() {
    rev = rev + 1;
    carousel(rev);
}
 
function carousel(review) {
    let reviews = document.getElementsByClassName("review__items");
 
    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "flex";
}


const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const toggleSign = question.querySelector(".toggle-sign i");
    if (answer.style.height === "0px" || !answer.style.height) {
      answer.style.height = answer.scrollHeight + "px";
      toggleSign.classList.remove("fa-plus");
      toggleSign.classList.add("fa-minus");
      question.classList.add("open");
    } else {
      answer.style.height = "0px";
      toggleSign.classList.remove("fa-minus");
      toggleSign.classList.add("fa-plus");
      question.classList.remove("open");
    }
  });
});
