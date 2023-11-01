const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log(error);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "652d881cfaa276d06b4bc414",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialize");
};

initDB();
