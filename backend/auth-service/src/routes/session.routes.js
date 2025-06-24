import express from "express";

import deleteSessions from "../controllers/deleteSessions.auth.controller.js";

const router = express.Router();

router.post("/sessions/delete", deleteSessions);

export default router;
