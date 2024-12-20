import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
// });

// console.log(process.env.CLOUDINARY_NAME, "CLoud Name");
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const resp = cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file uploaded to cloudinary successfully");
    return resp;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export default uploadOnCloudinary;
