function onChange() {
  console.log("onchange event");
}

function onClick() {
  console.log("onclick event");
}

function onMouseOver() {
  console.log("onmouseover event");
}

function onKeyDown() {
  console.log("onkeydown event");
}

let text = "  ABCDE  ";
let text1 = "ABCDE";
let text2 = "The rain in SPAIN stay stay mainly in the plain";
let fruits = "Apple, Banana, Kiwi";
let y = new String("Prince");
console.log(typeof y);
console.log(text.length);
console.log(fruits.slice(7, 13));
console.log(fruits.substring(0, 5));
console.log(fruits.substr(7, 4));
console.log(fruits.replace("Kiwi", "Orange"));
console.log(fruits.toUpperCase());
console.log(text.trim().toLowerCase());
console.log("hello".concat(" ", "World"));
console.log(text.trimStart());
console.log(text.trimEnd());
console.log(text1.charCodeAt(0));
console.log(text1.charAt(0));
console.log(text[2]);
console.log(text2.indexOf("SPAIN"));
console.log(text2.lastIndexOf("ABS"));
console.log(text2.match("sta"));
console.log(text2.search("rain"));
console.log(text2.includes("ABCD", 10));
console.log(text2.startsWith("S"));
console.log(text2.endsWith("n"));
let x = 123;
let z = 9.656;

console.log(z.toExponential(10));
console.log(z.toFixed(2));
console.log(z.toPrecision(2));
console.log(z.valueOf());
console.log(parseInt("10.325"));
console.log(Number.isInteger("abc"));
console.log(Number.parseFloat("12.56453156"));
console.log(Number.isSafeInteger("33.36"));
console.log(Number.parseInt("15.23"));
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
