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
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendText(number) {
    if (this.currentOperand.toString().includes(".") && number === ".") {
      return;
    }
    this.currentOperand += number.toString();
  }

  defineOperator(operator) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.operate();
    }
    this.operation = operator;
    this.previousOperand = `${this.currentOperand} ${operator}`;
    this.currentOperand = "";
  }

  updateDisplay() {
    this.displayCurrent.textContent = this.currentOperand;
    this.displayPrevious.textContent = this.previousOperand;
  }

  roundLongDecimals(number) {
    if (number.toString().split(".")[1].length > 4) {
      this.currentOperand = Math.round(number * 10000) / 10000;
    } else {
      return;
    }
  }

  operate() {
    if (this.currentOperand === "") return;
    switch (this.operation) {
      case "+":
        this.currentOperand = +this.previousOperand.toString().split("+")[0] + +this.currentOperand;
        this.previousOperand = "";
        break;
      case "-":
        this.currentOperand = +this.previousOperand.toString().split("-")[0] - +this.currentOperand;
        this.previousOperand = "";
        break;
      case "*":
        this.currentOperand = +this.previousOperand.toString().split("*")[0] * +this.currentOperand;
        this.previousOperand = "";
        break;
      case "÷":
        if (this.currentOperand == 0) {
          alert("Error: division by zero.");
          return;
        }
        this.currentOperand = +this.previousOperand.toString().split("÷")[0] / +this.currentOperand;
        this.previousOperand = "";
        break;
      default:
        return;
    }

    if (this.currentOperand.toString().includes(".")) this.roundLongDecimals(this.currentOperand);
    return;
  }
}

const numberBtns = document.querySelectorAll(".number");
const displayCurrent = document.querySelector(".display__current");
const displayPrevious = document.querySelector(".display__previous");
const clearBtn = document.querySelector(".clear");
const operatorBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const deleteBtn = document.querySelector(".delete");
const allBtns = document.querySelectorAll('button');

const calculator = new Calculator(displayPrevious, displayCurrent);

numberBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendText(button.textContent);
    calculator.updateDisplay();
  });
})

operatorBtns.forEach(button => {
  button.addEventListener("click", () => {
    calculator.defineOperator(button.textContent);
    calculator.updateDisplay();
  });
})

equalBtn.addEventListener("click", () => {
  calculator.operate();
  calculator.updateDisplay();
})

clearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
})

document.addEventListener("keyup", (e) => {
  if (!isNaN(e.key) || e.key === ".") {
    calculator.appendText(e.key);
    calculator.updateDisplay();
  } else if (e.key === "Backspace") {
    calculator.delete();
    calculator.updateDisplay();
  } else if (e.key === "=" || e.key === "Enter") {
    calculator.operate();
    calculator.updateDisplay();
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
    if (e.key === "/") calculator.defineOperator("÷");
    calculator.defineOperator(e.key);
    calculator.updateDisplay();
  } else {
    return;
  }
})

// Active Effect on Keyboard
document.addEventListener("keydown", (e) => {
  allBtns.forEach(btn => {
    if (btn.innerHTML === e.key) {
      btn.classList.add('active');
    } else if (e.key === 'Backspace') {
      deleteBtn.classList.add('active');
    }
  })
})

document.addEventListener("keyup", (e) => {
  allBtns.forEach(btn => {
    if (btn.innerHTML === e.key) {
      btn.classList.remove('active');
    } else if (e.key === 'Backspace') {
      deleteBtn.classList.remove('active');
    }
  })
})