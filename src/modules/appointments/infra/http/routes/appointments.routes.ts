import { Router } from 'express'
import { parseISO } from 'date-fns'

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository'
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService'

import ensureAuthenticated from '@modules/user/infra/http/middlewares/ensureAuthenticated'

// DTO = transmitir dados de um arquivo para outro.

const appointmentsRouter = Router()
const appointmentsRepository = new AppointmentsRepository()

appointmentsRouter.use(ensureAuthenticated)

// appointmentsRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsRepository.find()

//   return res.json(appointments)
// })

appointmentsRouter.post('/', async (req, res) => {
  const { provider_id, date } = req.body

  const parsedDate = parseISO(date)

  const createAppointment = new CreateAppointmentService(appointmentsRepository)

  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  })

  return res.json(appointment)
})

export default appointmentsRouter

/**
 * Toda vez que a gente ta criando algum tipo de dado que vai ser armazenado
 * na aplicação (seja no BD, na memória, etc) a gente vai criar um Model/Entidade.
 */
