import express from "express";
import { createPortfolioReq } from "../controllers/portfolio.forms.controller.js";
import { createCourseReq } from "../controllers/courseReq.forms.controller.js";
import { createDiscussionReq } from "../controllers/discussionReq.forms.controller.js";
import uploadDiscussion from "../midleware/uploadDiscussion.js";
import { createSupportReq } from "../controllers/supportReq.forms.controller.js";
import { createSubscription } from "../controllers/subscribeEmail.forms.controller.js";
import { getFilteredRequests } from "../controllers/request.forms.controller.js";

const router = express.Router();

router.post("/portfolio", createPortfolioReq);
router.post("/courses", createCourseReq);
router.post("/support", createSupportReq);
router.post("/subscription", createSubscription);
router.get("/request", getFilteredRequests);
router.post("/discussion", uploadDiscussion.array("documents"), createDiscussionReq);

export default router;
