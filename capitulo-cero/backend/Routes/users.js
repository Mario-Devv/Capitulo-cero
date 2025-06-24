import { Router } from 'express'
import { userController } from '../Controllers/userController.js'

export const userRouter = Router()

userRouter.get('/login', userController.getAll)
userRouter.get('/login/:id', userController.getByid)

userRouter.get('/register', (req, res) => {
  res.send('Zona para registro de usuarios')
})
