import { UserNotFoundException } from '../controllers/errors/user-not-found-exception.js'
import users from '../database.js'

export const listUserByIdServices = (idUser) => {
  console.log(idUser)
  const user = users.find(({ id }) => id === idUser)
  if (!user) {
    throw new UserNotFoundException()
  }
  console.log(user)

  delete user.password

  return user
}
