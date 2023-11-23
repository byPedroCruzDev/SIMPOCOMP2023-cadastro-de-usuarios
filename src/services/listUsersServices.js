import users from '../database.js'

export const listUserServices = () => {
  const respUser = users.filter((users) => delete users.password)

  return respUser
}
