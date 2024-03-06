import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

const app = express();


dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //root rout http://localhost:3001/

  res.send("Hello World!msl");
});

app.use("/api/auth", authRoutes)



app.listen(PORT , () => console.log(`Server Running on port ${PORT}`));
