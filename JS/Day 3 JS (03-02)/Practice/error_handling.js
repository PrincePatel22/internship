try {
    alerct("Hello world"); // we misspelled alert so we get message
}

catch(error){
      document.getElementById("catch").innerHTML = error.message;
}

function myFunction() {
  let x = document.getElementById("demo").value;
  let y = document.getElementById("finally");
  try {
    if (x.trim() == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "is too high";
    if (x < 5) throw "is too low";
  } catch (err) {
    y.innerHTML = "Input " + err;
  } finally {
    document.getElementById("demo").value = ""; // when try and catch fail then finally run
  }
}