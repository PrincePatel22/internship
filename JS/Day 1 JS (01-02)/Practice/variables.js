let text = "Welcome to Javascript";
const birthDate = "Your Birth date is 10/10/2001";
let para = "This text is generated with onload.";
let isBoolean = 4 > 5;
let name = "world";
let myAge = null; /* This is null data type */
let age; /* This is undefined data type */
let n = 20;
n = 22;

function generateText() {
  alert(text);
  typeof age;
}

function generateNum() {
  alert(birthDate);
}

function generatePara() {
  document.getElementById("para").innerHTML = para;
}
window.onload = generatePara;

function evalute() {
  alert(`Hello ${name}!`);
}

function isGreater() {
  alert(isBoolean);
}
