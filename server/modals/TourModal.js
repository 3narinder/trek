import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    places: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
        required: true,
      },
    ],
    discountPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    actualPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    images: [
      {
        type: String, // URLs to images
        default: "https://via.placeholder.com/150", // Default placeholder image
      },
    ],
    videos: [
      {
        type: String, // URLs to videos
        default: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Default placeholder video (Rick Roll 😄)
      },
    ],
    tourGuide: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guide",
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    tourMap: {
      type: String,
      default: "",
    },
    activities: [
      {
        day: {
          type: Number,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        location: {
          type: String,
        },
      },
    ],
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "End date must be after start date",
      },
    },
  },
  { timestamps: true }
);

// Add index for better query performance
tourSchema.index({ name: 1 });
tourSchema.index({ startDate: 1, endDate: 1 });

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;
