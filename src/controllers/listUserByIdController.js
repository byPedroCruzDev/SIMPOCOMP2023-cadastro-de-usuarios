import { listUserByIdServices } from '../services/listUserByIdServices.js'

export const listUserByIdController = (request, response) => {
  try {
    const data = listUserByIdServices(request.params.id)

    return response.status(200).json(data)
  } catch (error) {
    return response.status(404).json({ error: 'User not found' })
  }
}
