import util from "util";
import fs from "fs"

var txt = "Congratulate %s on his %dth birthday!";
var result = util.format(txt, "Jhon", 18);
var debuglog = util.debuglog("foo");

var test = debuglog("hello from foo [%d]", 123);

console.log(result);
console.log(test);

fs.access("file/that/does/not/exist", (err) => {
  const name = util.getSystemErrorName(err.errno);
  console.error(name);
});
