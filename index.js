// const app = require('./app.js')
// console.log(app);
const http = require("http");
// http.createServer((req,resp)=>{
//     resp.write('hello this is saurabh');
//     resp.end();
// }).listen(3000)
// function dataControl(req, resp) {
//   resp.write("Hello this is first program for using https server");
//   resp.end();
// }
const dataControl = (req, resp) => {
  resp.write("Hello this is first program for using https server");
  resp.end();
};
http.createServer(dataControl).listen(3000);
