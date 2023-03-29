import express from "express";
import { upload } from "../middleware/image-middleware.js";
import { addUser,getUsers,getUser,deleteUser,updateStatus,editUser } from "../controllers/userController.js";
import { importUsers,exportUsers } from "../controllers/impExpController.js";

const router = express.Router();

router.post("/adduser",upload.single('img'), addUser);
router.get("/getusers",getUsers);
router.post("/getuser", getUser); 
router.post("/deleteuser",deleteUser);
router.post("/updatestatus",updateStatus);
router.put("/edituser/:id", upload.single("img"), editUser);

router.post("/exportusers", exportUsers);
router.get("/importusers", importUsers);

export default router;