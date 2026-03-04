const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
require("dotenv").config({ path: "../.env" }); // Load env vars from parent directory

const MONGO_URL = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Review.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "699b724572e93f8842a1e30f" }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
  // mongoose.connection.close();
}
initDB();

