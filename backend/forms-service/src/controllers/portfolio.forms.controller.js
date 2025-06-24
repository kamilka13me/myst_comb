import PortfolioReq from "../models/portfolioReq.model.js";
/**
 * @swagger
 * /portfolio:
 *   post:
 *     summary: Створює новий запит на портфоліо
 *     tags: [PortfolioReq]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PortfolioReq'
 *     responses:
 *       201:
 *         description: Успішно створено запит
 *       400:
 *         description: Помилка валідації або відсутній email
 *       500:
 *         description: Серверна помилка
 */
export const createPortfolioReq = async (req, res) => {
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
      selectedBrick,
    } = req.body;

    // Перевірка на наявність email
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email є обов'язковим полем" });
    }

    const portfolioReq = new PortfolioReq({
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
      selectedBrick: selectedBrick || [],
    });

    const saved = await portfolioReq.save();

    return res.status(201).json({ success: true, data: saved });
  } catch (error) {
    console.error("Error creating portfolio request:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
