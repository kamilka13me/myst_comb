import request from "supertest";
import app from "../../src/app.js";
import { User } from "../../src/models/user.model.js";
import mongoose from "mongoose";

beforeAll(async () => {
  // clear DB beffor testing
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /api/auth/register", () => {
  const validUser = {
    email: "test@example.com",
    password: "Test1234",
    username: "testuser",
  };
  // 200 succes
  it("should register new user and return 201 with token", async () => {
    const res = await request(app).post("/api/auth/register").send(validUser).expect(201);

    expect(res.body).toHaveProperty("accessToken");
    expect(res.body.user).toHaveProperty("id");
    expect(res.body.user).toMatchObject({
      email: validUser.email,
      username: validUser.username,
    });

    expect(res.headers["set-cookie"]).toBeDefined();
  });

  // AUTH_MISSING_FIELDS
  it("should return 400 if required fields are missing", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "", password: "", username: "" })
      .expect(400);

    expect(res.body).toEqual({
      code: "AUTH_MISSING_FIELDS",
      message: "Email or password missing",
      success: false,
    });
  });

  // USER_ALLREADY_EXIST
  it("should return 409 if user already exists", async () => {
    const res = await request(app).post("/api/auth/register").send(validUser).expect(409);

    expect(res.body).toEqual({
      code: "USER_ALLREADY_EXIST",
      message: "User allready exist",
      success: false,
    });
  });
});
