import { updateUserServices } from '../services/updateUserServices.js'

export const updateUserController = async (request, response) => {
  const [status, data] = await updateUserServices(
    request.params.id,
    request.body
  )

  // o password é deletado no retorno por boas praticas
  delete data.password
  return response.status(status).json(data)
}
