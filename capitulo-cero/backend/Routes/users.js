import { Router } from 'express'
import { userController } from '../Controllers/userController.js'
import { validateSchema } from '../middlewares/validateSchema.js'

export const userRouter = Router()

userRouter.get('/', userController.getAllUser)
// userRouter.get('/:id', userController.getByid)
userRouter.post('/login', userController.login)

userRouter.post('/register', validateSchema, userController.mongoCreateUser)
