import users from '../database.js'
import { UserNotFoundException } from '../controllers/errors/user-not-found-exception.js'

export const updateUserServices = async (userId, data) => {
  const indexUser = users.findIndex(({ id }) => id === userId)
  if (indexUser < 0) {
    throw new UserNotFoundException()
  }

  // users[indexUser] é um objeto contido em um array
  if (data.name) {
    users[indexUser].name = data.name
  }

  if (data.email) {
    users[indexUser].email = data.email
  }

  users[indexUser].updatedAt = new Date()

  return users[indexUser]
}
