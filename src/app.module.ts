import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseModule} from './connection/database.module';

import { configService } from './config/config.service';

//import { CblockModule } from './modules/cblock/cblock.module';
import {UserModule} from './modules/user/user.module';
import {User} from './modules/user/entity/user.entity'
import config from './config/config';

@Module({
  imports: [ TypeOrmModule.forRoot(configService.getTypeOrmConfig()),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
