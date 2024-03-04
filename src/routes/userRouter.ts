import express from "express";
import expressAsyncHandler from 'express-async-handler';
import { checkEmail, forgotPassword, getMyList, resetPassword, signin, signup } from "../controllers/userController";


const userRouter = express.Router();


userRouter.post('/signup', expressAsyncHandler(signup));
userRouter.post('/signin', expressAsyncHandler(signin));
userRouter.post('/forgot', expressAsyncHandler(forgotPassword));
userRouter.post('/getmylist', expressAsyncHandler(getMyList));
userRouter.post("/checkemail", expressAsyncHandler(checkEmail));
userRouter.patch('/reset/:token', expressAsyncHandler(resetPassword));


export default userRouter;