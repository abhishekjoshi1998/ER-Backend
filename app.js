import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./src/utils/db.js";
import userRoute from "./src/routes/user.route.js";
import projectRoute from "./src/routes/project.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Force custom CORS headers manually
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL || "https://entity-craft.vercel.app");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Optional CORS middleware for added reliability
app.use(cors({
  origin: process.env.CLIENT_URL || "https://entity-craft.vercel.app",
  credentials: true,
}));

// Handle preflight (OPTIONS) requests
app.options("*", cors({
  origin: process.env.CLIENT_URL || "https://entity-craft.vercel.app",
  credentials: true,
}));

// Connect to DB
connectDB();

// JSON middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoute);
app.use("/api/project", projectRoute);

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
