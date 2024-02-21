import { z } from 'zod';

export const EditContactSchema = z.object({
    nomeCompleto: z.string().nonempty('Nome é obrigatório'),
    email: z.string().nonempty('Este campo é obrigatório').email('Forneça um e-mail válido'),
    telefone: z.string().nonempty('Este campo é obrigatório'),
})