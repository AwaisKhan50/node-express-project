import express from "express";
import { registerUser,loginUser,currentUser, deleteUser } from "../controllers/userController.js";
import validatetoken from "../middleware/validateTokenHandler.js";

const userRouter = express.Router();
userRouter.post("/register",registerUser);

userRouter.post("/login",loginUser);

userRouter.get("/current",validatetoken,currentUser);

userRouter.delete('/removeUser/:id',deleteUser);


export default userRouter;
