import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '@config/upload'
import { container } from 'tsyringe'

import CreateUserServices from '@modules/user/services/CreateUserServices'
import UpdateUserAvatarService from '@modules/user/services/UpdateUserAvatarService'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body

  const createUser = container.resolve(CreateUserServices)

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
    const updateUserAvatar = container.resolve(UpdateUserAvatarService)

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
