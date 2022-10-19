const numbers = document.querySelectorAll(".number");
const displayText = document.querySelector(".display__text");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  displayText.textContent = "";
});

numbers.forEach(number => {
  number.addEventListener("click", addToDisplay)
});

function addToDisplay(e) {
  displayText.textContent += e.target.textContent;
  const currentDisplayText = displayText.textContent;
  console.log(currentDisplayText);
};

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "You must choose a valid operator";
  }
};