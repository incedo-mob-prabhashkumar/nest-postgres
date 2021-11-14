import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) {   console.log(env ); }

  

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username:  process.env.POSTGRES_USER,
      password:  process.env.POSTGRES_PASSWORD,
      database:  process.env.POSTGRES_DATABASE,

      entities: ['**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',

     // migrations: ['src/migration/*.ts'],

     /* cli: {
        migrationsDir: 'src/migration',
      },*/

     // ssl: this.isProduction(),
    };
  }

}

/*const configService = new ConfigService(process.env)
  .ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE'
  ]);

export { configService };*/