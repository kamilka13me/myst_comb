import { Session } from "../models/session.model.js";

/**
 * @swagger
 * /sessions/delete:
 *   post:
 *     summary: Delete multiple sessions by session IDs
 *     tags: [Session]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sessionIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["665f8d257ba9feecb3f4e311", "665f8d257ba9feecb3f4e312"]
 *     responses:
 *       200:
 *         description: Sessions deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedCount:
 *                   type: integer
 *                   example: 2
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */
const deleteSessions = async (req, res) => {
  const { sessionIds } = req.body;

  if (!Array.isArray(sessionIds) || sessionIds.length === 0) {
    return res.status(400).json({ message: "Invalid or empty sessionIds array" });
  }

  try {
    const result = await Session.deleteMany({ _id: { $in: sessionIds } });
    return res.status(200).json({ deletedCount: result.deletedCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete sessions" });
  }
};

export default deleteSessions;
