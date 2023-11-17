import users from '../database.js'

export const listUserServices = () => {
  return users.map((user) => ({ name: user.name, email: user.email, createdAt: user.createdAt, updatedAt: user.updatedAt }))
}
