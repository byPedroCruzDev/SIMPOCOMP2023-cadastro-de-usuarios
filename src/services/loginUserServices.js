import bcrypt from 'bcryptjs'
import users from '../database.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const userLoginServices = async (email, password) => {
  const { compare } = bcrypt

  const user = users.find((user) => user.email === email)

  if (!user) {
    return [401, { message: 'email or password not found' }]
  }

  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    return [401, { message: 'email or passaword not found' }]
  }
  try {
    const token = jwt.sign({}, process.env.SECRET_KEY, {
      expiresIn: '24h',
      subject: user.uuid.toString()
    })

    return [200, { token }]
  } catch (error) {
    console.error('Error creating token:', error)
    return [500, { message: 'Internal error creating token.' }]
  }
}
