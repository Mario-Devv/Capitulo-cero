import { UserModel } from '../Models/users.js'
import bcrypt from 'bcrypt'

export class userController {
  static async getAllUser (req, res) {
    try {
      // const { password } = req.body
      const users = await UserModel.find()

      res.status(200).json({
        users: users.map(user => ({
          id: user._id,
          email: user.email,
          username: user.username
        })
        )
      })
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error })
    }
  }

  static async mongoCreateUser (req, res) {
    try {
      const { email, username, password } = req.body

      const saltRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      const existingUser = await UserModel.findOne({ email })

      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' })
      }

      const newUser = new UserModel({ email, username, password: hashedPassword })
      await newUser.save()

      res.status(201).json({
        id: newUser._id,
        email: newUser.email,
        username: newUser.username
      })
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error })
    }
  }

  static async login (req, res) {
    try {
      const { email, password } = req.body

      const user = await UserModel.findOne({ email })
      const comparedPassword = await bcrypt.compare(password, user.password)

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' })
      }

      if (!comparedPassword) {
        return res.status(401).json({ message: 'Contraseña incorrecta' })
      }

      res.status(200).json({
        user: {
          id: user._id,
          email: user.email,
          username: user.username
        }
      })
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error })
    }
  }
}
