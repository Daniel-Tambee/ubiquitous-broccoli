import { Module } from '@nestjs/common';
import { DisbursementController } from './disbursement.controller';

@Module({
  controllers: [DisbursementController]
})
export class DisbursementModule {}
