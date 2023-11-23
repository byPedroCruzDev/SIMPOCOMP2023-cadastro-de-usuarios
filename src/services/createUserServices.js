import users from '../database.js'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'

export const createUserServices = async (userData) => {
  const { hash } = bcrypt
  // const hash = bcrypt.hash;
  const indexUser = users.findIndex((user) => user.email === userData.email)

  // interrompe a rotina do sistema devolvendo um erro
  if (indexUser !== -1) {
    throw new Error('Email already exists')
  }

  userData.password = await hash(userData.password, 12)

  const newUser = {
    uuid: uuidv4(),
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const respUser = {
    uuid: uuidv4(),
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  users.push(newUser)
  // mesmo utilizando o delete apos salva o usuario ele paga o password
  // do usuario do banco de dados.
  delete respUser.password

  return respUser
}
