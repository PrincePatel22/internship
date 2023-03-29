import express from "express";
import {
  addlocation,
  deletelocation,
  getlocation,
  updatelocation,
} from "../controllers/locController.js";
import {
  addemployee,
  getemployee,
  deleteemployee,
  updateemployee,
  getaddress,
} from "../controllers/empController.js";
import {
  addhr,
  getemployeeid,
  gethr,
  deletehr,updatehr
} from "../controllers/hrController.js";

const router = express.Router();

router.post("/addemployee", addemployee);
router.get("/getemployee", getemployee);
router.get("/getaddress", getaddress);
router.post("/deleteemployee", deleteemployee);
router.post("/updateemployee", updateemployee);

router.post("/addlocation", addlocation);
router.get("/getlocation", getlocation);
router.post("/deletelocation", deletelocation);
router.post("/updatelocation", updatelocation);

router.get("/getemployeeid", getemployeeid);
router.post("/addhr", addhr);
router.get("/gethr", gethr);
router.post("/deletehr", deletehr);
router.post("/updatehr",updatehr);

export default router;
