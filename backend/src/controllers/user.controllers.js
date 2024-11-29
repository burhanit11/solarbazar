import { User } from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(200).json({ message: "User already exists" });
    }

    const avatarLocalPath = req.file?.path;

    console.log(avatarLocalPath, "File");

    if (!avatarLocalPath) {
      return res.status(200).json({ message: "Avatar local path is missing." });
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    const user = await User.create({
      name,
      email,
      password,
      avatar: avatar?.url,
    });

    res.status(200).json({ message: "User Register Success", data: user });
  } catch (error) {
    res.status(200).json({ message: "Register Error", error });
  }
};

export { signup };
