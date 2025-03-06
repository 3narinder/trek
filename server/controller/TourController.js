import Tour from "../modals/TourModal.js";
import mongoose from "mongoose";

// Create a new tour
export const createTour = async (req, res) => {
  try {
    const {
      name,
      places,
      discountPrice,
      actualPrice,
      images,
      videos,
      tourGuide,
      description,
      rating,
      tourMap,
      activities,
      startDate,
      endDate,
    } = req.body;

    // Validate that all places exist and are valid ObjectIds
    const validPlaces = places.every((placeId) =>
      mongoose.Types.ObjectId.isValid(placeId)
    );
    if (!validPlaces) {
      return res.status(400).json({ message: "Invalid place ID(s)" });
    }

    const newTour = new Tour({
      name,
      places,
      discountPrice,
      actualPrice,
      images,
      videos,
      tourGuide,
      description,
      rating,
      tourMap,
      activities,
      startDate,
      endDate,
    });

    const savedTour = await newTour.save();

    // Populate references for the response
    const populatedTour = await Tour.findById(savedTour._id)
      .populate("places")
      .populate("tourGuide");

    res.status(201).json({
      success: true,
      data: populatedTour,
      message: "Tour created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a single tour by ID
export const getTour = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid tour ID" });
    }

    const tour = await Tour.findById(id)
      .populate("places", "name location") // Populate only specific fields from Place
      .populate("tourGuide", "name email"); // Populate only specific fields from User

    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    res.status(200).json({
      success: true,
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all tours with optional filtering
export const getAllTours = async (req, res) => {
  try {
    const {
      minPrice,
      maxPrice,
      startDate,
      endDate,
      placeId,
      sort = "startDate",
      limit = 10,
      page = 1,
    } = req.query;

    const query = {};

    // Price filtering
    if (minPrice) query.discountPrice = { $gte: Number(minPrice) };
    if (maxPrice) {
      query.discountPrice = { ...query.discountPrice, $lte: Number(maxPrice) };
    }

    // Date filtering
    if (startDate) query.startDate = { $gte: new Date(startDate) };
    if (endDate) query.endDate = { $lte: new Date(endDate) };

    // Place filtering
    if (placeId) {
      if (!mongoose.Types.ObjectId.isValid(placeId)) {
        return res.status(400).json({ message: "Invalid place ID" });
      }
      query.places = placeId;
    }

    const skip = (page - 1) * limit;

    const tours = await Tour.find(query)
      .populate("places", "name location")
      .populate("tourGuide", "name")
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    const total = await Tour.countDocuments(query);

    res.status(200).json({
      success: true,
      data: tours,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
        limit: Number(limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a tour
export const updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid tour ID" });
    }

    // If updating places, validate ObjectIds
    if (updateData.places) {
      const validPlaces = updateData.places.every((placeId) =>
        mongoose.Types.ObjectId.isValid(placeId)
      );
      if (!validPlaces) {
        return res.status(400).json({ message: "Invalid place ID(s)" });
      }
    }

    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )
      .populate("places")
      .populate("tourGuide");

    if (!updatedTour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    res.status(200).json({
      success: true,
      data: updatedTour,
      message: "Tour updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a tour
export const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid tour ID" });
    }

    const deletedTour = await Tour.findByIdAndDelete(id);

    if (!deletedTour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    res.status(200).json({
      success: true,
      message: "Tour deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
