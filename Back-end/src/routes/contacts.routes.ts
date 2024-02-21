import { Router } from "express";
import { contactCreateController, contactDeleteController, contactReadController, contactUpdateController } from "../controllers/contact.controllers";
import { contactsCreateSchema, contactsUpdateSchema } from "../schemas/contacts.schemas";
import { verifyBody, verifyToken } from "../middlewares/globals.middlewares";

export const contractsRouter: Router = Router();

contractsRouter.post("/",verifyBody(contactsCreateSchema), verifyToken, contactCreateController)
contractsRouter.get("/", verifyToken, contactReadController)
contractsRouter.patch("/:id",verifyBody(contactsUpdateSchema), verifyToken, contactUpdateController)
contractsRouter.delete("/:id", verifyToken, contactDeleteController)