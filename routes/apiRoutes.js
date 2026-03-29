import express from "express";
import retryRequest from "../services/retryService.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "API Working" });
});

router.get("/unstable", async (req, res) => {
  const result = await retryRequest(
    async () => {
      if (Math.random() < 0.7) throw new Error("Fail");
      return "Recovered after retry";
    },
    { ip: req.ip, endpoint: req.originalUrl }
  );

  res.json({ message: result });
});

router.get("/heavy", async (req, res) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  res.json({ message: "Heavy API" });
});

export default router;