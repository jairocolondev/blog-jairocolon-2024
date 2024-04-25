import express from "express";
import { users } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/user", users);

export default router;
