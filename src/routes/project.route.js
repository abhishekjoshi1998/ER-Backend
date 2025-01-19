import express from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from "../controllers/project.controller.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, createProject);
router.get("/getAllProjects", authMiddleware, getAllProjects);

router.get("/getProject/:projectId", authMiddleware, getProjectById);

router.put("/updateProject/:projectId", authMiddleware, updateProject);
router.put("/deleteProject/:projectId", authMiddleware, deleteProject);

export default router;
