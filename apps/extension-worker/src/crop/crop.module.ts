import { Module } from '@nestjs/common';
import { CropController } from './crop.controller';

@Module({
  controllers: [CropController]
})
export class CropModule {}
