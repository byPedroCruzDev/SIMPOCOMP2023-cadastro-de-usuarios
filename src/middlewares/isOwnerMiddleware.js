import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const isOwner = (request, response, next) => {
  const token = request.headers.authorization.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    if (decoded.sub === request.params.id) {
      next()
    } else {
      return response.status(401).json({ message: 'you arent owner' })
    }
  } catch (error) {
    console.error('Erro ao verificar o token:', error)
    response.status(401).json({ message: 'Token inválido.' })
  }
}
