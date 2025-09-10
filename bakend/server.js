import express from "express";
import router from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use("/api/contact", router);
app.use("/api/users", userRouter);
app.use(errorHandler);
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
  