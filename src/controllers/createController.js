import { createUserServices } from '../services/createUserServices.js'
import { UserRequestDto } from './dto/user-request-dto.js'
import { ServerError } from './errors/server-error.js'
import { UserAlreadyExistsException } from './errors/user-already-exists-exception.js'
import { HttpStatus } from './helpers/httpStatus.js'

const createUserController = async (request, response) => {
  try {
    const isValidBodyDto = UserRequestDto.safeParse(request.body)
    if (!isValidBodyDto.success) {
      return response.status(HttpStatus.BAD_REQUEST).json(isValidBodyDto.error)
    }
    const data = await createUserServices(request.body)

    return response.status(HttpStatus.CREATED).json(data)
  } catch (error) {
    if (error instanceof UserAlreadyExistsException) {
      return response.status(HttpStatus.CONFLICT).json(error.message)
    }
    return response.status(HttpStatus.SERVER_ERROR).json(new ServerError().message)
  }
}

export default createUserController

// import, export, request, response
// []
// request.body, json
//
