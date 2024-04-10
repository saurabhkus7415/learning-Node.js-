const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
// async function getData() {
//   let result = await client.connect();
//   let db = result.db("node-js");
//   let collection = db.collection("node");
//   let resp = await collection.find({name:'m40'}).toArray();
//   console.log(resp );
// }
// getData();

async function dbConnection() {
  let result = await client.connect();
  let db = result.db("node-js");
  return (collection = db.collection("node"));
}
// dbConnection().then((res) => {
//   res.find({name:'m40'}).toArray().then((data) => {
//     console.log(data);
//   });
// });
const main = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.warn(data);
};

main();
