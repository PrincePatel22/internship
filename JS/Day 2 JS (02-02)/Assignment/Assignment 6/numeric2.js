let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // use this to show output
  fetchInput();
});

function fetchInput(event) {
  input = document.getElementById("input");
  message = document.getElementById("message");

  if (input.value == null || input.value == "") {
    input.setAttribute("class", '${input.getAttribute("class")} input-error');
    message.innerHTML = "Please enter any numeric value";
    return;
  } else if (+input.value !== +input.value) {
    input.setAttribute("class", '${input.getAttribute("class")} input-error');
    message.innerHTML =
      "Only numeric values are allowed. Please re-enter the value";
    return;
  } else {
    input.setAttribute("class", "input");
    message.setAttribute("class", "message-class");
    message.innerHTML = "Entered value is a numeric value";
  }
}
