// Importando a o framework express para ser utilizado nesse arquivo
import express from 'express'
import { createUserController } from './controllers/createController.js'
import { listUserController } from './controllers/listUsersController.js'
import { updateUserController } from './controllers/updateUserController.js'
import { listUserByIdController } from './controllers/listUserByIdController.js'
import { deleteUserController } from './controllers/deleteUserController.js'
import { isOwner } from './middlewares/isOwnerMiddleware.js'
import { userLoginController } from './controllers/loginUserController.js'

// Cria um instancia que facilita utilizacao futura
const app = express()
// isso padroniza a entrada de dados em json
app.use(express.json())
// define a porta em que o nosso servidor ira rodar.
const PORT = 3000

app.post('/users', createUserController)

app.get('/users', listUserController)

app.patch('/users/:id', isOwner, updateUserController)

app.delete('/users/:id', isOwner, deleteUserController)

app.get('/users/:id', listUserByIdController)

app.post('/login', userLoginController)

// a funcao listen "ouve" tudo que acontece em um determinado local/porta
// ele recebe dois parametros, onde ele ira ouvir, e uma funcao que indica o que o servidore
// ira ouvir.
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

// local onde voce pode abrir no seu navegador.
// http://localhost:3000/
