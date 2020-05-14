import { getRepository, Repository } from 'typeorm'

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'

import Appointment from '../entities/Appointment'

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>

  constructor() {
    this.ormRepository = getRepository(Appointment)
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    })

    return findAppointment || undefined
  }
}
export default AppointmentsRepository

// Retorno de uma function async sempre será uma proise.
// Promise - promessa que vai executar alguma coisa.

// Quando se cria metodos dentro de uma classe no TS, é recomendado colocar o retorno do metodo.

/**
 * Repositorio => O detentor das operaçôes que a gente vai fazer em cima dos dados da aplicação.
 * Sempre que a gente for armazenar qualquer tipo de dado, os repositórios vão ser utilizados para
 * conseguir realizar as operações em cima desses dados: Criar, ler, editar, deletar , etc.
 */
