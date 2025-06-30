import { User } from "../models/user.model.js";
import { generateAccessToken } from "../utils/generateToken.js";
import Response from "../utils/responses.js";
import verifyRefreshToken from "../utils/verifyRefreshToken.js";

const RefreshAccesToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return Response.sendError(res, Response.Errors.REFRESH_TOKEN_MISSING);
    }

    // Перевірка та розшифровка refreshToken
    const payload = verifyRefreshToken(refreshToken);
    if (!payload) {
      return Response.sendError(res, Response.Errors.INVALID_REFRESH_TOKEN);
    }

    // Знаходимо користувача по ID з payload refreshToken
    const user = await User.findById(payload.id);
    if (!user) {
      return Response.sendError(res, Response.Errors.AUTH_USER_NOT_FOUND);
    }

    // Генеруємо новий accessToken
    const accessToken = generateAccessToken(user._id);

    // Відповідь
    res.json({
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
      accessToken,
    });
  } catch (err) {
    console.error(err);
    return Response.sendError(res, Response.Errors.INTERNAL_SERVER_ERROR);
  }
};

export { RefreshAccesToken };

/**
 * @swagger
 * /refresh-token:
 *   get:
 *     summary: Refresh access token using HttpOnly refresh token cookie
 *     tags: [Auth]
 *     description: >
 *       Generates a new access token if a valid refresh token is present in HttpOnly cookies.
 *       The refresh token is validated and decoded. If valid, a new access token is issued
 *       and user info is returned in the response.
 *     responses:
 *       200:
 *         description: Successfully refreshed access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "683ee831128bc32682553185"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *                     username:
 *                       type: string
 *                       example: "string"
 *                 accessToken:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         $ref: '#/components/responses/RefreshTokenMissing'
 *       401:
 *         $ref: '#/components/responses/InvalidRefreshToken'
 *       404:
 *         $ref: '#/components/responses/AuthUserNotFound'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
