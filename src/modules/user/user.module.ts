import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../../connection/database.module';
import { UserController } from './user.controller';
//import {UserProviders} from './user.provider';
import { UserService } from './user.service';
import { User } from './entity/user.entity';



@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
  
  
}
