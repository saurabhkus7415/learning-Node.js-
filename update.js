const dbConnection = require("./mongodb");

const updateData = async () => {
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: "Aman kumar" },
    { $set: { name: "suman kumari" } }
  );
  console.log(result);
};
updateData();
