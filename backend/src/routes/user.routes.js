import { Router } from "express";
import { login, signup } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/sign-up").post(upload.single("avatar"), signup);

router.route("/login").post(login);

export default router;
