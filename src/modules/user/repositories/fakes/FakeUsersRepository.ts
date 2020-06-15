import { uuid } from 'uuidv4'

import IUsersRepository from '@modules/user/repositories/IUsersRepository'

import User from '../../infra/typeorm/entities/User'
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO'

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = []

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id)

    return findUser
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email)

    return findUser
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, { id: uuid() }, userData)

    this.users.push(user)

    return user
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id)

    this.users[findIndex] = user

    return user
  }
}
export default FakeUsersRepository

// Retorno de uma function async sempre será uma proise.
// Promise - promessa que vai executar alguma coisa.

// Quando se cria metodos dentro de uma classe no TS, é recomendado colocar o retorno do metodo.

/**
 * Repositorio => O detentor das operaçôes que a gente vai fazer em cima dos dados da aplicação.
 * Sempre que a gente for armazenar qualquer tipo de dado, os repositórios vão ser utilizados para
 * conseguir realizar as operações em cima desses dados: Criar, ler, editar, deletar , etc.
 */
