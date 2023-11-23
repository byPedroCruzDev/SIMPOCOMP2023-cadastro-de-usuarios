import { deleteUserServices } from '../services/deleteUserServices.js'

export const deleteUserController = (request, response) => {
  try {
    const [status] = deleteUserServices(request.params.id)

    return response.status(status).json()
  } catch (error) {
    return response.status(404).json({ error: 'User not found' })
  }
}
