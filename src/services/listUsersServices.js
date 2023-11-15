import users from '../database.js'

export const listUserServices = () => {
  return [200, users]
}
