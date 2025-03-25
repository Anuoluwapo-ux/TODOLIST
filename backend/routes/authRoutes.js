import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { validRegister } from "../middlewares/Valid.js";

export const authRouters = Router();

authRouters.post('/register', validRegister, authController.register);
authRouters.post('/login', authController.login);
authRouters.post('/logout', authController.logout);