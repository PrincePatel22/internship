addContact = () => {
  const div = document.createElement("div");
  const add = document.createElement("input");
  const close = document.createElement("a");
  close.setAttribute("class", "remove");
  close.addEventListener("click", removeContact);
  close.innerHTML = "X";
  document.body.appendChild(div);
  div.append(add);
  div.appendChild(close);
};

removeContact = (a) => {
  a.target.parentNode.remove();
};