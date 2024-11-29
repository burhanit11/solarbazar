import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

var corsOptions = {
  //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //   origin: "http://localhost:3000/",
  //   Credential: true,
  //   optionsSuccessStatus: 200,

  origin: [
    "http://localhost:3000",
    // "https://multi-vendor-chandan.vercel.app",
  ],
  credentials: true,
};

// middlewares
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// API
app.use("/api/v1/user", userRouter);

export { app };
