import { getRepository, Repository } from 'typeorm'

import IUsersRepository from '@modules/user/repositories/IUsersRepository'

import User from '../entities/User'
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO'

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>

  constructor() {
    this.ormRepository = getRepository(User)
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id)

    return user
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    })

    return user
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const appointment = this.ormRepository.create(userData)

    await this.ormRepository.save(appointment)

    return appointment
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user)
  }
}
export default UsersRepository

// Retorno de uma function async sempre será uma proise.
// Promise - promessa que vai executar alguma coisa.

// Quando se cria metodos dentro de uma classe no TS, é recomendado colocar o retorno do metodo.

/**
 * Repositorio => O detentor das operaçôes que a gente vai fazer em cima dos dados da aplicação.
 * Sempre que a gente for armazenar qualquer tipo de dado, os repositórios vão ser utilizados para
 * conseguir realizar as operações em cima desses dados: Criar, ler, editar, deletar , etc.
 */
