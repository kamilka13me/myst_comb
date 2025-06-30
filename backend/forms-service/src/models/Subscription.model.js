import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

export default Subscription;
