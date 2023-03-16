const cars = ["Saab", "Volvo", "BMW"];
const bikes = ["Hero", "Honda", "Yamaha"];
console.log(typeof cars);
console.log(cars.toString());
console.log(cars.pop());
console.log(cars.push("Audi"));
console.log(cars.shift());
console.log(cars.unshift("Honda"));
console.log(cars.unshift("Honda"));
console.log(cars.concat(bikes));
console.log(cars.concat("Hundai"));
console.log(cars.splice(12, 23, "ABCD"));
console.log(cars.slice(3));
console.log(cars.sort());
console.log(cars.reverse());
function myFunction(total, value, index, array) {
  return total + value;
}
console.log(cars.reduce(myFunction));
console.log(cars.reduceRight(myFunction));
console.log(cars.filter(myFunction));
console.log(cars.map(myFunction));
console.log(cars.reduceRight(myFunction));
console.log(cars.every(myFunction));
console.log(cars.some(myFunction));
console.log(cars.findIndex(myFunction));
console.log(cars.entries());

let d = new Date();
let a = new Date("2022-03-25");
let f = new Date(2018, 11, 24);
let e = 3.6;
console.log(d);
console.log(a);
console.log(f);
console.log(a.toDateString());
console.log(a.toString());
console.log(a.toUTCString());
console.log(a.toISOString());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getFullYear());
console.log(a.getSeconds());
console.log(a.getMilliseconds());
console.log(a.getTime());
console.log(a.getHours());
console.log(d.setFullYear(2012));
console.log(d.setMonth(0));
console.log(
  Math.E,
  Math.PI,
  Math.SQRT2,
  Math.SQRT2,
  Math.LN10,
  Math.LN2,
  Math.LOG10E,
  Math.LOG2E
);
console.log(Math.round(e));
console.log(Math.ceil(e));
console.log(Math.floor(e));
console.log(Math.trunc(e));
console.log(Math.pow(4, 3));
console.log(Math.sqrt(4));
console.log(Math.abs(-4));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.sin(90));
console.log(Math.log(1));
console.log(Math.log2(10));
console.log(Math.floor(Math.random(0, 1) * 1000000)); // generate random number
