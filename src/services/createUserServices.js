import users from '../database.js'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

export const createUserServices = async (userData) => {
  console.log(userData)
  const { hash } = bcrypt
  // const hash = bcrypt.hash;

  userData.password = await hash(userData.password, 12)

  const newUser = {
    uuid: uuidv4(),
    ...userData,
    createdOn: new Date(),
    updatedOn: new Date()
  }

  users.push(newUser)
  delete newUser.password

  return newUser
}
