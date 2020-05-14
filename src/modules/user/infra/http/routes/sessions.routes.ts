import { Router } from 'express'

import SessionsController from '../controllers/SessionsController'

const sessionsRouter = Router()

const sessionsController = new SessionsController()

sessionsRouter.post('/', sessionsController.create)

export default sessionsRouter

/**
 * Toda vez que a gente ta criando algum tipo de dado que vai ser armazenado
 * na aplicação (seja no BD, na memória, etc) a gente vai criar um Model/Entidade.
 */
