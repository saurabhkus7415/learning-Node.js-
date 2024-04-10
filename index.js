const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
async function getData() {
  let result = await client.connect();
  let db = result.db("node-js");
  let collection = db.collection("node");
  let resp = await collection.find({}).toArray();
  console.log(resp);
}
getData();
