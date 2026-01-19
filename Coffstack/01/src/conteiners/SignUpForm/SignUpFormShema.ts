import { z } from "zod"; 
export const signUpFormSchema = z.object({
  name: z
  .string({ message: "O nome é obrigatório" })
  .min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
  email: z
  .string()
  .min(1, { message: "O e-mail é obrigatório" })
  .email({ message: "E-mail inválido" }),
  password: z
  .string()
  .min(1, { message: "A senha é obrigatória" })
  .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
  confirmPassword: z
  .string()
  .min(1, { message: "A confirmação de senha é obrigatória" })
  .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export type SignUpForm = z.infer<typeof signUpFormSchema>;