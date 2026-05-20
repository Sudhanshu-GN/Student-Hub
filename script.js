let activeInput = 'num1';

function addNumber(number) {
  let input = document.getElementById(activeInput);
  input.value += number;
}

document.getElementById("num1").addEventListener("click", function() {
  activeInput = 'num1';
});

document.getElementById("num2").addEventListener("click", function() {
  activeInput = 'num2';
});

function calculate(operator) {

  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultBox").innerText = "Enter Numbers";
    return;
  }

  switch(operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
  }

  document.getElementById("resultBox").innerText =
    num1 + " " + operator + " " + num2 + " = " + result;
}

function clearAll() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultBox").innerText = "Result = 0";
}