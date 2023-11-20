import users from '../database.js'

export const emailExistMiddleware = (request, response, next) => {
  const indexUser = users.findIndex((user) => user.email === request.body.email)

  if (indexUser !== -1) {
    return response.status(409).json({
      message: 'User not found'
    })
  }

  return next()
}
