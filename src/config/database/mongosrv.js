const mongoose = require("mongoose");

const configDB = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
};

const connect = async () => {
  try {
    const mongoURI = process.env.MONGO_SRV;
    await mongoose.connect(mongoURI, configDB);
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connect };