const person = { name: "Parth", age: "22", edu: "B.A" };
document.write(person.name);
person["name"] = "<br>" + "Priyansh";
document.write(person.name);
const company = {
  employee: { name: "John", age: 30, city: "New York" },
  employees: ["John", "Anna", "Peter"],
  lname: "null",
};

const text = '{"name":"John", "age":30, "city":"New York"}'; // we always receive data in string format
const car = '["Ford","Audi","BMW"]';
const obj = JSON.parse(text); // parse convert data from string to object
const a = JSON.parse(car);
document.write("<br>" + obj.name);
document.write("<br>" + a[0]);

const obj1 = { name: "Maulik", age: 52, city: "Ahmedabad" }; //
const myJSON = JSON.stringify(obj1);
const arr = ["John", "Peter", "Sally", "Jane"]; // stringify convert data from object to string
const myArr = JSON.stringify(arr);
document.write("<br>" + myJSON);
document.write("<br>" + myArr);
