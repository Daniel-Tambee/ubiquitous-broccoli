import { Module } from '@nestjs/common';
import { InterventionController } from './Intervention.controller';

@Module({
  controllers: [InterventionController],
})
export class InterventionModule {}
