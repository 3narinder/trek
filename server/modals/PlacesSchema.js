import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensures no duplicate place names
    },
    distance: {
      type: Number,
      required: true,
      min: 0, // Distance can't be negative
      default: 0,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

// Add index for better query performance on name
placeSchema.index({ name: 1 });

const Place = mongoose.model("Place", placeSchema);

export default Place;
