import { login, getUser, signup, updateProfile } from "../controllers/user.controller.js";
import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/", signup);
router.post("/login", login);
router.get("/getUser", authMiddleware, getUser);
router.patch("/updateProfile", authMiddleware, updateProfile)

export default router;