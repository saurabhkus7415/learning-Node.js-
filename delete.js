const dbConnected = require("./mongodb");
const deleteData = async () => {
  let data = await dbConnected();
  let result = await data.deleteMany({ name: "atul kumar" });
  console.log(result);
};
deleteData();
