import users from '../database.js'

export const deleteUserServices = (userId) => {
  const userIndex = users.findIndex((user) => user.uuid === userId)

  delete users[userIndex]

  return [204]
}
