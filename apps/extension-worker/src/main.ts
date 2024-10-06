import { NestFactory } from '@nestjs/core';
import { ExtensionWorkerModule } from './extension-worker/extension-worker.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { join } from 'path';
import { AllExceptionsFilter } from '@app/lib/auth/error_filter.filter';

async function bootstrap() {
  const app = await NestFactory.create(ExtensionWorkerModule);
  app.enableCors({
    origin: ['https://yolaweb.vercel.app', '*', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Extension Worker Doc')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  // app.use('compodoc', express.static(join(__dirname, '..', 'documentation')));
  //   // Optionally, log requests to /compodoc
  //   app.use('/compodoc', (req, res, next) => {
  //     console.log(`Accessing Compodoc: ${req.method} ${req.originalUrl}`);
  //     next();
  //   });

  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(process.env.WORKER_PORT || 3000);
  const logger: Logger = new Logger('Extension Worker Logic', {
    timestamp: true,
  });
  logger.log('app running on ' + 3000);
}
bootstrap();
