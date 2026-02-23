import express from "express";

const app = express();
const PORT = 3000;

// Middleware (just for testing)
app.use(express.json());

// Test Route 1
app.get("/", (req, res) => {
  res.send("🚀 Express server is running on AWS EC2!");
});

// Test Route 2 (API example)
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API working perfectly",
  });
});

// Test Route 3 (POST request)
app.post("/api/data", (req, res) => {
  res.json({
    received: req.body,
    status: "Data received successfully",
  });
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
