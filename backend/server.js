import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); //tp pasrse the incoming request from JSON payload (from req.body)
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// app.get("/", (req, res) => {
//   //root rout http://localhost:3001/

//   res.send("Hello World!msl");
// });





app.listen(PORT , () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`)
});
