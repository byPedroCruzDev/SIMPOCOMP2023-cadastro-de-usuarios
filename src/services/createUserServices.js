import users from '../database.js'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

export const createUserServices = async (userData) => {
  console.log(userData)
  const { hash } = bcrypt
  // const hash = bcrypt.hash;
  try {
    userData.password = await hash(userData.password, 12)

    const newUser = {
      uuid: uuidv4(),
      ...userData,
      createdOn: new Date(),
      updatedOn: new Date()
    }

    const respUser = {
      ...userData,
      uuid: newUser.uuid,
      createdOn: new Date(),
      updatedOn: new Date()
    }

    users.push(newUser)

    return [201, respUser]
  } catch (error) {
    console.error('Erro ao criar usuário:', error)
    return [500, { error: 'Erro interno do servidor.' }]
  }
}
