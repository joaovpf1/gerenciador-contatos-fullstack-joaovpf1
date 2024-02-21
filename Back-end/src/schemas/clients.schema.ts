import { z } from "zod";

export const clientsSchema = z.object({
    id: z.number().positive().int(),
    nomeCompleto: z.string().max(45),
    email: z.string().email(),
    senha: z.string(),
    telefone: z.string(),
    dataDeRegistro: z.string(),
});

export const clientsCreateSchema = clientsSchema.pick({
    nomeCompleto: true,
    email: true,
    senha: true,
    telefone: true,
});

export const clientsUpdateSchema = clientsSchema.partial();

export const clientsReturnSchema = clientsSchema.omit({ senha:true });

export const clientsReadSchema = clientsReturnSchema.array();

export const clientsLoginSchema = clientsCreateSchema.pick({
    email:true,
    senha:true,
})

// export const clientsLoginResult = clientsReturnSchema 