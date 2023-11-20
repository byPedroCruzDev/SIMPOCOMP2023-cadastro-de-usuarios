import users from '../database.js'

export const listUserServices = () => {
  try {
    return [200, users]
  } catch (error) {
    return [404, { error: 'User not found' }]
  }
}
