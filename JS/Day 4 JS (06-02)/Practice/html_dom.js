// getElementById is a method and innerHTML is a property
document.getElementById("para").innerHTML = "Hello world using IDname";

const x = document.getElementsByClassName("para"); // this is return collection
const y = document.querySelectorAll("p.para");
const z = document.getElementsByTagName("p")
document.write(x[1].innerHTML);
document.write(y[1].innerHTML);


const elements = document.getElementsByTagName("p");
document.getElementById("para1").innerHTML = elements.length;

document.getElementById("a").style.border = "1px solid black";
document.getElementById("a").setAttribute("target", "_blank");
const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";
document.body.appendChild(para);
document.getElementById("para3").textContent = document.URL;
document.write(document.lastModified);
document.write(document.readyState);
document.write(document.title);
document.write(document.inputEncoding);
document.getElementById("myImage").src = "hii.jpg";
document.getElementById("para4").innerHTML = Date();
function validateForm() {
  let x = document.forms["form"]["fname"].value;
  if (x == "") {
    alert("Fill the vlaue");
    return false;
  }
}
document.getElementById("para6").style.color = "red";
const element = document.getElementById("para6");
element.remove();

document.write(z[1].innerHTML);