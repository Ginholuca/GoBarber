import nodemailer, { Transporter } from 'nodemailer'
import IMailProvider from '../models/IMailProvider'
import ISendMailDTO from '../dtos/ISendMailDTO'

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      })

      this.client = transporter
    })
  }

  public async sendMail({ to, from, subject }: ISendMailDTO): Promise<void> {
    await this.client.sendMail({
      from: {
        name: from?.name || 'Equipe Gobarber',
        address: from?.email || 'equipre@gobarber.com.br',
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      text: 'Teste',
    })
  }
}
