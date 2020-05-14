import { EntityRepository, Repository } from 'typeorm'

import Appointment from '../infra/typeorm/entities/Appointment'

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    })

    return findAppointment || null
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
