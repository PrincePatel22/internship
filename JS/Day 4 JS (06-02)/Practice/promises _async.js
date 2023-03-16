function display(text) {
  document.getElementById("temp").innerHTML = text;
}
function first() {
  display("First");
}
function second() {
  display("second");
}

second(); // executed in the sequence they are called. Not in the sequence they are defined.
first();

function myFunction(sum) {
  console.log(sum);
}

function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

myCalculator(5, 5, myFunction); // callback fuction passes as an argument

function wait() {
  console.log("Hello World");
}
setTimeout(wait, 3000); // wait is passed as an argement
setInterval(function wait() {
  console.log("Hello World");
}, 4000);

function myDisplayer(msg) {
  document.getElementById("para").innerHTML = msg;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 6) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

async function myDisplay() { // async function return a promise
  let myPromise = new Promise(function (resolve, reject) {
    resolve("Async/Await");
    reject("No");
  });
  document.getElementById("para").innerHTML = await myPromise; // await function wait for wait for a Promise
}
myDisplay();
