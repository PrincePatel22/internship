import express from "express";
import {registration,login,userprofile, update} from "../Controllers/usercontroller.js";
import {getproducts,addtocart,getcart,addone,subone,removeproduct,addorder} from "../Controllers/productcontroller.js";

const router = express.Router();

router.post("/registration",registration);
router.post("/login",login);
router.get("/profile",userprofile);
router.put("/update",update);
router.get("/getproducts",getproducts);

router.post("/addtocart", addtocart);
router.get("/getcart",getcart);
router.post("/addone", addone);
router.post("/subone", subone);
router.post("/removeproduct", removeproduct);

router.post("/addorder",addorder)

export default router;
