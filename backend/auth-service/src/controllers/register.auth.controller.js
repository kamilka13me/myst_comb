import { User } from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";
import Response from "../utils/responses.js";

const register = async (req, res) => {
  //400 missing fields
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return Response.sendError(res, Response.Errors.AUTH_MISSING_FIELDS);
  }

  // 409 User allready exist
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return Response.sendError(res, Response.Errors.USER_ALLREADY_EXIST);
  }

  // create user
  const user = new User({ email, password, username });
  await user.save();

  // create tokens
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  // refresh token
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 днів
  });

  // response
  res.status(201).json({
    user: {
      id: user._id,
      email: user.email,
      username: user.username,
    },
    accessToken,
  });
};

export { register };

/**
 * @swagger
 * /register:
 *   post:
 *     summary: New User Registration
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - username
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               username:
 *                 type: string
 *                 example: username
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPassword123
 *
 *     responses:
 *       201:
 *         description: Succes login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user.schema'
 *       400:
 *         $ref: '#/components/responses/AuthMissingFields'
 *       409:
 *         $ref: '#/components/responses/userAllreadyExist'
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
