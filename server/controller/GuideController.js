import Guide from "../modals/GuideSchema.js";
import mongoose from "mongoose";

// Create a new guide (optional, if needed)
export const createGuide = async (req, res) => {
  try {
    const {
      user,
      introduction,
      experience,
      background,
      specialization,
      languages,
      personalInterest,
      socialMedia,
      account,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(user)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const newGuide = new Guide({
      user,
      introduction,
      experience,
      background,
      specialization,
      languages,
      personalInterest,
      socialMedia,
      account,
    });

    const savedGuide = await newGuide.save();
    const populatedGuide = await Guide.findById(savedGuide._id).populate(
      "user",
      "name email"
    );

    res.status(201).json({
      success: true,
      data: populatedGuide,
      message: "Guide created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all guides
export const getAllGuides = async (req, res) => {
  try {
    const {
      language,
      specialization,
      sort = "createdAt",
      limit = 10,
      page = 1,
    } = req.query;

    const query = {};

    // Filter by language
    if (language) {
      query.languages = { $in: [language] };
    }

    // Filter by specialization
    if (specialization) {
      query.specialization = { $in: [specialization] };
    }

    const skip = (page - 1) * limit;

    const guides = await Guide.find(query)
      .populate("user", "name email") // Populate user details
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    const total = await Guide.countDocuments(query);

    res.status(200).json({
      success: true,
      data: guides,
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

// Get a single guide by ID
export const getGuide = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid guide ID" });
    }

    const guide = await Guide.findById(id).populate("user", "name email");

    if (!guide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json({
      success: true,
      data: guide,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a guide
export const updateGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid guide ID" });
    }

    // Remove sensitive fields that shouldn't be updated directly
    delete updateData.user; // Prevent changing the user reference
    delete updateData.createdAt;
    delete updateData.updatedAt;

    const updatedGuide = await Guide.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    ).populate("user", "name email");

    if (!updatedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json({
      success: true,
      data: updatedGuide,
      message: "Guide updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a guide
export const deleteGuide = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid guide ID" });
    }

    const deletedGuide = await Guide.findByIdAndDelete(id);

    if (!deletedGuide) {
      return res.status(404).json({ message: "Guide not found" });
    }

    res.status(200).json({
      success: true,
      message: "Guide deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
