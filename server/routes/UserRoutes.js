import express from "express";
import { getMe, getUser, getUsers } from "../controller/UserController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected route to get authenticated user
router.get("/me", authenticateToken, getMe);

// Public routes
router.get("/all", getUsers);
router.get("/:id", getUser);

export default router;
