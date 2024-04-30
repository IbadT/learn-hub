import { 
    DB_HOST,
    DB_LOGGING,
    DB_MIGRATIONS_RUN,
    DB_MIGRATIONS_TABLE_NAME,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_TYPE,
    DB_USERNAME
} from '../constants/index'
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { PostgresConnectionCredentialsOptions } from "typeorm/driver/postgres/PostgresConnectionCredentialsOptions";
import migrations from "./migrations";

export const databaseOptions = (config: ConfigService): 
        TypeOrmModuleOptions & PostgresConnectionCredentialsOptions => ({
    type: <any>config.get(DB_TYPE),
    // host: config.get(DB_HOST),
    host: "db",
    port: Number(config.get(DB_PORT)),
    // username: config.get(DB_USERNAME),
    username: "postgres",
    // password: config.get(DB_PASSWORD),
    password: "postgres",
    database: config.get(DB_NAME),
    logging: config.get(DB_LOGGING) === true,
    synchronize: true,
    migrationsRun: config.get(DB_MIGRATIONS_RUN) === true,
    migrationsTableName: config.get(DB_MIGRATIONS_TABLE_NAME),
    migrations,
    autoLoadEntities: true,
});