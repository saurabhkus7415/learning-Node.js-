const express = require("express");
const app = express();
const reqFilter = require("./middleware");
//  application  level middileware
// app.use(reqFilter);
const route = express.Router();
route.use(reqFilter);
app.get("/", (req, resp) => {
  resp.send("Welcome to home page");
});
app.get("/users", (req, resp) => {
  resp.send("Welcome to user page");
});
//  router level middileware
app.get("/about", reqFilter, (req, resp) => {
  resp.send("Welcome to about page");
});

// using export router for using middleware
route.get("/contact", (req, resp) => {
  resp.send("Welcome to contact page");
});
route.get("/help", (req, resp) => {
  resp.send("Welcome to help page");
});

app.use("/", route);

app.listen(5000);
