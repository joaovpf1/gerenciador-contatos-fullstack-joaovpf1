import { Router } from "express";
import { clientCreateController, deleteClientController, readClientController, readClientIdController, updateClientController } from "../controllers/clients.controllers";
import { verifyBody, verifyToken } from "../middlewares/globals.middlewares";
import { clientsCreateSchema, clientsUpdateSchema } from "../schemas/clients.schema";

export const clientsRouter: Router = Router();

clientsRouter.post("", verifyBody(clientsCreateSchema), clientCreateController)
clientsRouter.get("/", verifyToken, readClientController)
clientsRouter.get("/:id", verifyToken, readClientIdController)
clientsRouter.patch("/:id", verifyBody(clientsUpdateSchema), verifyToken, updateClientController)
clientsRouter.delete("/:id", verifyToken, deleteClientController)