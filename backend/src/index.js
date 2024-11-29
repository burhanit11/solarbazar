import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./utils/connectDB.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const PORT = process.env.PORT;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
