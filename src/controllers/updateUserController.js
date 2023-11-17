import { updateUserServices } from '../services/updateUserServices.js'
import { HttpStatus } from './helpers/httpStatus.js'

export const updateUserController = async (request, response) => {
  const data = await updateUserServices(
    request.params.id,
    request.body
  )

  // o password é deletado no retorno por boas praticas
  delete data.password
  return response.status(HttpStatus.OK).json(data)
}
