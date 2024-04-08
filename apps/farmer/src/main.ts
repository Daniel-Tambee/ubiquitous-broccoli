import { NestFactory } from '@nestjs/core';
import { FarmerModule } from './farmer.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(FarmerModule);
  const config = new DocumentBuilder()
    .setTitle('Farmer Doc')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.FARMER_PORT || 3000);
  const logger: Logger = new Logger('Farmer Logic', {
    timestamp: true,
  });
  logger.log('app running on ' + process.env.FARMER_PORT);
}
bootstrap();
