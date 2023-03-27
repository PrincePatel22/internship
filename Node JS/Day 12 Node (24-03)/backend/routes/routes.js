import express from "express";
import { addUser,getUsers,getUser,deleteUser,updateStatus,editUser } from "../controllers/userController.js";
import { upload } from "../middleware/image-middleware.js";

const router = express.Router();

router.post("/adduser",upload.single('img'), addUser);
router.get("/getusers",getUsers);
router.post("/getuser", getUser);
router.post("/deleteuser",deleteUser);
router.post("/updatestatus",updateStatus);

router.put("/edituser/:id", upload.single("img"), editUser);
export default router;