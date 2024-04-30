import { IsEnum, IsString } from 'class-validator'
import { Environment } from './types/configuration.enums'

export class ApplicationConfig {
    @IsEnum(Environment, { always: true }) // входящее значение является одним из ожидаемых
    NODE_ENV: Environment;

    @IsString({ always: true })
    SERVICE_NAME: string

    @IsString({ always: true })
    HTTP_PORT: string

    @IsString({ always: true })
    HTTP_VERSION: string
}