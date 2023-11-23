import users from '../database.js'

export const listUserByIdServices = (idUser, response) => {
  const userById = users.find((user) => user.uuid === idUser)
  if (!userById) {
    throw new Error('User not found')
  }

  delete userById.password

  return userById
}
