import { listUserServices } from '../services/listUsersServices.js'
import { ServerError } from './errors/server-error.js'
import { HttpStatus } from './helpers/httpStatus.js'

export const listUserController = (request, response) => {
  try {
    const data = listUserServices()

    return response.status(HttpStatus.OK).json(data)
  } catch {
    return response.status(HttpStatus.SERVER_ERROR).json(new ServerError().message)
  }
}
