import { updateUserServices } from '../services/updateUserServices.js'
import { ParamIdDto } from './dto/param-id-dto.js'
import { UserRequestUpdateDto } from './dto/user-request-update-dto.js'
import { ServerError } from './errors/server-error.js'
import { UserNotFoundException } from './errors/user-not-found-exception.js'
import { HttpStatus } from './helpers/httpStatus.js'

export const updateUserController = async (request, response) => {
  try {
    const isValidParam = ParamIdDto.safeParse(request.params)
    if (!isValidParam.success) {
      return response.status(HttpStatus.BAD_REQUEST).json(isValidParam.error)
    }
    const isValidBody = UserRequestUpdateDto.safeParse(request.body)
    if (!isValidParam.success) {
      return response.status(HttpStatus.BAD_REQUEST).json(isValidBody.error)
    }
    const data = await updateUserServices(
      request.params.id,
      request.body
    )

    // o password é deletado no retorno por boas praticas
    delete data.password
    return response.status(HttpStatus.OK).json(data)
  } catch (error) {
    if (error instanceof UserNotFoundException) {
      return response.status(HttpStatus.NOT_FOUND).json(error.message)
    }
    return response.status(HttpStatus.SERVER_ERROR).json(new ServerError().message)
  }
}
