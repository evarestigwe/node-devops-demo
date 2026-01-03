const express = require("express");
const routes = require("./routes");
const { registerMetrics } = require("./metrics");
const logger = require("./logger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// request logging
// app.use((req, res, next) => {
//   logger.info(`${req.method} ${req.url}`);
//     next();
//     });
//
//     routes(app);
//     registerMetrics(app);
//
//     app.listen(PORT, () => {
//       logger.info(`Service started on port ${PORT}`);
//       });
//
