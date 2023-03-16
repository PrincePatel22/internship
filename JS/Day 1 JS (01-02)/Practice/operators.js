function getVar() {
  return Math.round(Math.random(0, 1) * 20);
}
function homePage() {
  add();
  sub();
  mul();
  div();
  rem();
  exp();
}

window.onload = homePage;

function add() {
  let var1 = getVar();
  let var2 = getVar();
  let var3 = var1 + var2;
  document.getElementById("add").innerHTML = var1 + "+" + var2 + "=" + var3;
}

function sub() {
  let var1 = getVar();
  let var2 = getVar();
  let var3 = var1 - var2;
  document.getElementById("sub").innerHTML = var1 + "-" + var2 + "=" + var3;
}

function mul() {
  let var1 = getVar();
  let var2 = getVar();
  let var3 = var1 * var2;
  document.getElementById("mul").innerHTML = var1 + "*" + var2 + "=" + var3;
}

function div() {
  let var1 = getVar();
  let var2 = getVar();
  let var3 = var1 / var2;
  document.getElementById("div").innerHTML = var1 + "/" + var2 + "=" + var3;
}

function rem() {
  let var1 = getVar();
  let var2 = getVar();
  let var3 = var1 % var2;
  document.getElementById("rem").innerHTML = var1 + "%" + var2 + "=" + var3;
}

function exp() {
  let var1 = getVar();
  let var2 = getVar();
  let var3 = var1 ** var2;
  document.getElementById("exp").innerHTML = var1 + "**" + var2 + "=" + var3;
}

/*
let x = 2 * 2 + 1;
let apples = "2";
let oranges = "3";
apples + oranges; // concent string 23
+apples + +oranges; //  addition 5
let n = 2;
n = n + 5;
n += 5; //same as n = n + 5;

let count=3;
count++; increment
count--; decrement

a > b Greater than
a < b. less than
a == b this is equal
a = b b is asssigned to a
a => b Greater than or equal
a <= b Less than or equal
a != b a is not equal to b.

a && b
a || b
a ?? b

Conditional Statements
let a=2; 
let b=3;
if (a>b) {
    say="hello";
}

if (a>b) {
    say="Hello ";
} else {
    say="Hello world";
}

if (a>b) {
    say="Hello ";
} else if (a>c){
    say="Hello world";
} else {
    say="Hello everyone"
}

day=2; 
switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
} 
'Tuesday'

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
  case 2:
  case 3:
    day = "Wednesday";
    break;
  case 4:
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day ="Enjoy your day"
} 
let name = ["parth","Adnan","Jhon","Jeo","Smith"];
let temp ="";
for (let i=0;i<name.length;i++){
    temp += name[i];
}

let person={ fname:"Parth",lname:"Parikh"}
let temp =""
for (let i in person){
    temp += person[i]+" ";
}

let name = ["parth","Adnan","Jhon","Jeo","Smith"];
let name = "Prince";
let temp="";
for (let i of name){
    temp += i;
}

let temp=0;
let i=0;
while(i<5){
    temp += i;
    i++;
}

let temp=0;
let i=0;
do {
    temp += i;
    i++;
} while (i<5);

let x=add(5,5);
let y=add(6,6);
console.log(x);
console.log(y);
function add(a,b){
    return a+b;
}

add = function add(a,b){
    return a+b;
}

add = (a,b) => {
    return a-b;
}
*/
