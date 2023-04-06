import express from "express";
import { addsleep, deletesleep, getsleep } from "../controllers/sleepController.js";
import { signup, login } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addsleep", addsleep);
router.delete("/deletesleep", deletesleep);
router.get("/getsleep",getsleep);

export default router;
