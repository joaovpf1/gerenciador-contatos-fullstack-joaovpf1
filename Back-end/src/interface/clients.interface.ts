import { DeepPartial } from "typeorm";
import { z } from "zod";
import { clientsCreateSchema, clientsLoginSchema, clientsReadSchema, clientsReturnSchema, clientsSchema, clientsUpdateSchema } from "../schemas/clients.schema";

export type IClients = z.infer<typeof clientsSchema>;

export type IClientsCreate = z.infer<typeof clientsCreateSchema>;

export type IClientsRead = z.infer<typeof clientsReadSchema>;

export type IClientsUpdate = DeepPartial<typeof clientsUpdateSchema>;

export type IClientsReturn = z.infer<typeof clientsReturnSchema>;

export type IClientsLogin = z.infer<typeof clientsLoginSchema>;

export type ILoginReturn = { token: string  };

export type ILoginResult = ILoginReturn extends IClientsReturn