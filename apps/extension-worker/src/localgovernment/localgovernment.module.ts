import { Module } from '@nestjs/common';
import { LolGovService } from './lol_gov.service';
import { LolGovController } from './lol_gov.controller';
import { DbService } from '@app/lib/db/db.service';
import { StatisticsService } from '../statistics/statistics.service';

@Module({
  providers: [LolGovService,DbService,StatisticsService],
  controllers: [LolGovController]
})
export class LocalgovernmentModule {}
