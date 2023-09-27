import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URI);
    console.log("Db is connected");
  } catch (error) {
    console.log(error.message);
    console.log("Db is not connected");
  }
};

export default connectDb;
