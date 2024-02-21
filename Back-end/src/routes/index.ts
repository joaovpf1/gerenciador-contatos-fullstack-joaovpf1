import { Router } from "express";
import { clientsRouter } from "./clients.routes";
import { contractsRouter } from "./contacts.routes";
import { loginRouter } from "./login.routes";

export const routes: Router = Router();

routes.use("/clients", clientsRouter)
routes.use("/contacts", contractsRouter)
routes.use("/login", loginRouter)

