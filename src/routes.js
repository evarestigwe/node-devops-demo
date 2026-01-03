module.exports = (app) => {
	  app.get("/health", (req, res) => {
		      res.status(200).json({ status: "UP" });
		    });

	  app.get("/api/hello", (req, res) => {
		      res.json({
			            message: "Hello from DevOps demo service",
			            pod: process.env.HOSTNAME || "local"
			          });
		    });

	  // simulate error for alerting tests
	//   app.get("/api/error", (req, res) => {
	//       throw new Error("Simulated failure");
	//         });
	//
	//           // simulate latency
	//             app.get("/api/slow", async (req, res) => {
	//                 await new Promise((r) => setTimeout(r, 3000));
	//                     res.json({ status: "slow response" });
	//                       });
	//                       };
	//
