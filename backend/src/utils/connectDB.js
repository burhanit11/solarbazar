import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected Successfully.");
  } catch (error) {
    console.log("Connecting Database Error :", error);
  }
};

export default connectDB;
