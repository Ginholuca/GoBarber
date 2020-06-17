import { container } from 'tsyringe'

import '@modules/user/providers'
import './providers'

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository'

import IUsersRepository from '@modules/user/repositories/IUsersRepository'
import UserRepository from '@modules/user/infra/typeorm/repositories/UsersRepository'

import IUserTokensRepository from '@modules/user/repositories/IUserTokensRepository'
import UserTokensRepository from '@modules/user/infra/typeorm/repositories/UserTokensRepository'

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
)

container.registerSingleton<IUsersRepository>('UserRepository', UserRepository)

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
)
