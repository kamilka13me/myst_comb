import mongoose from "mongoose";

const courseReqSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    organization: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    profession: { type: String, required: true },
    agreeToTelegram: { type: Boolean, default: false },
    agreeToViber: { type: Boolean, default: false },
    agreeToProcess: { type: Boolean, default: false },
    selectedBrick: [{ type: String }],
    services: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const CourseReq =
  mongoose.models.CourseReq || mongoose.model("CourseReq", courseReqSchema);
export default CourseReq;
