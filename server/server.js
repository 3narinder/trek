import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 8000;

app.use(express.json());

connectDB();

app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
