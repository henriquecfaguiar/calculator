const numbers = document.querySelectorAll(".number");
const displayText = document.querySelector(".display__text");
const clearBtn = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");

clearBtn.addEventListener("click", clearDisplay);
equalBtn.addEventListener("click", returnResult);

operators.forEach(operator => {
  operator.addEventListener("click", getFirstValue);
});

numbers.forEach(number => {
  number.addEventListener("click", addToDisplay)
});

function addToDisplay(e) {
  displayText.textContent += e.target.textContent;
};

function clearDisplay() {
  displayText.textContent = "";
};

function getFirstValue() {
  const firstValue = Number(displayText.textContent);
};

function returnResult() {

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