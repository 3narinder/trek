import express from "express";
import {
  createPlace,
  deletePlace,
  getAllPlaces,
  getPlace,
} from "../controller/PlacesController.js";

const router = express.Router();

//Create place
router.post("/", createPlace);

// Get all places
router.get("/all", getAllPlaces);

// Get single place by ID
router.get("/:id", getPlace);

// Delete place by ID
router.delete("/delete/:id", deletePlace);

export default router;
