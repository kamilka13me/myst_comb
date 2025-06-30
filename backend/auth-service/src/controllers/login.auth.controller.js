import { Session } from "../models/session.model.js";
import { User } from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import Response from "../utils/responses.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  //400 missing fields
  if (!email || !password) {
    return Response.sendError(res, Response.Errors.AUTH_MISSING_FIELDS);
  }

  //401 user not exist
  const user = await User.findOne({ email });
  if (!user) {
    return Response.sendError(res, Response.Errors.AUTH_INVALID_CREDENTIALS);
  }

  //401 wrong passwd
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return Response.sendError(res, Response.Errors.AUTH_INVALID_CREDENTIALS);
  }

  // create tokens
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  // Save session to DB
  await Session.create({
    userId: user._id,
    refreshToken,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  });

  // refresh token
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  // response
  res.status(200).json({
    user: {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    accessToken,
  });
};

export { login };
/**
 * @swagger
 * /login:
 *   post:
 *     summary: User Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPassword123
 *     responses:
 *       200:
 *         description: Succes login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user.schema'
 *
 *       400:
 *         $ref: '#/components/responses/AuthMissingFields'
 *       401:
 *         $ref: '#/components/responses/AuthInvalidCredentials'
 *
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
