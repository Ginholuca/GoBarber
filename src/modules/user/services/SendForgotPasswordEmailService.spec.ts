// import AppError from '@shared/errors/AppError'

import FakeUsersRepository from '@modules/user/repositories/fakes/FakeUsersRepository'
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider'
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService'

// categoria de test
describe('SendForgotPasswordEmail', () => {
  it('should be able to recovery the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeMailProvider = new FakeMailProvider()

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail')

    const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
    )

    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    await sendForgotPasswordEmail.execute({
      email: 'johndoe@example.com',
    })

    expect(sendMail).toHaveBeenCalled()
  })
})
