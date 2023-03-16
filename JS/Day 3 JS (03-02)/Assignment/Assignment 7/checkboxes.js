const allchecked = document.getElementById("checkall");
const checkbox = document.getElementsByName("countries");

function checkall() {
  const countries = Array.from(checkbox);
  if (allchecked.checked === true) {
    countries.forEach((value) => {
      value.checked = true;
    });
  } else {
    countries.forEach((value) => {
      value.checked = false;
    });
  }
}

function validateCheck() {
  const countries = Array.from(checkbox);
  if (countries.every((value) => value.checked)) {
    allchecked.checked = true;
  } else {
    allchecked.checked = false;
  }
}
