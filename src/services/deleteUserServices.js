import users from '../database.js'

export const deleteUserServices = (userId, response) => {
  const userIndex = users.findIndex((user) => user.uuid === userId)
  if (!userIndex) {
    return response.json('User not found')
  }

  delete users[userIndex]

  return response.json('Deleted')
}
