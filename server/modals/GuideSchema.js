import mongoose from "mongoose";

const guideSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
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
      bankAccount: [
        {
          accountNumber: { type: String, default: "" },
          routingNumber: { type: String, default: "" },
          bankName: { type: String, default: "" },
          accountHolder: { type: String, default: "" },
        },
      ],
    },
  },
  { timestamps: true }
);

const Guide = mongoose.model("Guide", guideSchema);

export default Guide;
