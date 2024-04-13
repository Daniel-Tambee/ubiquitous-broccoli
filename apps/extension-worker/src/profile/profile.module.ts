import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { DbService } from '@app/lib/db/db.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService,DbService],
})
export class ProfileModule {}
