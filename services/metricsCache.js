let cache = {
  total: 0,
  failed: 0,
  latencySum: 0
};

export const updateMetrics = (status, latency) => {
  cache.total++;
  if (status >= 400) cache.failed++;
  cache.latencySum += latency;
};

export const getMetrics = () => ({
  totalRequests: cache.total,
  failedRequests: cache.failed,
  avgLatency: cache.total
    ? cache.latencySum / cache.total
    : 0
});