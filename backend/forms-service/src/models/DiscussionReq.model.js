import mongoose from "mongoose";

const discussionReqSchema = new mongoose.Schema(
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
    description: { type: String, required: true },
    // Зберігаємо список файлів як рядки-шляхи або URLи
    documents: [{ type: String }],
  },
  { timestamps: true }
);

const DiscussionReq =
  mongoose.models.DiscussionReq || mongoose.model("DiscussionReq", discussionReqSchema);
export default DiscussionReq;
