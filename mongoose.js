const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/node-js";
const userSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  age: Number,
});

const saveInDb = async () => {
  const UserModel = mongoose.model("node", userSchema);
  await mongoose.connect(url);
  let data = new UserModel({
    name: "amit kumar sharma",
    mobile: 9876543212,
    age: 76,
    location: "abc",
  });
  let result = await data.save();
  console.log(result);
};
// saveInDb();
const updateInDb = async () => {
  const UserModel = mongoose.model("node", userSchema);
  await mongoose.connect(url);
  let data = await UserModel.updateOne(
    { name: "amit kumar sharma" },
    {
      $set: {
        age: 42,
        name: "saurabh",
      },
    }
  );
  console.log(data);
};
// updateInDb();
const deleteInDb = async () => {
  const UserModel = mongoose.model("node", userSchema);
  await mongoose.connect(url);
  let data = await UserModel.deleteOne({ name: "saurabh" });
  console.log(data);
};
// deleteInDb();
const findInDb = async () => {
  const UserModel = mongoose.model("node", userSchema);
  await mongoose.connect(url);
  let data = await UserModel.find();
  console.log(data);
};
findInDb();
