// const app = require("./app.js");
// console.log(app);
// const http = require("http");
// http.createServer((req,resp)=>{
//     resp.write('hello this is saurabh');
//     resp.end();
// }).listen(3000)
// function dataControl(req, resp) {
//   resp.write("Hello this is first program for using https server");
//   resp.end();
// }
// const dataControl = (req, resp) => {
//   resp.write("Hello this is first program for using https server");
//   resp.end();
// };
// http.createServer(dataControl).listen(3000);
// let chalk = require('chalk')
// console.log('hello',chalk.colorNames[red,green,yellow]);
// console.log(chalk.blue('Hello world!'));

// CRETAE A NEW SERVICE WITH API CREATION
const http = require("http");
// http,
//   http.createServer((req, resp) => {
//     resp.writeHead(200, { "content-Type": "applicationjson" });
//     resp.write(
//       JSON.stringify({ name: "saurabh kushwaha", email: "Sanu@gmail.com" })
//     );
//     resp.end();
//   }).listen(3000)
// IMPORT DATA FROM OTHER JS FILE
// const data = require("./data");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-Type": "applicationjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(3000);

// using express

const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("", (req, resp) => {
  console.log(req.query.name);
  resp.send("Welcome," + req.query.name);
});

app.get("/about", (req, resp) => {
  resp.send("Welcome, This is a About Page");
});

app.get("/help", (req, resp) => {
  resp.send("Welcome, This is a Help Page");
});

app.get("/profile", (req, resp) => {
  const user = {
    name: "Amit",
    mobile: "8787878785",
  };
  resp.render("profile", { user });
});

app.listen(5000);
