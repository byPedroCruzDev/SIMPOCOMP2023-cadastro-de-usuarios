import bcrypt from 'bcryptjs'
import users from '../database.js'

export const updateUserServices = async (userId, data) => {
  const { hash } = bcrypt
  try {
    const id = users.findIndex((user) => user.uuid === userId)
    console.log(`id obtido na rota: ${userId}, usuario ${id}`)

    if (data.password) {
      const newPassword = await hash(data.password, 12)
      users[id].password = newPassword
    }
    // users[id] é um objeto contido em um array

    Object.keys(users[id]).forEach((key) => {
      Object.keys(data).forEach((dataKey) => {
        if (key === dataKey && key !== 'createdOn' && key !== 'password') {
          users[id][key] = data[dataKey]
        }
      })
    })

    users[id].updatedOn = new Date()

    return [200, users[id]]
  } catch (error) {
    return [404, { error: 'User not found' }]
  }
}
