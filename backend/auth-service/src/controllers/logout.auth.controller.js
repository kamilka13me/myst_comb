import { Session } from "../models/session.model.js";
import Response from "../utils/responses.js";

const logout = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (refreshToken) {
    await Session.deleteOne({ refreshToken });
  }

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
  return Response.sendSuccess(res, { status: 204 });
};

export default logout;

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Logout user by clearing refresh token cookie
 *     tags: [Auth]
 *     description: >
 *       Clears the HttpOnly refresh token cookie to log out the user.
 *       Responds with 204 No Content on success.
 *     responses:
 *       204:
 *         description: No Content - refresh token cookie cleared successfully
 */
