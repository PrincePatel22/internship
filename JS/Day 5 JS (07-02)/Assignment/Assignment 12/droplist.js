const selected = document.getElementById("select");
const output = document.getElementById("output");

const selectedCountry = () => {
  switch (select.value) {
    case "none":
      output.innerHTML = "";
      for (let i = 1; i < select.children.length; i++) {
        output.innerHTML += select.children[i].label + ", ";
      }
      break;
    default:
      output.innerHTML = select.value;
      break;
  }
};

window.onload = selectedCountry(); // this shows default output on loading
/*
const selected = document.getElementById("select");
const output = document.getElementById("output");

const selectedCountry = () => {
  if (selected.value == "none") {
    output.innerHTML = "Your Selected Country : UK,USA,India,Spain,Canada";
  } else {
    output.innerHTML = "Your Selected Country : " + selected.value;
  }
};
*/
