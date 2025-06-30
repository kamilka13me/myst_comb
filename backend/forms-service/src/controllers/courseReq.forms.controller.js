import CourseReq from "../models/CourseReq.model.js";

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Створює нову заявку на курс англійської
 *     tags: [CourseReq]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Олександр"
 *               lastName:
 *                 type: string
 *                 example: "Іванов"
 *               organization:
 *                 type: string
 *                 example: "Acme Corp"
 *               email:
 *                 type: string
 *                 example: "oleksandr.ivanov@example.com"
 *               phone:
 *                 type: string
 *                 example: "+380671234567"
 *               profession:
 *                 type: string
 *                 example: "Програміст"
 *               agreeToTelegram:
 *                 type: boolean
 *                 example: true
 *               agreeToViber:
 *                 type: boolean
 *                 example: false
 *               agreeToProcess:
 *                 type: boolean
 *                 example: true
 *               selectedBrick:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["brick1","brick2"]
 *               services:
 *                 type: string
 *                 example: "Групові заняття"
 *               description:
 *                 type: string
 *                 example: "Хочу покращити розмовну англійську"
 *     responses:
 *       201:
 *         description: Успішно створено заявку на курс
 *       400:
 *         description: Помилка валідації або відсутній email
 *       500:
 *         description: Серверна помилка
 */
export const createCourseReq = async (req, res) => {
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
      selectedBrick,
      services,
      description,
    } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email є обов'язковим полем" });
    }

    const courseReq = new CourseReq({
      firstName,
      lastName,
      organization,
      email,
      phone,
      profession,
      agreeToTelegram: !!agreeToTelegram,
      agreeToViber: !!agreeToViber,
      agreeToProcess: !!agreeToProcess,
      selectedBrick: selectedBrick || [],
      services,
      description,
    });

    const saved = await courseReq.save();

    return res.status(201).json({ success: true, data: saved });
  } catch (error) {
    console.error("Error creating course request:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
