function result() {
  const selectedTech = form.tech.value;
  const span = document.getElementById("selected");

  span.innerHTML = selectedTech;
}
