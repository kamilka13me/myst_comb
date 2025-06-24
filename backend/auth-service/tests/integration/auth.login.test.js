import request from "supertest";
import mongoose from "mongoose";
import app from "../../src/app.js";
import { User } from "../../src/models/user.model.js";

describe("POST /api/auth/login", () => {
  const testUser = {
    email: "user@example.com",
    password: "strongPassword123",
    username: "testuser",
  };

  beforeAll(async () => {
    await User.deleteMany({}); // clear Database

    // create ne
    const user = new User(testUser);
    await user.save();
  });

  afterAll(async () => {
    await mongoose.connection.close(); // close DB after test
  });

  it("should return 200 and accessToken in body, refreshToken as HttpOnly cookie", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: testUser.email, password: testUser.password });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("accessToken");

    const cookies = res.headers["set-cookie"];
    expect(cookies).toBeDefined();

    const refreshCookie = cookies.find((cookie) => cookie.startsWith("refreshToken="));
    expect(refreshCookie).toBeDefined();
    expect(refreshCookie).toMatch(/HttpOnly/i);
  });

  it("should return 400 if email or password missing", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: testUser.email });

    expect(res.statusCode).toBe(400);
  });

  it("should return 401 for invalid credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: testUser.email, password: "wrongPassword" });

    expect(res.statusCode).toBe(401);
  });
});
