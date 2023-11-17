import { listUserByIdServices } from '../services/listUserByIdServices.js'

export const listUserByIdController = (request, response) => {
  const [status, data] = listUserByIdServices(request.params.id)

  return response.status(status).json(data)
}
