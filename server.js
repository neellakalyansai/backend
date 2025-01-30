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

// ✅ CORS Middleware should be placed **before routes**
app.use(cors({
  origin: ["http://localhost:3000", "https://your-frontend.com"], // Add frontend URL here
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // Required for authentication (cookies, sessions)
}));

// ✅ Ensure API Routes Have /api Prefix
app.use("/api", require("./Routes/portfolioRoutes")); 

// ✅ Handle React frontend (ONLY if hosted on the same backend)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/front-end/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/front-end/build", "index.html"));
  });
}

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
