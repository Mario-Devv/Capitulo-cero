import { UserModel } from '../Models/users.js'

export class userController {
  static async getAllUser (req, res) {
    try {
      const users = await UserModel.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error })
    }
  }

  static async mongoCreateUser (req, res) {
    try {
      const { email, username, password } = req.body

      const existingUser = await UserModel.findOne({ email })

      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' })
      }

      const newUser = new UserModel({ email, username, password })
      await newUser.save()

      res.status(201).json(newUser)
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error })
    }
  }
}
