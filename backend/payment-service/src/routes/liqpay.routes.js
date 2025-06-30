import { Router } from "express";
import { createPayment } from "../controllers/liqpay.controller.js";

const router = Router();
router.post("/create", createPayment);

export default router;
