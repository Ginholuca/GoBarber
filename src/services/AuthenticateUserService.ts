import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'

import User from '../models/User'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = getRepository(User)

    const user = await userRepository.findOne({
      where: { email },
    })

    if (!user) {
      throw new Error('Incorrect email/password combination.')
    }

    const passwordMached = await compare(password, user.password)

    if (!passwordMached) {
      throw new Error('Incorrect email/password combination.')
    }

    return {
      user,
    }
  }
}

export default AuthenticateUserService
