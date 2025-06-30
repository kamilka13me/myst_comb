import Subscription from "../models/Subscription.model.js";

/**
 * @swagger
 * /subscription:
 *   post:
 *     summary: Підписка на розсилку
 *     tags: [Subscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *     responses:
 *       201:
 *         description: Підписка успішно створена
 *       400:
 *         description: Відсутній або некоректний email
 *       409:
 *         description: Email вже підписаний
 *       500:
 *         description: Серверна помилка
 */
export const createSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email є обов'язковим полем" });
    }

    // Перевірка, чи email уже підписаний
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: "Email вже підписаний" });
    }

    const subscription = new Subscription({ email });
    const saved = await subscription.save();

    return res.status(201).json({ success: true, data: saved });
  } catch (error) {
    console.error("Error creating subscription:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
