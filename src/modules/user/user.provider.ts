import { Connection ,getRepository } from 'typeorm';
import { User } from './entity/user.entity';

export const UserProviders = 
  {
    provide: 'USER_REPOSITORY',
    useFactory:  async(connection: Connection) => await connection.getRepository(User),
    inject: ['DATABASE_CONNECTION_PG'],
  }
;