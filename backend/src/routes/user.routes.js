import { Router } from "express";
import { signup } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/sign-up").post(upload.single("avatar"), signup);

export default router;
