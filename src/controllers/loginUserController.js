import { userLoginServices } from '../services/loginUserServices.js'

export const userLoginController = async (request, response) => {
  try {
    const { email, password } = request.body

    const token = await userLoginServices(email, password)

    return response.status(200).json(token)
  } catch (error) {
    console.error('Error creating token:', error)
    return response.status(500).json({ error: 'Internal error creating token.' })
  }
}
