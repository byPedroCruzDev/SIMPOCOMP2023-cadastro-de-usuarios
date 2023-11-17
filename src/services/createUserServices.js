import users from '../database.js'
import { randomUUID } from 'crypto'
import { hash } from 'bcrypt'
import { UserAlreadyExistsException } from '../controllers/errors/user-already-exists-exception.js'

export const createUserServices = async (userData) => {
  const userAlreadyExists = users.find(({ email }) => email === userData.email)

  if (userAlreadyExists) {
    throw new UserAlreadyExistsException()
  }

  const passwordHash = await hash(userData.password, 12)

  userData.password = passwordHash

  const user = {
    id: randomUUID(),
    name: userData.name,
    email: userData.email,
    password: userData.password,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  users.push(user)
  delete user.password
  return user
}
