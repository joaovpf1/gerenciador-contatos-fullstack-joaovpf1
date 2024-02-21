import { z } from "zod";
import { contactsCreateSchema, contactsReadSchema, contactsSchema, contactsUpdateSchema } from "../schemas/contacts.schemas";
import { DeepPartial } from "typeorm";

export type IContacts = z.infer<typeof contactsSchema>;

export type IContactsCreate = z.infer<typeof contactsCreateSchema>;

export type IContactsRead = z.infer<typeof contactsReadSchema>;

export type IContactsUpdate = DeepPartial<typeof contactsUpdateSchema>;

//export type IContactsReturn = z.infer<typeof contactsReturnSchema>;
