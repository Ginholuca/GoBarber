import { Router } from 'express'
import CreateUserServices from '../services/CreateUserServices'

const usersRouter = Router()

usersRouter.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body

    const createUser = new CreateUserServices()

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    delete user.password

    return res.json(user)
  } catch (err) {
    return res.status(400).json({ erro: err.message })
  }
})

export default usersRouter

/**
 * Toda vez que a gente ta criando algum tipo de dado que vai ser armazenado
 * na aplicação (seja no BD, na memória, etc) a gente vai criar um Model/Entidade.
 */
