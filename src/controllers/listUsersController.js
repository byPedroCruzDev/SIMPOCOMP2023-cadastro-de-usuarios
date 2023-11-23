import { listUserServices } from '../services/listUsersServices.js'

export const listUserController = (request, response) => {
  try {
    const data = listUserServices()

    return response.status(200).json(data)
  } catch (error) {
    return response.status(404).json({ error: 'User not found' })
  }
}
