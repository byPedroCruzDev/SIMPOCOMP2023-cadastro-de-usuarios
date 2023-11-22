import users from '../database.js'

export const listUserByIdServices = (idUser, response) => {
  const userById = users.find((user) => user.uuid === idUser)
  if (!userById) {
    return response.json('User not found')
  }

  delete userById.password

  return userById
}
