const output = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventDefault for not loading form
  calculation();
});
form.addEventListener("reset", (e) => {
  output.innerHTML = "";
});

// validate input fields for number or empty
const validation = (fnum, snum) => {
  if (fnum == "") {
    output.innerHTML = "Please enter first number";
    return false;
  } else if (snum == "") {
    output.innerHTML = "Please enter second number";
    return false;
  } else if (isNaN(fnum)) {
    output.innerHTML = "Please enter only numeric value for first number";
    return false;
  } else if (isNaN(snum)) {
    output.innerHTML = "Please enter only numeric value for second number";
    return false;
  } else {
    return true;
  }
};

calculation = () => {
  const firstNumber = +form.fnum.value;
  const secondNumber = +form.snum.value;
  const operation = form.operation.value;
  let result;
  if (validation(firstNumber, secondNumber)) {
    switch (operation) {
      case "add":
        result = add(firstNumber, secondNumber);
        output.innerHTML = "Result is : " + result;
        break;
      case "sub":
        result = sub(firstNumber, secondNumber);
        output.innerHTML = "Result is : " + result;
        break;
      case "mul":
        result = mul(firstNumber, secondNumber);
        output.innerHTML = "Result is : " + result;
        break;
      case "div":
        result = div(firstNumber, secondNumber);
        output.innerHTML = "Result is : " + result;
        break;
      default:
        output.innerHTML = "Please select the operation you want to perform";
        break;
    }
  }
};

// Arithmetic operations
const add = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};
const sub = (firstNumber, secondNumber) => {
  return firstNumber - secondNumber;
};
const mul = (firstNumber, secondNumber) => {
  return firstNumber * secondNumber;
};
const div = (firstNumber, secondNumber) => {
  return firstNumber / secondNumber;
};
