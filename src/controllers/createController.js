import { createUserServices } from '../services/createUserServices.js'
import { HttpStatus } from './helpers/httpStatus.js'

const createUserController = async (request, response) => {
  const data = await createUserServices(request.body)
  return response.status(HttpStatus.CREATED).json(data)
}

export default createUserController

// import, export, request, response
// []
// request.body, json
//
