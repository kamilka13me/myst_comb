const Errors = {
  /**
   * @swagger
   * components:
   *   responses:
   *     AuthInvalidCredentials:
   *       description: Invalid email or password
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Invalid email or password
   *               code:
   *                 type: string
   *                 example: AUTH_INVALID_CREDENTIALS
   */
  AUTH_INVALID_CREDENTIALS: {
    code: "AUTH_INVALID_CREDENTIALS",
    message: "Invalid email or password",
    status: 401,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     AuthMissingFields:
   *       description: Email or password missing
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Email or password missing
   *               code:
   *                 type: string
   *                 example: AUTH_MISSING_FIELDS
   */
  AUTH_MISSING_FIELDS: {
    code: "AUTH_MISSING_FIELDS",
    message: "Email or password missing",
    status: 400,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     AuthUnauthorized:
   *       description: Unauthorized
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Unauthorized
   *               code:
   *                 type: string
   *                 example: AUTH_UNAUTHORIZED
   */
  AUTH_UNAUTHORIZED: {
    code: "AUTH_UNAUTHORIZED",
    message: "Unauthorized",
    status: 401,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     AuthUserNotFound:
   *       description: User not found
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: User not found
   *               code:
   *                 type: string
   *                 example: AUTH_USER_NOT_FOUND
   */
  AUTH_USER_NOT_FOUND: {
    code: "AUTH_USER_NOT_FOUND",
    message: "User not found",
    status: 404,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     InvalidContentType:
   *       description: Unsupported Media Type. Expected application/json
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Unsupported Media Type. Expected application/json
   *               code:
   *                 type: string
   *                 example: INVALID_CONTENT_TYPE
   */
  INVALID_CONTENT_TYPE: {
    code: "INVALID_CONTENT_TYPE",
    message: "Unsupported Media Type. Expected application/json",
    status: 400,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     InvalidBodyType:
   *       description: Invalid JSON body. Expected an object.
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Invalid JSON body. Expected an object.
   *               code:
   *                 type: string
   *                 example: INVALID_BODY_TYPE
   */
  INVALID_BODY_TYPE: {
    code: "INVALID_BODY_TYPE",
    message: "Invalid JSON body. Expected an object.",
    status: 415,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     PrototypePollutionRisk:
   *       description: Dangerous key detected in request body
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Dangerous key detected in request body
   *               code:
   *                 type: string
   *                 example: PROTOTYPE_POLLUTION_RISK
   */
  PROTOTYPE_POLLUTION_RISK: {
    code: "PROTOTYPE_POLLUTION_RISK",
    message: "Dangerous key  detected in request body",
    status: 400,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     InternalServerError:
   *       description: Internal server error
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Something went wrong
   *               code:
   *                 type: string
   *                 example: INTERNAL_SERVER_ERROR
   */

  INTERNAL_SERVER_ERROR: {
    code: "INTERNAL_SERVER_ERROR",
    message: "Internal server error",
    status: 500,
  },
  /**
   * @swagger
   * components:
   *   responses:
   *     userAllreadyExist:
   *       description: User allready exist
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: User allready exist
   *               code:
   *                 type: string
   *                 example: USER_ALLREADY_EXIST
   */

  USER_ALLREADY_EXIST: {
    code: "USER_ALLREADY_EXIST",
    message: "User allready exist",
    status: 409,
  },
  /**
   * @swagger
   * components:
   *   responses:
   *     RefreshTokenMissing:
   *       description: Refresh token missing
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Refresh token missing
   *               code:
   *                 type: string
   *                 example: REFRESH_TOKEN_MISSING
   */
  REFRESH_TOKEN_MISSING: {
    code: "REFRESH_TOKEN_MISSING",
    message: "Refresh token missing",
    status: 400,
  },

  /**
   * @swagger
   * components:
   *   responses:
   *     InvalidRefreshToken:
   *       description: Invalid refresh token
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               success:
   *                 type: boolean
   *                 example: false
   *               message:
   *                 type: string
   *                 example: Invalid refresh token
   *               code:
   *                 type: string
   *                 example: INVALID_REFRESH_TOKEN
   */
  INVALID_REFRESH_TOKEN: {
    code: "INVALID_REFRESH_TOKEN",
    message: "Invalid refresh token",
    status: 401,
  },
};

function sendSuccess(res, data = {}, message = "Success", status = 200) {
  return res.status(status).json({ success: true, message, data });
}

function sendError(res, errorObj) {
  const { status, message, code } = errorObj;
  return res.status(status || Errors.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: message,
    code: code,
  });
}

const Response = {
  sendSuccess,
  sendError,
  Errors,
};

export default Response;
