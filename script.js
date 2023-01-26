class Calculator {
  constructor(displayPrevious, displayCurrent) {
    this.displayPrevious = displayPrevious;
    this.displayCurrent = displayCurrent;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {

  }

  appendText(number) {
    this.currentOperand = number;
  }

  updateDisplay() {
    this.displayCurrent.textContent = this.currentOperand;
  }

}




const numberBtns = document.querySelectorAll(".number");
const displayCurrent = document.querySelector(".display__current");
const displayPrevious = document.querySelector(".display__previous");
const clearBtn = document.querySelector(".clear");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");

const calculator = new Calculator(displayPrevious, displayCurrent);

Array.from(numberBtns).forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendText(button.textContent);
    calculator.updateDisplay();
  });
})