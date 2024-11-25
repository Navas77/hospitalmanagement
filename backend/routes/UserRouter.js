import express from 'express';
import { registerUser, loginUser, getProfile,updateProfile } from '../controllers/UserController.js';
import authUser from '../middlewares/Authuser.js';
import upload from '../middlewares/Multer.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

userRouter.get('/get-profile', authUser, getProfile);
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)

export default userRouter;

