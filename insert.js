const dbConnection = require("./mongodb");
// for single data insert
// const insert = async () => {
//   const db = await dbConnection();
//   const result = await db.insertOne({
//     name: "Aman kumar",
//     age: 87,
//     mobile: 9098765432,
//   });

//   //   result.then((res) => {
//   //     console.log("created");
//   //   });
//   //   result.catch((res) => {
//   //     console.log("errr");
//   //   });
//   console.log(result);
// };

const insert = async () => {
  const db = await dbConnection();
  const result = await db.insertMany([
    {
      name: "ankit kumar",
      age: 7,
      mobile: 9098764578,
    },
    {
      name: "akash kumar",
      age: 8,
      mobile: 90987654522,
    },
    {
      name: "anil kumar",
      age: 78,
      mobile: 9098765432,
    },
    {
      name: "atul kumar",
      age: 85,
      mobile: 9098765432,
    },
  ]);

  //   result.then((res) => {
  //     console.log("created");
  //   });
  //   result.catch((res) => {
  //     console.log("errr");
  //   });
  console.log(result);
};

insert();
