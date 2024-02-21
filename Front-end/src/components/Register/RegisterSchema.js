import { z } from 'zod';

export const RegisterSchema = z.object({
    nomeCompleto: z.string().nonempty('Nome é obrigatório'),
    email: z.string().nonempty('E-mail é obrigatorio').email('Forneça um e-mail válido'),
    senha: z.string().nonempty('Senha é obrigatória').min(4, 'É necessário pelo menos quatro caracteres.'),
        // .regex(/(?=.*?[A-Z])/, 'É necessário pelo menos uma letra maiúscula')
        // .regex(/(?=.*?[a-z])/, 'É necessário pelo menos uma letra minúscula')
        // .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número.'),
    telefone: z.string().nonempty('Telefone obrigatório.'),
});