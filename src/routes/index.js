import { Router } from "express";
import authRoutes from "./auth.routes.js";

const router = Router();

// API health check route
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
router.use("/auth", authRoutes);

export default router;
