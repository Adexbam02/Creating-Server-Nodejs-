const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

// register view engine
app.set("view engine", "ejs");

//listen for requests
app.listen(3300);

// middleware & static file
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  //   res.send("<p>Home</p>");
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectur",
    },
    {
      title: "Mario finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectur",
    },
    {
      title: "How to finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "error" });
});
