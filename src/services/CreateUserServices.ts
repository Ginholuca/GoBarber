import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import AppError from '../errors/AppError'

import User from '../models/User'

interface Request {
  name: string
  email: string
  password: string
}

class CreateUserServices {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const chekUserExists = await usersRepository.findOne({
      where: { email },
    })
    if (chekUserExists) {
      throw new AppError('Email address already used.')
    }

    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserServices
