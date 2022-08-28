import { Router } from "express";
const router: Router = Router();
import * as UserController from "../Controllers/UserController";

//create user
router.post("/rahul", UserController.createUser);

//get user
router.get("/:userId", UserController.getUser);

//update user
router.patch("/", UserController.updateUser);

router.delete("/deleteUser",UserController.deleteUser)

export default router;
