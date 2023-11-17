import { deleteUserServices } from '../services/deleteUserServices.js'
import { ParamIdDto } from './dto/param-id-dto.js'
import { ServerError } from './errors/server-error.js'
import { UserNotFoundException } from './errors/user-not-found-exception.js'
import { HttpStatus } from './helpers/httpStatus.js'

export const deleteUserController = (request, response) => {
  try {
    const isValidParam = ParamIdDto.safeParse(request.params)
    if (!isValidParam.success) {
      return response.status(HttpStatus.BAD_REQUEST).json(isValidParam.error)
    }
    deleteUserServices(request.params.id)

    return response.status(HttpStatus.NO_CONTENT).json()
  } catch (error) {
    if (error instanceof UserNotFoundException) {
      return response.status(HttpStatus.NOT_FOUND).json(error.message)
    }
    return response.status(HttpStatus.SERVER_ERROR).json(new ServerError().message)
  }
}
