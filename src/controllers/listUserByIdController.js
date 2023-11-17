import { listUserByIdServices } from '../services/listUserByIdServices.js'
import { HttpStatus } from './helpers/httpStatus.js'

export const listUserByIdController = (request, response) => {
  const data = listUserByIdServices(request.params.id)

  return response.status(HttpStatus.OK).json(data)
}
