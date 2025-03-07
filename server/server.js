import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // Required to parse cookies

import connectDB from "./db/db.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import GuideRoutes from "./routes/GuideRoutes.js";
import PlaceRoutes from "./routes/PlaceRoute.js";
import TourRoutes from "./routes/TourRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({ credentials: true, origin: "http://localhost:3000" })); // Adjust origin as needed
app.use(express.json());
app.use(cookieParser()); // To parse cookies

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 8000;

// Routes
app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);
app.use("/place", PlaceRoutes);
app.use("/tour", TourRoutes);
app.use("/guide", GuideRoutes);

// Start server
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
