import express from "express";

import { getUser, getUsers } from "../controller/UserController.js";

const router = express.Router();

router.get("/all", getUsers);
router.get("/:id", getUser);

export default router;
