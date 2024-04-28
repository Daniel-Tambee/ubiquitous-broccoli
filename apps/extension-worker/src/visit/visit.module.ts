import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';

@Module({
  providers: [VisitService]
})
export class VisitModule {}
