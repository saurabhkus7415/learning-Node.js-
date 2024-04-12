const express = require("express");
require("./config");
const user = require("./user");
const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = new user(req.body);
  const result = await data.save();
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await user.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await user.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await user.updateOne(req.params, { $set: req.body });
  resp.send(data);
});
app.get("/search/:key", async (req, resp) => {
  console.log(req.params);
  let data = await user.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  resp.send(data);
});

app.listen(5000);
