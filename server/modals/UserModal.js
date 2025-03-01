import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    }, // Default profile image
    introduction: { type: String, default: "New user introduction" },
    experience: [
      {
        company: { type: String, default: "Not specified" },
        role: { type: String, default: "Not specified" },
        startDate: { type: Date },
        endDate: { type: Date },
        description: { type: String, default: "No description provided" },
      },
    ],
    background: [
      {
        degree: { type: String, default: "Not specified" },
        institution: { type: String, default: "Not specified" },
        yearOfCompletion: { type: Number },
      },
    ],
    specialization: { type: [String], default: [] },
    languages: { type: [String], default: [] },
    personalInterest: { type: [String], default: [] },
    socialMedia: {
      instagram: { type: String, default: "" },
      facebook: { type: String, default: "" },
      twitter: { type: String, default: "" },
    },
    account: {
      creditCards: [
        {
          cardNumber: { type: String, default: "" },
          cardHolder: { type: String, default: "" },
          expireDate: { type: String, default: "" },
          cvc: { type: String, default: "" },
        },
      ],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
