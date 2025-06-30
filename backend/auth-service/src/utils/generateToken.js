import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
    jwtid: randomUUID(),
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
    jwtid: randomUUID(),
  });
};

export { generateAccessToken, generateRefreshToken };
