import Place from "../modals/PlacesSchema.js";

// Create a new place
export const createPlace = async (req, res) => {
  try {
    const { name, distance } = req.body;

    // Basic validation
    if (!name || distance === undefined) {
      return res.status(400).json({
        success: false,
        message: "Name and distance are required",
      });
    }

    const newPlace = new Place({
      name,
      distance,
    });

    const savedPlace = await newPlace.save();

    res.status(201).json({
      success: true,
      message: "Place created successfully",
      data: savedPlace,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({
        success: false,
        message: "Place with this name already exists",
      });
    }
    res.status(500).json({
      success: false,
      message: "Error creating place",
      error: error.message,
    });
  }
};

// Get single place by ID
export const getPlace = async (req, res) => {
  try {
    const placeId = req.params.id;
    const place = await Place.findById(placeId);

    if (!place) {
      return res.status(404).json({
        success: false,
        message: "Place not found",
      });
    }

    res.status(200).json({
      success: true,
      data: place,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching place",
      error: error.message,
    });
  }
};

// Get all places
export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();

    res.status(200).json({
      success: true,
      count: places.length,
      data: places,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching places",
      error: error.message,
    });
  }
};

// Delete place by ID
export const deletePlace = async (req, res) => {
  try {
    const placeId = req.params.id;
    const place = await Place.findByIdAndDelete(placeId);

    if (!place) {
      return res.status(404).json({
        success: false,
        message: "Place not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Place deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting place",
      error: error.message,
    });
  }
};
