import { Router } from "express";
import { loginController } from "../controllers/login.controllers";
import { clientsLoginSchema } from "../schemas/clients.schema";
import { verifyBody } from "../middlewares/globals.middlewares";

export const loginRouter: Router = Router();

loginRouter.post("/", verifyBody(clientsLoginSchema),  loginController);