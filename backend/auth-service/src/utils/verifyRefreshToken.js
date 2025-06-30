import jwt from "jsonwebtoken";

const verifyRefreshToken = (token) => {
  try {
    // Секретний ключ для refresh токена має бути в env
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
      throw new Error("REFRESH_TOKEN_SECRET not set in env");
    }

    // Верифікація токена і повернення payload
    return jwt.verify(token, secret);
  } catch (err) {
    return null; // Якщо токен невалідний або прострочений, повертаємо null
  }
};

export default verifyRefreshToken;
