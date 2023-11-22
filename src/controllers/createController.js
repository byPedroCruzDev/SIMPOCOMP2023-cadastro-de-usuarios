import { createUserServices } from '../services/createUserServices.js'

const createUserController = async (request, response) => {
  try {
    const data = await createUserServices(request.body)

    return response.status(200).json(data)
  } catch (error) {
    console.error('Server error:', error)
    return [500, { error: 'server error.' }]
  }
}

export default createUserController

// import, export, request, response
// []
// request.body, json
//
