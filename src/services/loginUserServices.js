import bcrypt from 'bcryptjs'
import users from '../database.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const userLoginServices = async (email, password) => {
  const { compare } = bcrypt

  const user = users.find((user) => user.email === email)

  if (!user) {
    throw new Error('Email not found')
  }

  const passwordMatch = await compare(password, user.password)
  if (!passwordMatch) {
    throw new Error('Password not found')
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: '24h',
    subject: user.uuid.toString()

  })

  return { token }
}
