import { userModel } from '../Models/users.js'

export class userController {
  static getAll (req, res) {
    const users = userModel.getAll()
    res.json(users)
  }

  static getByid (req, res) {
    const { id } = req.params
    const user = userModel.getByID({ id })

    if (!user) {
      return res.status(404).json({ message: 'The user do not exist' })
    }

    res.json(user)
  }
}
