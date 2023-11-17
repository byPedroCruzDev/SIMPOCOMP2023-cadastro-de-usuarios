import { listUserServices } from '../services/listUsersServices.js'
import { HttpStatus } from './helpers/httpStatus.js'

export const listUserController = (request, response) => {
  const data = listUserServices()

  return response.status(HttpStatus.OK).json(data)
}
