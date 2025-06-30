import mongoose from "mongoose";

const supportReqSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    organization: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    profession: { type: String, required: true },
    expert: { type: String, required: true },
    agreeToTelegram: { type: Boolean, default: false },
    agreeToViber: { type: Boolean, default: false },
    agreeToProcess: { type: Boolean, default: false },
    selectedBrick: [{ type: String }],
    selectedSupport: [{ type: String }],
    services: { type: String, required: true },
    documents: [{ type: String }], // файли
  },
  { timestamps: true }
);

const SupportReq =
  mongoose.models.SupportReq || mongoose.model("SupportReq", supportReqSchema);
export default SupportReq;
