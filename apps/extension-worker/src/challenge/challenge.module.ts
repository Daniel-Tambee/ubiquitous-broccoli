import { Module } from '@nestjs/common';
import { ChallengeService } from './challenge.service';

@Module({
  providers: [ChallengeService]
})
export class ChallengeModule {}
