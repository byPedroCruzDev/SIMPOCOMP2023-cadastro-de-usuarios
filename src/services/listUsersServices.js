import users from '../database.js'

export const listUserServices = () => {
  try {
    const respUser = users.filter((users) => delete users.password)
    return [200, respUser]
  } catch (error) {
    return [404, { error: 'User not found' }]
  }
}
