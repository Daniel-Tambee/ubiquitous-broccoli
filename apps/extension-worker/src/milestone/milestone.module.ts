import { Module } from '@nestjs/common';
import { MilestoneController } from './milestone.controller';
import { MilestoneService } from './milestone.service';
import { DbService } from '@app/lib/db/db.service';

@Module({
  controllers: [MilestoneController],
  providers: [MilestoneService,DbService]
})
export class MilestoneModule {}
