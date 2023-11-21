import { userLoginServices } from '../services/loginUserServices.js'

const userLoginController = async (request, response) => {
  const { email, password } = request.body

  const [status, token] = await userLoginServices(email, password)

  return response.status(status).json(token)
}
export default userLoginController
