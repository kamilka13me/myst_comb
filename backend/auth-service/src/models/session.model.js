import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
      unique: true,
    },
    ip: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export const Session = mongoose.model("Session", sessionSchema);

/**
 * @swagger
 * components:
 *   schemas:
 *     Session:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier of the session
 *           example: "665fbc49f77df6f5b3a249de"
 *         userId:
 *           type: string
 *           description: ID of the user associated with this session
 *           example: "665fbb73b18347ec241da77e"
 *         refreshToken:
 *           type: string
 *           description: Refresh token issued for this session
 *           example: "b8727fd7c75c88b19c71f08e5d56f3a3b65a6a8d"
 *         ip:
 *           type: string
 *           description: IP address from which the session was initiated
 *           example: "192.168.0.100"
 *         userAgent:
 *           type: string
 *           description: Client device or browser information
 *           example: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
 *         expiresAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the session expires
 *           example: "2025-07-01T12:00:00.000Z"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the session was created
 *           example: "2025-06-08T14:21:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the session was last updated
 *           example: "2025-06-08T14:21:00.000Z"
 */
