import http from "http";
import url from "url";
// create server
http
  .createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
  })
  .listen(8000);

// server with header
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("<b>hello world with header</b>");
    res.end();
  })
  .listen(8001);

// read the url
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8002);

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);
