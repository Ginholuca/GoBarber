import { container } from 'tsyringe'

import IStorageprovider from './StorageProvider/models/IStorageProvider'
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider'

import IMailProvider from './MailProvider/models/IMailProvider'
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider'

container.registerSingleton<IStorageprovider>(
  'StorageProvider',
  DiskStorageProvider,
)

container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealMailProvider(),
)
