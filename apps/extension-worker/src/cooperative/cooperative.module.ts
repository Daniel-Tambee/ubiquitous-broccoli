import { Module } from '@nestjs/common';
import { CooperativeController } from './cooperative.controller';
import { CooperativeService } from './cooperative.service';
import { DbService } from '@app/lib/db/db.service';

@Module({
  controllers: [CooperativeController],
  providers: [CooperativeService,DbService]
})
export class CooperativeModule {}
