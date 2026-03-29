import RequestLog from "../models/RequestLog.js";

const retryRequest = async (fn, meta, retries = 3) => {
  let attempt = 0;

  while (attempt <= retries) {
    try {
      return await fn();
    } catch (err) {
      attempt++;

      await RequestLog.create({
        ip: meta.ip,
        endpoint: meta.endpoint,
        status: 500,
        latency: 0,
        retryCount: attempt
      });

      if (attempt > retries) throw err;
    }
  }
};

export default retryRequest;