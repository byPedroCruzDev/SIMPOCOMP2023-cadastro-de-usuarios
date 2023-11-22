import { listUserByIdServices } from '../services/listUserByIdServices.js'

export const listUserByIdController = (request, response) => {
  try {
    const data = listUserByIdServices(request.params.id, response)

    return response.status(200).json(data)
  } catch (error) {
    return [404, { error: 'User not found' }]
  }
}
