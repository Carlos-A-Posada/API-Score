const mongoose = require("mongoose");
const fs = require('fs')
let ca = fs.readFileSync("./rds-combined-ca-bundle.pem");

const configDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  tlsCAFile: ca,
  ssl : true
}

const connect = async () => {
  try {
    const url = process.env.MONGODB_URI;
    await mongoose.connect(url, configDB);
    console.log("MongoDB is conected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connect };