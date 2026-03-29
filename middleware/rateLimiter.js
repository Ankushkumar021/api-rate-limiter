import TokenBucket from "../services/tokenBucket.js";

const buckets = new Map();

const LIMIT = 100;
const REFILL = 100 / 60;

export default (req, res, next) => {
  const key = req.ip;

  if (!buckets.has(key)) {
    buckets.set(key, new TokenBucket(LIMIT, REFILL));
  }

  const bucket = buckets.get(key);

  if (!bucket.consume()) {
    return res.status(429).json({
      message: "Too Many Requests"
    });
  }

  next();
};