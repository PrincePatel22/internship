const person = {
  // create an object
  fname: "John",
  lname: "Doe",
  age: 50,
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  set lang(value) {
    this.language = value;
  },
  get lang() {
    return this.language.toUpperCase();
  },
};
console.log(person);
const car = {
  carName: {
    // nested object
    car1: "bmw",
    car2: "audi",
  },
};
const car1 = {
  carName: {
    // nested object
    car1: [{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] }],
  },
};

const person1 = new Object();
person1.fname = "Parth";
person1.lname = "Patel";
person1.age = 22;
person1.country = "india";

document.getElementById("obj").innerHTML = person.fname + " " + person.lname;
document.getElementById("obj1").innerHTML = person1.fname + " " + person1.age;
document.getElementById("obj2").innerHTML = person.country;

delete person.age;
document.getElementById("obj3").innerHTML = person.age;
document.getElementById("obj4").innerHTML = car.carName.car1;
document.getElementById("obj5").innerHTML = person.fullName(); // with () you access object and without you access definetion

let txt = "";
for (let x in person1) {
  txt += person1[x] + " ";
}

document.getElementById("obj6").innerHTML = txt;
document.getElementById("obj7").innerHTML = Object.values(person1);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue"); // constructor
console.log(myFather);

// Iterables
function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n };
    },
  };
}
const n = myNumbers();
n.next();
n.next();
n.next();

const letter = new Set();

letter.add("5");
letter.add("6");
letter.add("6");
letter.delete();
console.log(typeof letter);
console.log(letter.key);
console.log(letter.size);
console.log(letter instanceof Set);

const number = new Map([
  ["first", 100],
  ["second", 200],
  ["third", 300],
]);
number.set("fourth", 400);
console.log(number.get("fourth"));
number.set("fourth", 40);
console.log(number.get("fourth"));
number.delete("third");
console.log(number.has("third"));
number.clear();
console.log(number.size);
console.log(number.keys);

Object.defineProperty(person1, "age", { value: "NO" });
console.log(person1.age);

Object.preventExtensions(person1);
Object.defineProperty(person1, "age", { value: "YES" });
console.log(person1.age);
console.log(Object.isExtensible(person1));

console.log(Object.getOwnPropertyNames(person1));
console.log(Object.isSealed(person1));
Object.seal(person1);
console.log(Object.isSealed(person1));
Object.freeze(person1);
console.log(Object.isFrozen(person1));
