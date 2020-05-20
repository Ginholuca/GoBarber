import { container } from 'tsyringe'

import '@modules/user/providers'
import './providers'

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository'

import IUserRepository from '@modules/user/repositories/IUsersRepository'
import UserRepository from '@modules/user/infra/typeorm/repositories/UsersRepository'

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
)

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
