import { deleteUserServices } from '../services/deleteUserServices.js'

export const deleteUserController = (request, response) => {
  try {
    const [status] = deleteUserServices(request.params.id, response)

    return response.status(status).json()
  } catch (error) {
    return [404, { error: 'User not found' }]
  }
}
