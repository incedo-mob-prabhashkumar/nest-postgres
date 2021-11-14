import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from './connection/database.module';

//import { CblockModule } from './modules/cblock/cblock.module';
import {UserModule} from './modules/user/user.module';
import {User} from './modules/user/entity/user.entity'

@Module({
  imports: [ConfigModule.forRoot({ envFilePath:'.env'}),TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kumar9',
    database: 'db',
    entities: [
     User
  ],
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
