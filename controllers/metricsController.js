import { getMetrics } from "../services/metricsCache.js";
import RequestLog from "../models/RequestLog.js";

export const getMetricsController = async (req, res) => {
  const cacheMetrics = getMetrics();

  const rpm = await RequestLog.countDocuments({
    timestamp: { $gte: new Date(Date.now() - 60000) }
  });

  res.json({
    ...cacheMetrics,
    requestsPerMinute: rpm
  });
};