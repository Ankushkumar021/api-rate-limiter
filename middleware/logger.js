import RequestLog from "../models/RequestLog.js";
import { updateMetrics } from "../services/metricsCache.js";

export default (req, res, next) => {
  const start = Date.now();

  res.on("finish", async () => {
    const latency = Date.now() - start;

    let errorType = "NONE";
    if (res.statusCode >= 500) errorType = "SERVER_ERROR";
    else if (res.statusCode >= 400) errorType = "CLIENT_ERROR";

    await RequestLog.create({
      ip: req.ip,
      endpoint: req.originalUrl,
      status: res.statusCode,
      latency,
      errorType
    });

    updateMetrics(res.statusCode, latency);
  });

  next();
};