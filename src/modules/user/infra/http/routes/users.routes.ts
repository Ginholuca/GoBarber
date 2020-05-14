import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload'

import UsersRepository from '@modules/user/infra/typeorm/repositories/UsersRepository'
import CreateUserServices from '@modules/user/services/CreateUserServices'
import UpdateUserAvatarService from '@modules/user/services/UpdateUserAvatarService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body

  const usersRepository = new UsersRepository()
  const createUser = new CreateUserServices(usersRepository)

  const user = await createUser.execute({
    name,
    email,
    password,
  })

  delete user.password

  return res.json(user)
})

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    const usersRepository = new UsersRepository()
    const updateUserAvatar = new UpdateUserAvatarService(usersRepository)

    const user = await updateUserAvatar.execute({
      user_id: req.user.id,
      avatarFilename: req.file.filename,
    })

    delete user.password
    return res.json(user)
  },
)

export default usersRouter

/**
 * Toda vez que a gente ta criando algum tipo de dado que vai ser armazenado
 * na aplicação (seja no BD, na memória, etc) a gente vai criar um Model/Entidade.
 */
