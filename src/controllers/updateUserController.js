import { updateUserServices } from '../services/updateUserServices.js'

export const updateUserController = async (request, response) => {
  try {
    const data = await updateUserServices(
      request.params.id,
      request.body
    )

    // o password é deletado no retorno por boas praticas
    delete data.password

    return response.status(200).json(data)
  } catch (error) {
    return response.status(404).json({ error: 'User not found' })
  }
}
