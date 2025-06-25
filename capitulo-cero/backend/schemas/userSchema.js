import { z } from 'zod'

export const userRegisterSchema = z.object({
  email: z.string().email(),
  username: z.string()
    .min(3, {
      message: 'Nombre de usuario debe tener al menos 3 caracteres'
    })
    .max(20, {
      message: 'Nombre de usuario no puede tener más de 20 caracteres'
    }),

  password: z.string()
    .min(6, {
      message: 'Contraseña debe tener al menos 6 caracteres'
    })
    .max(100, {
      message: 'Contraseña no puede tener más de 100 caracteres'
    })
})
