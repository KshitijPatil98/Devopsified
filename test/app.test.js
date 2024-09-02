const request = require("supertest");
const { app, server } = require("../src/app"); // Import app and server

afterAll((done) => {
  server.close(done); // Close server after tests
});

describe("GET /home", () => {
  it("should return the home page", async () => {
    const response = await request(app).get("/home");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /architecture", () => {
  it("should return the architecture image", async () => {
    const response = await request(app).get("/architecture");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/image/);
  });
});

describe("GET /techstack", () => {
  it("should return the tech stack page", async () => {
    const response = await request(app).get("/techstack");
    expect(response.statusCode).toBe(200);
  });
});
