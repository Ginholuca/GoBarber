import { Router } from 'express'

import AuthenticateUserService from '../services/AuthenticateUserService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (req, res) => {
  const { email, password } = req.body

  const authenticateUser = new AuthenticateUserService()

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  })

  delete user.password // tirar o retorno do password do usuario

  return res.json({ user, token })
})

export default sessionsRouter

/**
 * Toda vez que a gente ta criando algum tipo de dado que vai ser armazenado
 * na aplicação (seja no BD, na memória, etc) a gente vai criar um Model/Entidade.
 */
