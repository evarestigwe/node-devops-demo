const request = require("supertest");
const express = require("express");
const routes = require("../src/routes");

const app = express();
routes(app);

describe("Health endpoint", () => {
	  it("should return UP", async () => {
		      const res = await request(app).get("/health");
		      expect(res.statusCode).toBe(200);
		      expect(res.body.status).toBe("UP");
		    });
});

