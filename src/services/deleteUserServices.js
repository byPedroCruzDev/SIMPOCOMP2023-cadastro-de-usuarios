import users from '../database.js'

export const deleteUserServices = (userId) => {
  try {
    const userIndex = users.findIndex((user) => user.uuid === userId)

    delete users[userIndex]
    return [204]
  } catch (error) {
    return [404, { error: 'User not found' }]
  }
}
