var buf = Buffer.alloc(15);
var buf2 = Buffer.from("Hello, and welcome to Rome!");
var buf3 = Buffer.allocUnsafe(15);
var x = Buffer.from("abc");
var buf4 = Buffer.from("Hello, and welcome to Rome!");
var buf5 = Buffer.from("abc");
buf5.write("qq", 1);

console.log(buf);
console.log(buf2.includes("welcome"));
console.log(buf3);
console.log(Buffer.isBuffer(x));
console.log(buf4.lastIndexOf("e"));
console.log(buf5.toString());
console.log(buf5.toJSON());
for (x of buf5.values()) {
  console.log(x);
}
