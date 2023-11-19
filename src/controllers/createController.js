import { createUserServices } from '../services/createUserServices.js'

export const createUserController = async (request, response) => {
  const [status, data] = await createUserServices(request.body)
  return response.status(status).json(data)
}

// import, export, request, response
// []
// request.body, json
//
