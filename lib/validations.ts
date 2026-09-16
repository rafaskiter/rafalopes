import { z } from "zod";

export interface ContactMessages {
  invalidName: string;
  invalidEmail: string;
  shortMessage: string;
}

/**
 * O formulário existe nos dois idiomas, então as mensagens vêm de fora.
 * O servidor usa o padrão em português como rede de segurança — ele valida
 * de novo, mas o cliente barra antes e é a mensagem dele que a pessoa lê.
 */
export function makeContactSchema(m: ContactMessages) {
  return z.object({
    name: z.string().min(2, m.invalidName),
    email: z.string().email(m.invalidEmail),
    message: z.string().min(10, m.shortMessage),
  });
}

export const contactSchema = makeContactSchema({
  invalidName: "Informe seu nome",
  invalidEmail: "E-mail inválido",
  shortMessage: "Mensagem muito curta",
});

export type ContactInput = z.infer<typeof contactSchema>;
