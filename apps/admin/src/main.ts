import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  const config = new DocumentBuilder()
    .setTitle('Admin Doc')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.FARMER_PORT || 3000);
  const logger: Logger = new Logger('Admin Logic', {
    timestamp: true,
  });
  logger.log('app running on ' + process.env.FARMER_PORT);
}
bootstrap();
