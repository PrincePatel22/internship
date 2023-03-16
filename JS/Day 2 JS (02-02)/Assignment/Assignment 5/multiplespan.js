let tech = [];
function result() {
  const selectedTech = form.tech.value;
  const output = document.getElementById("selected");

  const span = document.createElement("span");
  if (!tech.includes(selectedTech)) {
    output.appendChild(span);
    span.innerHTML = selectedTech;
    span.style.margin = "5px";
    tech.push(selectedTech);
  }
}
