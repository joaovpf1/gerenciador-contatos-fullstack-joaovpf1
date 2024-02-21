import { z } from 'zod';

export const EditModalSchema = z.object({
    nomeCompleto: z.string(),
    email: z.string().email(),
    telefone: z.string(),
})