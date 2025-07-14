import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./src/utils/db.js";
import userRoute from "./src/routes/user.route.js";
import projectRoute from "./src/routes/project.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to DB
connectDB();
console.log(process.env.CLIENT_URL);

// CORS Configuration
const allowedOrigins = [process.env.CLIENT_URL || "https://entity-craft.vercel.app"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Handle preflight (OPTIONS) requests globally
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoute);
app.use("/api/project", projectRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
