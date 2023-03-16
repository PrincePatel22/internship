import url from "url";

var baseUrl = "https://www.w3schools.com/nodejs/nodejs_url.asp";

var u = url.parse(baseUrl,true);
console.log(u.host); 
console.log(u.pathname); 
console.log(u.search);