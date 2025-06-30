import DiscussionReq from "../models/DiscussionReq.model.js";

/**
 * @swagger
 * /discussion:
 *   post:
 *     summary: Створює нову заявку на обговорення
 *     tags: [DiscussionReq]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               organization:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               profession:
 *                 type: string
 *               agreeToTelegram:
 *                 type: boolean
 *               agreeToViber:
 *                 type: boolean
 *               agreeToProcess:
 *                 type: boolean
 *               selectedBrick:
 *                 type: array
 *                 items:
 *                   type: string
 *               description:
 *                 type: string
 *               documents:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Заявку успішно створено
 *       400:
 *         description: Помилка валідації або відсутній email
 *       500:
 *         description: Серверна помилка
 */
export const createDiscussionReq = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      organization,
      email,
      phone,
      profession,
      agreeToTelegram,
      agreeToViber,
      agreeToProcess,
      description,
    } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email є обов'язковим полем" });
    }

    const selectedBrick = Array.isArray(req.body.selectedBrick)
      ? req.body.selectedBrick
      : req.body.selectedBrick
      ? [req.body.selectedBrick]
      : [];

    // Отримуємо список шляхів до завантажених файлів
    const documents = req.files ? req.files.map((file) => file.filename) : [];

    const discussionReq = new DiscussionReq({
      firstName,
      lastName,
      organization,
      email,
      phone,
      profession,
      agreeToTelegram: !!agreeToTelegram,
      agreeToViber: !!agreeToViber,
      agreeToProcess: !!agreeToProcess,
      selectedBrick,
      description,
      documents,
    });

    const saved = await discussionReq.save();

    return res.status(201).json({ success: true, data: saved });
  } catch (error) {
    console.error("Error creating discussion request:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
