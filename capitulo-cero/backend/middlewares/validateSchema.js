import { userRegisterSchema } from '../schemas/userSchema.js'

export const validateSchema = (req, res, next) => {
  const result = userRegisterSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json(result.error)
  }

  next()
}
