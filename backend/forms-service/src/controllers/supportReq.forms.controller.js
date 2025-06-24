import SupportReq from "../models/SupportReq.model.js";

/**
 * @swagger
 * /support:
 *   post:
 *     summary: Створює нову заявку на підтримку
 *     tags: [SupportReq]
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
 *               expert:
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
 *               selectedSupport:
 *                 type: array
 *                 items:
 *                   type: string
 *               services:
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
export const createSupportReq = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      organization,
      email,
      phone,
      profession,
      expert,
      agreeToTelegram,
      agreeToViber,
      agreeToProcess,
      services,
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

    const selectedSupport = Array.isArray(req.body.selectedSupport)
      ? req.body.selectedSupport
      : req.body.selectedSupport
      ? [req.body.selectedSupport]
      : [];

    const documents = req.files ? req.files.map((file) => file.filename) : [];

    const supportReq = new SupportReq({
      firstName,
      lastName,
      organization,
      email,
      phone,
      profession,
      expert,
      agreeToTelegram: !!agreeToTelegram,
      agreeToViber: !!agreeToViber,
      agreeToProcess: !!agreeToProcess,
      selectedBrick,
      selectedSupport,
      services,
      documents,
    });

    const saved = await supportReq.save();

    return res.status(201).json({ success: true, data: saved });
  } catch (error) {
    console.error("Error creating support request:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
