# 🚀 API Rate Limiter & Monitoring System

## 📌 Overview

This project is a **production-grade backend system** built using Node.js, Express, and MongoDB that:

* Controls API traffic using the **Token Bucket Algorithm**
* Logs every request for analysis
* Tracks system performance (latency, failures, throughput)
* Implements retry logic for handling transient failures

---

## 🎯 Features

### 🔥 Rate Limiting

* Token Bucket algorithm
* Limits requests per IP (100 requests/minute)
* Returns `429 Too Many Requests` when limit exceeded

### 📝 Request Logging

* Logs:

  * Timestamp
  * IP Address
  * Endpoint
  * Response Status
  * Latency
  * Error Type
* Stored in MongoDB

### 📊 Monitoring System

Tracks:

* Total Requests
* Failed Requests
* Average Latency
* Requests Per Minute

### 🔁 Retry Mechanism

* Automatically retries failed requests
* Tracks retry attempts
* Improves system reliability

### ⚙️ Middleware-Based Architecture

* Clean and modular design
* Easy to extend and maintain

---

## 🏗️ Project Structure

```
api-rate-limiter/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── services/
│── app.js
│── server.js
│── .env
│── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Ankushkumar021/api-rate-limiter.git
cd api-rate-limiter
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create `.env` file:

```
PORT=5000
MONGO_URI= Add your MONGO URI
```

---

### 4. Run the Project

```bash
npm run dev
```

---

## 🧪 API Endpoints

### 🔹 Health Check

```
GET /api/test
```

---

### 🔹 Heavy API (Latency Testing)

```
GET /api/heavy
```

---

### 🔹 Unstable API (Retry Testing)

```
GET /api/unstable
```

---

### 🔹 Metrics Endpoint

```
GET /metrics
```

---

## 🧠 How It Works

### 🔹 Token Bucket Algorithm

* Each user gets a bucket of tokens
* Each request consumes 1 token
* Tokens refill over time
* If no tokens → request blocked

---

### 🔹 Middleware Flow

```
Request → Validate → Logger → RateLimiter → Route → Response
```

---

### 🔹 Metrics Calculation

* In-memory cache for fast access
* MongoDB for persistent storage

---

## 📊 Sample Response

```json
{
  "totalRequests": 120,
  "failedRequests": 15,
  "avgLatency": 45,
  "requestsPerMinute": 30
}
```

---

## ⚠️ Limitations

* In-memory rate limiting (not distributed)
* Resets on server restart
* Not suitable for multi-instance deployments

---

## 🚀 Future Improvements

* Redis-based distributed rate limiter
* API Gateway integration
* Real-time dashboard (React)
* Docker deployment
* Prometheus + Grafana monitoring

---

## 💡 Use Cases

* API protection (DDoS prevention)
* SaaS rate limiting (free vs paid tiers)
* Backend monitoring systems
* Microservices traffic control

---
## 📜 License

MIT License
