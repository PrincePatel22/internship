function inputValidation() {
  const num = document.getElementById("id1");
  if (!num.checkValidity()) {
    document.getElementById("msg").innerHTML = num.validationMessage;
  } else {
    document.getElementById("msg").innerHTML = "Input is valid";
  }
}

function myFunction() {
  const num = document.getElementById("id2");
  if (num.validity.rangeOverflow) {
    document.getElementById("msg2").innerHTML = "Value is large";
  } else if (num.validity.rangeUnderflow) {
    document.getElementById("msg2").innerHTML = "Value is small";
  } else {
    document.getElementById("msg2").innerHTML = "Input is valid";
  }
}

function goBack() {
  window.history.back();
}

function goBackTwo() {
  window.history.back(-2);
}

let length = window.history.length;
document.getElementById("msg3").innerHTML = length;
localStorage.setItem("Name", "Parth");
localStorage.removeItem("Name");
localStorage.setItem("Name", "Parth");
document.getElementById("msg4").innerHTML = localStorage.getItem("Name");
localStorage.clear();
// the sessionStorage object stores data for one session

sessionStorage.setItem("Name", "Priyansh");
sessionStorage.removeItem("Name"); // remove data from session storage
sessionStorage.setItem("Name", "Priyansh");
document.getElementById("msg5").innerHTML = sessionStorage.getItem("Name");
var x = localStorage.length;
document.getElementById("msg6").innerHTML = x;

getText("fetch.txt");

async function getText(file) {
  let myFile = await fetch(file);
  let myText = await myFile.text();
  document.getElementById("fetch").innerHTML = myText;
}

const a = document.getElementById("loc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition); // you can use watchPosition() for accurate cordinate.
  } else {
    a.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  a.innerHTML =
    position.coords.latitude +
    " is your latitude. " +
    position.coords.longitude +
    " is your longitude. ";
}
