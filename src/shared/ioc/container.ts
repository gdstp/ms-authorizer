import 'reflect-metadata'
import { Container } from 'inversify'
import { ILoggerService, LoggerServiceToken } from '@/business/services/iLoggerService'
import { LoggerService } from '@/framework/services/LoggerService'

const container = new Container()

container.bind<ILoggerService>(LoggerServiceToken).to(LoggerService)

export { container }
