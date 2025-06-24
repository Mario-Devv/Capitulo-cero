import { readJSON } from '../utils/utils.js'
const users = readJSON('../user.json')

export class userModel {
  static getAll () {
    return users
  }

  static getByID ({ id }) {
    return users.find(user => user.id === Number(id))
  }

  static getByUserName ({ username }) {
    return users.find(user => user.username === username)
  }
}
