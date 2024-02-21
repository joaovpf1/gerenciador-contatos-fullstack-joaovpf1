import { z } from "zod";

export const contactsSchema = z.object({
    id: z.number().positive().int(),
    nomeCompleto: z.string().max(45),
    email: z.string().email(),
    telefone: z.string(),
    dataDeRegistro: z.string(),
});

export const contactsCreateSchema = contactsSchema.pick({
    nomeCompleto: true,
    email: true,
    telefone: true,
});

export const contactsUpdateSchema = contactsSchema.partial();

//export const contactsReturnSchema = contactsSchema.omit();

export const contactsReadSchema = contactsSchema.array();