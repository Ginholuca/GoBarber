import IMailTemplateProvider from '../models/IMailTemplateProvider'

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail Template'
  }
}

export default FakeMailTemplateProvider
