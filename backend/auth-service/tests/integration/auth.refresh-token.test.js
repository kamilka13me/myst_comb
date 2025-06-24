import request from "supertest";
import app from "../../src/app.js";
import { User } from "../../src/models/user.model.js";
import mongoose from "mongoose";
import { generateRefreshToken } from "../../src/utils/generateToken.js"; // якщо у тебе є функція генерації refreshToken

beforeAll(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /api/auth/refresh-token", () => {
  let user;
  let refreshToken;

  beforeAll(async () => {
    // create user
    user = await User.create({
      email: "testrefresh@example.com",
      username: "refreshuser",
      password: "Test1234",
    });

    // generate refresh token
    refreshToken = generateRefreshToken(user._id);
  });

  //   200 new acches token and user data
  it("should refresh access token with valid refresh token cookie", async () => {
    const res = await request(app)
      .get("/api/auth/refresh-token")
      .set("Cookie", [`refreshToken=${refreshToken}; HttpOnly`])
      .expect(200);

    expect(res.body).toHaveProperty("accessToken");
    expect(res.body.user).toMatchObject({
      id: user._id.toString(),
      email: user.email,
      username: user.username,
    });
  });

  //   400 Refresh Token Missing
  it("should return 400 if refresh token cookie is missing", async () => {
    const res = await request(app).get("/api/auth/refresh-token").expect(400);

    expect(res.body).toEqual({
      code: "REFRESH_TOKEN_MISSING",
      message: "Refresh token missing",
      success: false,
    });
  });

  // 401 Refresh Token is Invalid
  it("should return 401 if refresh token is invalid", async () => {
    const res = await request(app)
      .get("/api/auth/refresh-token")
      .set("Cookie", ["refreshToken=invalidtoken"])
      .expect(401);

    expect(res.body).toEqual({
      code: "INVALID_REFRESH_TOKEN",
      message: "Invalid refresh token",
      success: false,
    });
  });
});
