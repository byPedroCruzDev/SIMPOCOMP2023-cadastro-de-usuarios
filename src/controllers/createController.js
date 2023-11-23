import { createUserServices } from '../services/createUserServices.js'

export const createUserController = async (request, response) => {
  try {
    const data = await createUserServices(request.body)

    return response.status(201).json(data)
  } catch (error) {
    console.error('Server error:', error)
    return response.status(500).json({ error: 'server error.' })
  }
}

// import, export, request, response
// []
// request.body, json
//
