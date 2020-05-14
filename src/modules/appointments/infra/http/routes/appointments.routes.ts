import { Router } from 'express'

import ensureAuthenticated from '@modules/user/infra/http/middlewares/ensureAuthenticated'
import AppointmentsController from '../controllers/AppointmentsController'

// DTO = transmitir dados de um arquivo para outro.

const appointmentsRouter = Router()
const appointmentsController = new AppointmentsController()

appointmentsRouter.use(ensureAuthenticated)

// appointmentsRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsRepository.find()

//   return res.json(appointments)
// })

appointmentsRouter.post('/', appointmentsController.create)

export default appointmentsRouter

/**
 * Toda vez que a gente ta criando algum tipo de dado que vai ser armazenado
 * na aplicação (seja no BD, na memória, etc) a gente vai criar um Model/Entidade.
 */
