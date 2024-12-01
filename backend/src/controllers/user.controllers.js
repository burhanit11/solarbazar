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
    res.status(403).json({ message: "Register Error", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(403).json({ message: "Please Provide All Fileds" });
    }

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(403).json({ message: "Invalid email or password" });
    }

    const matchPassword = await userExist.comparePassword(password);

    if (!matchPassword) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const token = await generateToken(userExist._id);

    const user = await User.findById(userExist._id).select("-password");

    const optons = {
      httpOnly: true,
      secure: true,
    };

    res
      .status(200)
      .cookie("token", token, optons)
      .json({ message: "Login Success", user, token });
  } catch (error) {
    res.status(403).json({ message: "Login Error", error });
  }
};

export { signup, login };
