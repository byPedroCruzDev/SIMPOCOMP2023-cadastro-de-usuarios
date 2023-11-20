import users from '../database.js'

export const listUserByIdServices = (idUser) => {
  try {
    const userById = users.find((user) => user.uuid === idUser)
    console.log(userById)

    delete userById.password

    return [200, userById]
  } catch (error) {
    return [404, { error: 'User not found' }]
  }
}
