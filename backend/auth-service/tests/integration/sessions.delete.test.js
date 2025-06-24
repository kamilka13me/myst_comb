import request from "supertest";
import app from "../../src/app.js";
import mongoose from "mongoose";
import { User } from "../../src/models/user.model.js";
import { Session } from "../../src/models/session.model.js";
import { generateRefreshToken } from "../../src/utils/generateToken.js";

let user;
let sessionIds;
const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

beforeAll(async () => {
  await User.deleteMany({});
  await Session.deleteMany({});

  user = await User.create({
    email: "deletesessions@example.com",
    username: "sessionuser",
    password: "Test1234",
  });

  // Створюємо сесії в базі
  const sessions = await Session.insertMany([
    { userId: user._id, refreshToken: generateRefreshToken(user._id), expiresAt },
    { userId: user._id, refreshToken: generateRefreshToken(user._id), expiresAt },
  ]);

  sessionIds = sessions.map((s) => s._id.toString());
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("POST /api/auth/sessions/delete", () => {
  it("should delete provided sessions and return 200", async () => {
    const res = await request(app)
      .post("/api/auth/sessions/delete")
      .send({ sessionIds })
      .expect(200);

    expect(res.body).toEqual({
      message: "Sessions deleted successfully",
      deletedCount: sessionIds.length,
    });

    const remaining = await Session.find({ _id: { $in: sessionIds } });
    expect(remaining.length).toBe(0);
  });

  it("should return 400 if sessionIds is missing", async () => {
    const res = await request(app).post("/api/auth/sessions/delete").send({}).expect(400);

    expect(res.body).toEqual({
      code: "INVALID_SESSION_IDS",
      message: "sessionIds must be a non-empty array",
      success: false,
    });
  });
});
