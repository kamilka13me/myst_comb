const validateBody = (req, res, next) => {
  try {
    const methodsWithBody = ["POST", "PUT", "PATCH"];

    if (!req.headers["content-type"]) {
      return next();
    }

    if (methodsWithBody.includes(req.method)) {
      // Перевірка Content-Type

      if (req.headers["content-type"] !== "application/json") {
        return res.status(415).json({
          success: false,
          message: "Unsupported Media Type. Expected application/json",
          code: "INVALID_CONTENT_TYPE",
        });
      }

      // Дозвіл на пустий body
      if (req.body == null) {
        return next();
      }

      if (typeof req.body !== "object" || Array.isArray(req.body)) {
        return res.status(400).json({
          success: false,
          message: "Invalid JSON body. Expected an object.",
          code: "INVALID_BODY_TYPE",
        });
      }

      // Заборона prototype pollution
      const dangerousKeys = ["__proto__", "constructor", "prototype"];
      for (const key of Object.keys(req.body)) {
        if (dangerousKeys.includes(key)) {
          return res.status(400).json({
            success: false,
            message: `Dangerous key "${key}" detected in request body`,
            code: "PROTOTYPE_POLLUTION_RISK",
          });
        }
      }
    }

    next();
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Malformed JSON body",
      code: "MALFORMED_JSON",
    });
  }
};

export default validateBody;
