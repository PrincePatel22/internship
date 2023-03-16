import express from "express";
import {registration,login,userprofile, update} from "../Controllers/usercontroller.js";
import {getproducts,addtocart} from "../Controllers/productcontroller.js";

const router = express.Router();

router.post("/registration",registration);
router.post("/login",login);
router.get("/profile",userprofile);
router.put("/update",update);
router.get("/getproducts",getproducts);
router.post("/addtocart", addtocart);

 
export default router;
