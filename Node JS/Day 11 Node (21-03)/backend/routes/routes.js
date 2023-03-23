import  express  from "express";
import { addemployee,getemployee,deleteemployee,updateemployee } from "../controllers/empController.js";


const router = express.Router();

router.post("/addemployee", addemployee);
router.get("/getemployee",getemployee);
router.post("/deleteemployee", deleteemployee);
router.post("/updateemployee",updateemployee);


export default router;
