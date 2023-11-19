import { listUserServices } from '../services/listUsersServices.js'

export const listUserController = (request, response) => {
  const [status, data] = listUserServices()

  return response.status(status).json(data)
};
