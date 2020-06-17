import { getRepository, Repository } from 'typeorm'

import IUserTokensRepository from '@modules/user/repositories/IUserTokensRepository'

import UserToken from '../entities/UserToken'

class UserTokensRepository implements IUserTokensRepository {
  private ormRepository: Repository<UserToken>

  constructor() {
    this.ormRepository = getRepository(UserToken)
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: { token },
    })

    return userToken
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = this.ormRepository.create({
      user_id,
    })

    await this.ormRepository.save(userToken)

    return userToken
  }
}
export default UserTokensRepository

// Retorno de uma function async sempre será uma proise.
// Promise - promessa que vai executar alguma coisa.

// Quando se cria metodos dentro de uma classe no TS, é recomendado colocar o retorno do metodo.

/**
 * Repositorio => O detentor das operaçôes que a gente vai fazer em cima dos dados da aplicação.
 * Sempre que a gente for armazenar qualquer tipo de dado, os repositórios vão ser utilizados para
 * conseguir realizar as operações em cima desses dados: Criar, ler, editar, deletar , etc.
 */
