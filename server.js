const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "server.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      path += "about.html";
    case "/que":
      path += "que.html";
      res.statusCode = 200;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    // err ? console.log(err) : res.write(read), res.end();
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      //another way of doing it is to pass the data to the "end()" method if it is a single data, but multiple data we can use "write()"
      res.end(data);
    }
  });
});

server.listen(5000, "localhost", () => {
  console.log("Listening for request on the port");
});
