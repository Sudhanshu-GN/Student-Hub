let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").innerText = currentInput;
}

function chooseOperator(operator) {
  currentInput += operator;
  document.getElementById("display").innerText = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById("display").innerText = currentInput;
  } catch (error) {
    document.getElementById("display").innerText = "Error";
  }
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").innerText = "0";
}