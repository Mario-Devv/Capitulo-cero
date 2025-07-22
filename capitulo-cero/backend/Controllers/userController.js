import { UserModel } from '../Models/users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

  static async mongoCreateUser(req, res) {
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

  static async login(req, res) {
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

      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      )

      res.status(200).json({
        token,
        message: 'Login successful',
        user: {
          email: user.email,
          username: user.username
        }
      })
    } catch (error) {
      res.status(500).json(
        {
          message: 'Email o contraseña incorrectos',
          error
        })
    }
  }

  static async updateUser (req, res) {
    try {
      const { username, email } = req.body

      const updateUser = await UserModel.findByIdAndUpdate(
        req.userId,
        { username, email },
        { new: true }
      )

      if (!updateUser) {
        return res.status(404).json({ message: 'User not found' })
      }

      res.status(200).json({ message: 'User updated successfully', user: updateUser })
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error })
    }
  }

  static async deleteUser (req, res) {
    try {
      const user = await UserModel.findByIdAndDelete(req.userId)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      res.status(500).json({ message: 'Error deleting user', error })
    }
  }
}
