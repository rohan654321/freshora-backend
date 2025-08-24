const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const serverless = require("serverless-http");

// Load env
dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/orders", require("./routes/orders"));
app.use("/api/customers", require("./routes/customers"));
app.use("/api/tracking", require("./routes/tracking"));
app.use("/api/services", require("./routes/services"));
app.use("/api", require("./routes/auth"));

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// ✅ Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
