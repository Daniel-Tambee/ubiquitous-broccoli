import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ChallengeController } from './challenge.controller';
import { DbService } from '@app/lib/db/db.service';

@Module({
  providers: [ChallengeService, DbService],
  controllers: [ChallengeController],
})
export class ChallengeModule {}
