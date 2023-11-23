import bcrypt from 'bcryptjs'
import users from '../database.js'

export const updateUserServices = async (userId, data) => {
  const { hash } = bcrypt

  const id = users.findIndex((user) => user.uuid === userId)

  if (!id) {
    throw new Error('User not found')
  }

  if (data.password) {
    const newPassword = await hash(data.password, 12)
    users[id].password = newPassword
  }

  // users[id] é um objeto contido em um array
  Object.keys(users[id]).forEach((key) => {
    Object.keys(data).forEach((dataKey) => {
      if (key === dataKey && key !== 'createdAt' && key !== 'password') {
        users[id][key] = data[dataKey]
      }
    })
  })

  users[id].updatedAt = new Date()

  return users[id]
}
