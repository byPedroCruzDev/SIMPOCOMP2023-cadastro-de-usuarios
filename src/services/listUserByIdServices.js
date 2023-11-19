import users from '../database.js'

export const listUserByIdServices = (idUser) => {
  console.log(idUser)
  const userById = users.find((user) => user.uuid === idUser)
  console.log(userById)

  delete userById.password

  return [200, userById]
}
