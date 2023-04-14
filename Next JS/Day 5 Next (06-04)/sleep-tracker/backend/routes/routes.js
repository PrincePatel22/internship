import express from "express";
import {
  addsleep,
  deletesleep,
  getsleeps,
} from "../controllers/sleepController.js";
import { signup, login } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addsleep", addsleep);
router.post("/deletesleep", deletesleep);
router.post("/getsleeps", getsleeps);

export default router;
