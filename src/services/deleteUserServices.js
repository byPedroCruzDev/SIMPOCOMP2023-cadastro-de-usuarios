import users from '../database.js'

export const deleteUserServices = (userId) => {
  const userIndex = users.findIndex((user) => user.uuid === userId)
  if (!userIndex) {
    throw new Error('User not found')
  }

  delete users[userIndex]
}
