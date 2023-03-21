import express from "express";
import {registration,login,userprofile, update} from "../Controllers/usercontroller.js";
import {getproducts,addtocart,getcart,addone,subone,removeproduct,addorder,orders,orderview} from "../Controllers/productcontroller.js";

const router = express.Router();

// homePage routes
router.post("/registration",registration);
router.post("/login",login);
router.get("/profile",userprofile);
router.put("/update",update);
router.get("/getproducts",getproducts);

// cart routes 
router.post("/addtocart", addtocart);
router.get("/getcart",getcart);
router.post("/addone", addone);
router.post("/subone", subone);
router.post("/removeproduct", removeproduct);

// order routes
router.post("/addorder",addorder);
router.get("/orders", orders);
router.get("/orderview/:id", orderview);


export default router;
