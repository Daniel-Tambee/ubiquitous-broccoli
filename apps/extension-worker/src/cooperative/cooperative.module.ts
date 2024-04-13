import { Module } from '@nestjs/common';
import { CooperativeController } from './cooperative.controller';

@Module({
  controllers: [CooperativeController]
})
export class CooperativeModule {}
