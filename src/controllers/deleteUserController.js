import { deleteUserServices } from '../services/deleteUserServices.js'
import { HttpStatus } from './helpers/httpStatus.js'

export const deleteUserController = (request, response) => {
  deleteUserServices(request.params.id)

  return response.status(HttpStatus.NO_CONTENT).json()
}
