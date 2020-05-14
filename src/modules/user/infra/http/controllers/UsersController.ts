import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateUserServices from '@modules/user/services/CreateUserServices'

export default class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body

    const createUser = container.resolve(CreateUserServices)

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    delete user.password

    return res.json(user)
  }
}
