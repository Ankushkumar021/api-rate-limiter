import mongoose from "mongoose";

const schema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  ip: String,
  endpoint: String,
  status: Number,
  latency: Number,
  retryCount: { type: Number, default: 0 },
  errorType: {
    type: String,
    enum: ["NONE", "CLIENT_ERROR", "SERVER_ERROR"],
    default: "NONE"
  }
});

export default mongoose.model("RequestLog", schema);