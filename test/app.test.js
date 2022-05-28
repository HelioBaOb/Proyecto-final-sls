'use strict';
const serverless = require('serverless-http');
//test
const request = require("supertest");
const app =  require("../app.js");
const data = require("../data/cp.json")

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app.app)
      .get("/postales/76230");
      expect(response.statusCode).toBe(200);
  });
  test("It should response with 'no errors detected'", async () => {
    const response = await request(app.app)
      .get("/postales/76230");
      expect(response.res.text).toMatch(/\"err\":\"no error detected\"/);
  });
  test("It should response with 'not result for...'", async () => {
    const response = await request(app.app)
      .get("/postales/512");
      expect(response.res.text).toMatch(/not result for/);
  });
});