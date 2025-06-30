import request from "supertest";
import app from "../../src/app.js";

describe("POST /api/auth/logout", () => {
  it("should clear refreshToken cookie and respond with 204", async () => {
    const res = await request(app).post("/api/auth/logout").expect(204);

    // check does refreshToken no more exist
    const setCookie = res.headers["set-cookie"] || [];
    const refreshTokenCookie = setCookie.find((cookie) =>
      cookie.startsWith("refreshToken=")
    );

    expect(refreshTokenCookie).toBeDefined();
    expect(refreshTokenCookie).toMatch(/refreshToken=;/);
    expect(refreshTokenCookie).toMatch(/HttpOnly/);
  });
});
