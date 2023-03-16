import path from "path";

var filename = path.basename("/Users/Refsnes/demo_path.js");
var directories = path.dirname("/Users/Refsnes/demo_path.js");
var ext = path.extname("/Users/Refsnes/demo_path.js");
var obj = { dir: "C:\\Users\\Refsnes", base: "demo_path.js" };
var x = path.join("Users", "Refsnes", "demo_path.js");

console.log(filename);
console.log(directories);
console.log(ext);
console.log(path.format(obj));
console.log(x);
