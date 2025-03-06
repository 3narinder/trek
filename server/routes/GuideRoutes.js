import express from "express";
import {
  createGuide,
  deleteGuide,
  getAllGuides,
  getGuide,
  updateGuide,
} from "../controller/GuideController.js";

const router = express.Router();

router.post("/", createGuide);
router.get("/", getAllGuides);
router.get("/:id", getGuide);
router.patch("/:id", updateGuide);
router.delete("/:id", deleteGuide);

export default router;
