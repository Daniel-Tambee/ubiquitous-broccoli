import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';
import { VisitController } from './visit.controller';
import { DbService } from '@app/lib/db/db.service';

@Module({
  providers: [VisitService, DbService],
  controllers: [VisitController],
})
export class VisitModule {}
