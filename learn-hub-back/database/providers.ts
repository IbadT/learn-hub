import * as dotenv from 'dotenv';
import { Sequelize } from "sequelize-typescript";
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from 'src/constants';
import { AdminEntity } from "src/admin/entities/admin.entity";
dotenv.config();


export const databaseProviders = [{
  provide: SEQUELIZE,
  useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
      case DEVELOPMENT:
         config = databaseConfig.development;
         break;
      case TEST:
         config = databaseConfig.test;
         break;
      case PRODUCTION:
         config = databaseConfig.production;
         break;
      default:
         config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([AdminEntity]);
      await sequelize.sync();
      return sequelize;
  },
}];


export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  test: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}

export const databaseConfig: IDatabaseConfig = {
  development: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME_DEVELOPMENT,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
  },
  test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME_TEST,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
  },
  production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME_PRODUCTION,
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
  },
};