import { Module } from '@nestjs/common';
import { InterventionController } from './Intervention.controller';
import { InterventionService } from './intervention.service';
import { DbService } from '@app/lib/db/db.service';

@Module({
  controllers: [InterventionController],
  providers: [InterventionService, DbService],
})
export class InterventionModule {}
