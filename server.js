const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const dbconfig = require("./dbconfig");

const app = express();
const port = process.env.PORT || 5000;

require("./Models/user-model");
require("./Models/portfolio-model");

app.use(express.json()); // ✅ Enable JSON parsing

// ✅ Move CORS Middleware Before Any Routes
const allowedOrigins = ["http://localhost:3000", "https://neellakalyansai.netlify.app"];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  // Handle OPTIONS preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  
  next();
});

// ✅ Ensure API Routes Have /api Prefix
app.use("/api", require("./Routes/portfolioRoutes"));

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
