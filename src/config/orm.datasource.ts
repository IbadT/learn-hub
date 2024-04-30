import migrations from './../database/migrations/index'
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import * as process from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';
config({ path: join(process.cwd(), `.env.${env}`) });

const options = (): DataSourceOptions => {
  const url = process.env.DB_URL;
  if (!url) {
    throw new Error('Database URL is empty');
  }
  return {
    url,
    username: "postgres",
    password: "admin",
    host: "localhost",
    type: 'postgres',
    schema: 'public',
    logging: env === 'development',
    entities: [join(process.cwd(), 'src', '**', '*.entity.ts')],
    migrations,
    migrationsRun: true,
    migrationsTableName: 'migrations',
  };
  
};
export const appDataSource = new DataSource(options());