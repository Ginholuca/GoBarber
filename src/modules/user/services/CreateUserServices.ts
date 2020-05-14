import { hash } from 'bcryptjs'
import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IUsersRepository from '@modules/user/repositories/IUsersRepository'

import User from '../infra/typeorm/entities/User'

interface IRequest {
  name: string
  email: string
  password: string
}

@injectable()
class CreateUserServices {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const chekUserExists = await this.usersRepository.findByEmail(email)
    if (chekUserExists) {
      throw new AppError('Email address already used.')
    }

    const hashedPassword = await hash(password, 8)

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    return user
  }
}

export default CreateUserServices
