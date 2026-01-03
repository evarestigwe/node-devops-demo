const client = require("prom-client");

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const httpRequestCounter = new client.Counter({
	  name: "http_requests_total",
	  help: "Total HTTP requests",
	  labelNames: ["method", "route", "status"]
});

module.exports.registerMetrics = (app) => {
	  app.use((req, res, next) => {
		      res.on("finish", () => {
			            httpRequestCounter.inc({
					            method: req.method,
					            route: req.route?.path || req.url,
					            status: res.statusCode
					          });
			          });
		      next();
		    });

	  app.get("/metrics", async (req, res) => {
		      res.set("Content-Type", client.register.contentType);
		      res.end(await client.register.metrics());
		    });
};

