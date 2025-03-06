import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getTour,
  updateTour,
} from "../controller/TourController.js";

const router = express.Router();

router.post("/", createTour);
router.get("/:id", getTour);
router.get("/all", getAllTours);
router.patch("/:id", updateTour);
router.delete("/:id", deleteTour);

export default router;
