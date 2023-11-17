import { UserNotFoundException } from '../controllers/errors/user-not-found-exception.js'
import users from '../database.js'

export const deleteUserServices = (userId) => {
  const userIndex = users.findIndex(({ id }) => id === userId)
  if (userIndex < 0) {
    throw new UserNotFoundException()
  }
  delete users[userIndex]
}
