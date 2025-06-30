import mongoose from "mongoose";

const portfolioReqSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const PortfolioReq =
  mongoose.models.PortfolioReq || mongoose.model("PortfolioReq", portfolioReqSchema);

export default PortfolioReq;

/**
 * @swagger
 * components:
 *   schemas:
 *     PortfolioReq:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Унікальний ідентифікатор запису
 *           example: "650a3c9f3e8a4d1b5c4e6f7a"
 *         firstName:
 *           type: string
 *           description: Ім'я користувача
 *           example: "Іван"
 *         lastName:
 *           type: string
 *           description: Прізвище користувача
 *           example: "Петренко"
 *         organization:
 *           type: string
 *           description: Назва організації
 *           example: "Acme Corp"
 *         email:
 *           type: string
 *           description: Email користувача
 *           example: "ivan.petrenko@example.com"
 *         phone:
 *           type: string
 *           description: Номер телефону користувача
 *           example: "+380671234567"
 *         profession:
 *           type: string
 *           description: Професія користувача
 *           example: "Програміст"
 *         expert:
 *           type: string
 *           description: Галузь експертизи
 *           example: "Frontend"
 *         agreeToTelegram:
 *           type: boolean
 *           description: Згода на сповіщення у Telegram
 *           example: true
 *         agreeToViber:
 *           type: boolean
 *           description: Згода на сповіщення у Viber
 *           example: false
 *         agreeToProcess:
 *           type: boolean
 *           description: Згода на обробку персональних даних
 *           example: true
 *         selectedBrick:
 *           type: array
 *           items:
 *             type: string
 *           description: Вибрані значення (бріки)
 *           example: ["brick1", "brick2"]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Дата і час створення запису
 *           example: "2025-06-25T12:00:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Дата і час останнього оновлення запису
 *           example: "2025-06-25T12:00:00.000Z"
 */
