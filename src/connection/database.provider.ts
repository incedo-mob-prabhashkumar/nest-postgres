import { createConnection } from 'typeorm';

export const databaseProviders = 
 [ {
    provide: 'DATABASE_CONNECTION_PG',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kumar9',
      database: 'db',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }).then((res)=>{
       // console.log(res.connect())
    },err=>{
        //console.log(err)
    }).catch(error => console.log(error))
  }]