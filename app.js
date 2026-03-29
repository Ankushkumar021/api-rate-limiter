import express from "express";

import rateLimiter from "./middleware/rateLimiter.js";
import logger from "./middleware/logger.js";
import validate from "./middleware/validate.js";
import errorHandler from "./middleware/errorHandler.js";

import apiRoutes from "./routes/apiRoutes.js";
import metricsRoutes from "./routes/metricsRoutes.js";

const app = express();

app.use(express.json());
app.use(validate);
app.use(logger);
app.use(rateLimiter);

app.use("/api", apiRoutes);
app.use("/metrics", metricsRoutes);

app.use(errorHandler);

export default app;