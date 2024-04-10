const express = require("express");
const app = express();
const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please Provide Age");
  }
  next();
};
//  application  level middileware 
// app.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("Welcome to home page");
});
app.get("/users", (req, resp) => {
  resp.send("Welcome to user page");
});
//  router level middileware 
app.get("/about",reqFilter,  (req, resp) => {
  resp.send("Welcome to user page");
});

app.listen(5000);
