import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm'

import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

/**
 * [x] Recebimento das informações
 * [x] Tratativas de erros/excessões
 * [x] Acesso ao repositório
 */

interface RequestDTO {
  provider_id: string
  date: Date
}

class CreateAppointmentServcie {
  public async execute({
    date,
    provider_id,
  }: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentDate = startOfHour(date)

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    )

    if (findAppointmentInSameDate) {
      throw Error('This appointment is alredy booked.')
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    })

    await appointmentsRepository.save(appointment)
    return appointment
  }
}

export default CreateAppointmentServcie
