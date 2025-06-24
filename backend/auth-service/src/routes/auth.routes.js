import express from "express";
import { register } from "../controllers/register.auth.controller.js";
import { login } from "../controllers/login.auth.controller.js";
import { RefreshAccesToken } from "../controllers/refreshAccesToken.auth.controller.js";
import logout from "../controllers/logout.auth.controller.js";
import deleteSessions from "../controllers/deleteSessions.auth.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/refresh-token", RefreshAccesToken);

router.post("/sessions/delete", deleteSessions);

export default router;
