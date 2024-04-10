const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  let db = result.db("node-js");
  return (collection = db.collection("node"));
}
module.exports = dbConnection;
