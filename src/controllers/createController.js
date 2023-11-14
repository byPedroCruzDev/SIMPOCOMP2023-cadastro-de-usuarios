import { createUserServices } from '../services/createUserServices.js'

const createUserController = async (request, response) => {
  const [status, data] = await createUserServices(request.body)
  return response.status(status).json(data)
}

export default createUserController

// import, export, request, response
// []
// request.body, json
//
