import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as path from 'path'

import "reflect-metadata";
import { lookup } from 'dns';
async function bootstrap() {
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
  Logger.log(path.resolve(__dirname, '../.env'))
  Logger.log(JSON.stringify(process.env));
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const con = new DocumentBuilder()
    .setTitle('Cblock')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, con);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  Logger.log(`Nest Server DB ready and running on ${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT || '3000'}/${process.env}`);
}
bootstrap();
