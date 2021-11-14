import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from './connection/database.module';


//import { CblockModule } from './modules/cblock/cblock.module';
import {UserModule} from './modules/user/user.module';
import {User} from './modules/user/entity/user.entity'
import config from './config/config';

@Module({
  imports: [ConfigModule.forRoot({
    load: [config],
    envFilePath: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    isGlobal: true
    
    }),
     
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => configService.get('database'),
    inject: [ConfigService],
    }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
